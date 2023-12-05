import api from "../lib/axios"

export default {
    getExtras() {
        return api.get('/extras')
    },
    postExtra(data) {
        return api.post('/extras', data)
    },
    getExtra(extraId) {
        return api.get('/extras/' + extraId)
    },
    updateExtra(extraId, data) {
        return api.patch('/extras/' + extraId, data)
    },
    updateEstado(extraId, data) {
        return api.patch('/extras/' + extraId, data)
    },
    deleteExtra(extraId) {
        return api.delete('/extras/' + extraId)
    }
}