import { call, put, takeEvery } from 'redux-saga/effects';
import { addCourse, getCourse } from 'src/apis/course';
import { courseActions } from './course.slice';
function* add({ payload }) {
    function* doRQ() {
        const res = yield call(addCourse, payload);
        const { status, data } = res;
        if (status === 200) {
            yield put(courseActions.saveCourseSuccess(data));
        } else {
            yield console(status, data);
        }
    }
    yield call(doRQ);
}
function* get({ payload }) {
    function* doRQ() {
        const res = yield call(getCourse, payload);
        const { status, data } = res;
        if (status === 200) {
            yield put(courseActions.getCourseSuccess(data));
        } else {
            yield console(status, data);
        }
    }
    yield call(doRQ);
}
function* authSaga() {
    yield takeEvery(courseActions.saveCourse.type, add);
    yield takeEvery(courseActions.getCourse.type, get);
}
export default authSaga;
