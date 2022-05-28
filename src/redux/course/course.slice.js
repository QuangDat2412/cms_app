import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    courses: [],
    course: {},
    topics: [],
};

const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        saveCourseSuccess(state, { payload }) {
            state.courses = [...state.courses, payload];
        },
        saveCourse() {},
        saveTopic() {},
        saveLesson() {},
        saveTopicSuccess(state, { payload }) {
            state.topics = [...state.courses, payload];
        },
        getCourseSuccess(state, { payload }) {
            state.courses = payload;
        },
        getCourseByCodeSuccess(state, { payload }) {
            state.course = payload;
        },
        getCourse() {},
        getCourseByCode() {},
        getTopic() {},
        getTopicSuccess(state, { payload }) {
            state.topics = payload;
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
};
// reducer
const courseReducer = courseSlice.reducer;

export default courseReducer;
