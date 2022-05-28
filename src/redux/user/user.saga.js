import { call, put, takeEvery, debounce } from 'redux-saga/effects';
import { getAll, saveUser } from 'src/apis/user';
import { userActions } from './user.slice';
import { callLoading } from '../others/saga';
function* getUser({ payload }) {
    function* doRQ() {
        const res = yield call(getAll, payload);
        const { status, data } = res;
        if (status === 200) {
            yield put(userActions.getUserSuccess(data));
        } else {
            yield console(status, data);
        }
    }
    yield callLoading(doRQ);
}
function* addUser({ payload }) {
    const { inputs, type } = payload;
    function* doRQ() {
        const res = yield call(saveUser, inputs);
        const { status, data } = res;
        if (status === 200) {
            if (type === 'add') {
                yield put(userActions.saveUserSuccess(data));
            } else {
                yield put(userActions.updateUserSuccess(data));
            }
        } else {
            yield console(status, data);
        }
    }
    yield callLoading(doRQ);
}
function* userSaga() {
    yield debounce(300, userActions.getUser.type, getUser);
    yield takeEvery(userActions.saveUser.type, addUser);
}
export default userSaga;
