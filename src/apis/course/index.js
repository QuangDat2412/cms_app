import { userRequest } from 'src/services/axiosServices';
const LIST_URL = {
    ADD: `/courses/add`,
    GETBYMODEL: `/courses/getByModel`,
};
export const addCourse = (model) => userRequest.post(LIST_URL.ADD, model);
export const getCourse = (model) => userRequest.post(LIST_URL.GETBYMODEL, model);
