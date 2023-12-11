import api from "../lib/axios"

export default {
    getUsers() {
        return api.get('/users')
    },
    getUser(userId) {
        return api.get('/users/' + userId)
    },
    updateUser(userId, data) {
        return api.patch('/users/' + userId, data)
    },
    updateEstado(userId, data) {
        return api.patch('/users/' + userId, data)
    },
    deleteUser(userId) {
        return api.delete('/users/' + userId)
    }
}