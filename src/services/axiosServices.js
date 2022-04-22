import axios from 'axios';
import { API_ENPOINT } from '../constants/api';
export const publicRequest = axios.create({
    baseURL: API_ENPOINT,
});

export const userRequest = axios.create({
    baseURL: API_ENPOINT,
});
userRequest.interceptors.request.use((config) => {
    const TOKEN = localStorage.getItem('token');
    if (TOKEN) {
        config.headers.token = `Bearer ${TOKEN}`;
    }
    return config;
});
