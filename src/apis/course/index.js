import { userRequest } from 'src/services/axiosServices';
const LIST_URL = {
    ADD: `/courses/add`,
    ADDTOPIC: `/topics/add`,
    ADDLESSON: `/lessons/add`,
    GETTOPIC: `/topics/getByModel`,
    GETBYMODEL: `/courses/getByModel`,
    GETBYCODE: `/courses/getByCode`,
};
export const addCourse = (model) => userRequest.post(LIST_URL.ADD, model);
export const addTopic = (model) => userRequest.post(LIST_URL.ADDTOPIC, model);
export const addLesson = (model) => userRequest.post(LIST_URL.ADDLESSON, model);
export const getCourse = (model) => userRequest.post(LIST_URL.GETBYMODEL, model);
export const getTopic = (model) => userRequest.post(LIST_URL.GETTOPIC, model);
export const getCourseByCode = (model) => userRequest.post(LIST_URL.GETBYCODE, model);
