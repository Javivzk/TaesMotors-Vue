import axios from 'axios';

axios.defaults.withCredentials = true;  // Habilita el envío de cookies

const api = axios.create({
    baseURL: 'http://localhost:8080/api'
});

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('userToken');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

export default api;