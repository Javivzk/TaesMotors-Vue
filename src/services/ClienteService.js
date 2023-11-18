import api from "../lib/axios"

export default {
    getClients() {
        return api.get('/clients')
    },
    postClient(data) {
        return api.post('/clients', data)
    },
    getClient(clientId) {
        return api.get('/clients/' + clientId)
    },
    updateClient(clientId, data) {
        return api.patch('/clients/' + clientId, data)
    },
    updateEstado(clientId, data) {
        return api.patch('/clients/' + clientId, data)
    },
    deleteClient(clientId) {
        return api.delete('/clients/' + clientId)
    }
}