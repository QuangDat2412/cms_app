import axios from 'axios';
import { API_ENPOINT } from '../constants/api';

export const publicRequest = axios.create({
    baseURL: API_ENPOINT,
});

export const userRequest = axios.create({
    baseURL: API_ENPOINT,
});
userRequest.interceptors.request.use((config) => {
    const TOKEN = JSON.parse(localStorage.getItem('currentUser')) && JSON.parse(localStorage.getItem('currentUser'))?.token;
    if (TOKEN) {
        config.headers.token = `Bearer ${TOKEN}`;
    }
    return config;
});
