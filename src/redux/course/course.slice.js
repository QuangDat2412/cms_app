import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    courses: [],
    course: {},
};

const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        saveCourse() {},
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
        deleteCourse() {},
    },
});

// actions
export const courseActions = courseSlice.actions;

// selector

export const courseSelector = {
    courses: (state) => state['courses'].courses,
    course: (state) => state['courses'].course,
};
// reducer
const courseReducer = courseSlice.reducer;

export default courseReducer;
