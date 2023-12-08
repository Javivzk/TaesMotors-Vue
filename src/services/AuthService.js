import api from "../lib/axios"

export default {
    register(user) {
    return api.post('/register', user);
    },
    login(username, password) {
    return api.post('/token', { username, password });
    },
    
}