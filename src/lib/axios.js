import axios from 'axios'

axios.defaults.withCredentials = true;  // Habilita el envío de cookies
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:8080';


const api = axios.create({
    baseURL: 'http://localhost:8080/api'
})

export default api