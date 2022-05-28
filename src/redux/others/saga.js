import { put, delay, call, takeEvery } from 'redux-saga/effects';
import { OthersAction } from './slice';
import { getAll } from 'src/apis/options';

export function* callLoading(functionIsCalled) {
    yield put(OthersAction.changePageLoading(true));
    yield call(functionIsCalled);
    yield delay(100);
    yield put(OthersAction.changePageLoading(false));
}
function* _getOptions({ payload }) {
    function* doRQ() {
        const res = yield call(getAll, payload);
        const { status, data } = res;
        if (status === 200) {
            localStorage.setItem('options', JSON.stringify(data));
            yield put(OthersAction.saveOptions(data));
        } else {
            yield console(status, data);
        }
    }
    yield callLoading(doRQ);
}
function* otherSaga() {
    yield takeEvery(OthersAction.getOptions.type, _getOptions);
}
export default otherSaga;
