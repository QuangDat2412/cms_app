import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    courses: [],
};

const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        saveCourseSuccess(state, { payload }) {
            state.courses = [...state.courses, payload];
        },
        saveCourse() {},
        getCourseSuccess(state, { payload }) {
            state.courses = payload;
        },
        getCourse() {},
    },
});

// actions
export const courseActions = courseSlice.actions;

// selector

export const courseSelector = {
    courses: (state) => state['courses'].courses,
};
// reducer
const courseReducer = courseSlice.reducer;

export default courseReducer;
