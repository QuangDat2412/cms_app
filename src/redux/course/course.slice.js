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
        saveCourse() {},
        saveTopic() {},
        saveLesson() {},
        getCourseSuccess(state, { payload }) {
            state.courses = payload.map((p) => {
                return { ...p, typeObj: p.type, type: p.type._id };
            });
            console.log(state.courses);
        },
        getCourseByCodeSuccess(state, { payload }) {
            state.course = payload;
        },
        getCourse() {},
        getCourseByCode() {},
        getTopic() {},
        getTopicSuccess(state, { payload }) {
            state.topics = payload.map((p) => {
                return { ...p, course: p.courseId, courseId: p.courseId._id };
            });
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
