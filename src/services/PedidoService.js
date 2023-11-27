import api from "../lib/axios"

export default {
    getOrders() {
        return api.get('/orders')
    },
    postOrder(data) {
        return api.post('/orders', data)
    },
    getOrder(orderId) {
        return api.get('/orders/' + orderId)
    },
    updateOrder(orderId, data) {
        return api.patch('/orders/' + orderId, data)
    },
    updateEstado(orderId, data) {
        return api.patch('/orders/' + orderId, data)
    },
    deleteOrder(orderId) {
        return api.delete('/orders/' + orderId)
    }
}