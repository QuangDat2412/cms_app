import { call, put, takeEvery, debounce } from 'redux-saga/effects';
import {
    addCourse,
    getCourse,
    getCourseByCode,
    addTopic,
    getTopic,
    addLesson,
    getLesson,
    deleteLesson,
    deleteTopic,
    deleteCourse,
} from 'src/apis/course';
import { courseActions } from './course.slice';
import { callLoading } from '../others/saga';

function* add({ payload }) {
    function* doRQ() {
        yield call(addCourse, payload);
    }
    yield callLoading(doRQ);
}
function* _addTopic({ payload }) {
    function* doRQ() {
        yield call(addTopic, payload);
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
        try {
            const res = yield call(getCourse, payload);
            const { data } = res;
            yield put(courseActions.getCourseSuccess(data));
        } catch (error) {}
    }
    yield callLoading(doRQ);
}
function* _getTopic({ payload }) {
    function* doRQ() {
        try {
            const res = yield call(getTopic, payload);
            const { data } = res;
            yield put(courseActions.getTopicSuccess(data));
        } catch (error) {}
    }
    yield callLoading(doRQ);
}
function* _getLesson({ payload }) {
    function* doRQ() {
        try {
            const res = yield call(getLesson, payload);
            const { data } = res;
            yield put(courseActions.getLessonSuccess(data));
        } catch (error) {}
    }
    yield callLoading(doRQ);
}
function* _deleteLesson({ payload }) {
    function* doRQ() {
        try {
            yield call(deleteLesson, payload);
        } catch (error) {}
    }
    yield callLoading(doRQ);
}
function* _deleteTopic({ payload }) {
    function* doRQ() {
        try {
            yield call(deleteTopic, payload);
        } catch (error) {}
    }
    yield callLoading(doRQ);
}
function* _deleteCourse({ payload }) {
    function* doRQ() {
        try {
            yield call(deleteCourse, payload);
        } catch (error) {}
    }
    yield callLoading(doRQ);
}

function* getByCode({ payload }) {
    function* doRQ() {
        try {
            const res = yield call(getCourseByCode, payload);
            const { data } = res;
            yield put(courseActions.getCourseByCodeSuccess(data));
        } catch (error) {}
    }
    yield callLoading(doRQ);
}
function* authSaga() {
    yield takeEvery(courseActions.saveCourse.type, add);
    yield takeEvery(courseActions.saveLesson.type, _addLesson);
    yield takeEvery(courseActions.saveTopic.type, _addTopic);
    yield debounce(300, courseActions.getCourse.type, get);
    yield debounce(300, courseActions.getTopic.type, _getTopic);
    yield debounce(300, courseActions.getLesson.type, _getLesson);
    yield takeEvery(courseActions.getCourseByCode.type, getByCode);
    yield takeEvery(courseActions.deleteLesson.type, _deleteLesson);
    yield takeEvery(courseActions.deleteTopic.type, _deleteTopic);
    yield takeEvery(courseActions.deleteCourse.type, _deleteCourse);
}
export default authSaga;
