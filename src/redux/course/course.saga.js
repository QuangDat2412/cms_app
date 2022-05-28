import { call, put, takeEvery, debounce } from 'redux-saga/effects';
import { addCourse, getCourse, getCourseByCode, addTopic, getTopic, addLesson } from 'src/apis/course';
import { courseActions } from './course.slice';
import { callLoading } from '../others/saga';

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
    yield callLoading(doRQ);
}
function* _addTopic({ payload }) {
    function* doRQ() {
        const res = yield call(addTopic, payload);
        const { status, data } = res;
        if (status === 200) {
            yield put(courseActions.saveTopicSuccess(data));
        } else {
            yield console(status, data);
        }
    }
    yield callLoading(doRQ);
}
function* _addLesson({ payload }) {
    function* doRQ() {
        yield call(addLesson, payload);
    }
    yield callLoading(doRQ);
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
    yield callLoading(doRQ);
}
function* _getTopic({ payload }) {
    function* doRQ() {
        const res = yield call(getTopic, payload);
        const { status, data } = res;
        if (status === 200) {
            yield put(courseActions.getTopicSuccess(data));
        } else {
            yield console(status, data);
        }
    }
    yield callLoading(doRQ);
}
function* getByCode({ payload }) {
    function* doRQ() {
        const res = yield call(getCourseByCode, payload);
        const { status, data } = res;
        if (status === 200) {
            yield put(courseActions.getCourseByCodeSuccess(data));
        } else {
            yield console(status, data);
        }
    }
    yield callLoading(doRQ);
}
function* authSaga() {
    yield takeEvery(courseActions.saveCourse.type, add);
    yield takeEvery(courseActions.saveLesson.type, _addLesson);
    yield takeEvery(courseActions.saveTopic.type, _addTopic);
    yield debounce(300, courseActions.getCourse.type, get);
    yield debounce(300, courseActions.getTopic.type, _getTopic);
    yield takeEvery(courseActions.getCourseByCode.type, getByCode);
}
export default authSaga;
