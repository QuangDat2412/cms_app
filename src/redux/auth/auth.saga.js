import { call, put, takeEvery } from 'redux-saga/effects';
import { login as loginApi, getCurrentUser } from 'src/apis/auth';
import { loginActions } from './auth.slice';
function* _login({ payload }) {
    function* doRQ() {
        const res = yield call(loginApi, payload);
        const { status, data } = res;
        if (status === 200) {
            localStorage.setItem('token', data.accessToken);
            yield put(loginActions.updateToken(data.accessToken));
        } else {
            yield console(status, data);
        }
    }
    yield call(doRQ);
}
function* getUser() {
    function* doRQ() {
        const res = yield call(getCurrentUser);
        const { status, data } = res;
        if (status === 200) {
            yield put(loginActions.getCurrentUserSuccess(data));
        } else {
            yield console(status, data);
        }
    }
    yield call(doRQ);
}

function* loginSaga() {
    // yield takeLatest(loginActions.login.type, _login);
    yield takeEvery(loginActions.login.type, _login);
    yield takeEvery(loginActions.getCurrentUser.type, getUser);
}
export default loginSaga;
