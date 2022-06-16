import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    courses: [],
    course: {},
    topics: [],
    lessons: [],
};

const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        saveCourse() {},
        saveTopic() {},
        saveLesson() {},
        getCourseSuccess(state, { payload }) {
            state.courses = payload.map((p) => {
                return { ...p, typeObj: p.type, type: p.type._id };
            });
        },
        getCourseByCodeSuccess(state, { payload }) {
            state.course = payload;
        },
        getCourse() {},
        getCourseByCode() {},
        getTopic() {},
        getLesson() {},
        deleteLesson() {},
        deleteTopic() {},
        deleteCourse() {},
        getTopicSuccess(state, { payload }) {
            state.topics = payload;
        },
        getLessonSuccess(state, { payload }) {
            state.lessons = payload;
        },
    },
});

// actions
export const courseActions = courseSlice.actions;

// selector

export const courseSelector = {
    courses: (state) => state['courses'].courses,
    course: (state) => state['courses'].course,
    topics: (state) => state['courses'].topics,
    lessons: (state) => state['courses'].lessons,
};
// reducer
const courseReducer = courseSlice.reducer;

export default courseReducer;
