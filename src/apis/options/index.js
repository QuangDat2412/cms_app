import { userRequest } from 'src/services/axiosServices';
const LIST_URL = {
    GetAll: `/options`,
    SaveUser: `/users/addUser`,
};
export const getAll = (model) => userRequest.get(LIST_URL.GetAll);
