import { call, put, takeEvery } from 'redux-saga/effects';
import { login as loginApi, googleLogin as googleLoginApi } from 'src/apis/auth';
import { authActions } from './auth.slice';
function* _login({ payload }) {
    function* doRQ() {
        const res = yield call(loginApi, payload);
        const { status, data } = res;
        if (status === 200) {
            localStorage.setItem('currentUser', JSON.stringify(data));
            yield put(authActions.loginSuccess(data));
        } else {
            yield console(status, data);
        }
    }
    yield call(doRQ);
}
function* _googleLogin({ payload }) {
    function* doRQ() {
        const res = yield call(googleLoginApi, payload);
        const { status, data } = res;
        console.log(data);
        if (status === 200) {
            localStorage.setItem('currentUser', JSON.stringify(data));
            yield put(authActions.loginSuccess(data));
        } else {
            yield console(status, data);
        }
    }
    yield call(doRQ);
}

function* authSaga() {
    // yield takeLatest(loginActions.login.type, _login);
    yield takeEvery(authActions.login.type, _login);
    yield takeEvery(authActions.googleLogin.type, _googleLogin);
}
export default authSaga;
