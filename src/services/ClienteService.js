import api from "../lib/axios"

export default {
    getCustomers() {
        return api.get('/customers')
    },
    postCustomer(data) {
        return api.post('/customers', data)
    },
    getCustomer(customerId) {
        return api.get('/customers/' + customerId)
    },
    updateCustomer(customerId, data) {
        return api.patch('/customers/' + customerId, data)
    },
    updateEstado(customerId, data) {
        return api.patch('/customers/' + customerId, data)
    },
    deleteCustomer(customerId) {
        return api.delete('/customers/' + customerId)
    }
}