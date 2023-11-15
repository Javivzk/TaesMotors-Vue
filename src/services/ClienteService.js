import api from "../lib/axios"

export default {
    getClients() {
        return api.get('/clients')
    },
    postClient(data) {
        return api.post('/clients', data)
    },
    getClient(clientId) {
        return api.get('/client/' + clientId)
    },
    updateClient(clientId, data) {
        return api.put('/client/' + clientId, data)
    },
    updateEstado(clientId, data) {
        return api.put('client/' + clientId, data)
    }
}