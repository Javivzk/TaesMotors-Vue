import api from "../lib/axios"

export default {
    getEmployees() {
        return api.get('/employees')
    },
    postEmployee(data) {
        return api.post('/employees', data)
    },
    getEmployee(employeeId) {
        return api.get('/employees/' + employeeId)
    },
    updateEmployee(employeeId, data) {
        return api.patch('/employees/' + employeeId, data)
    },
    updateEstado(employeeId, data) {
        return api.patch('/employees/' + employeeId, data)
    },
    deleteEmployee(employeeId) {
        return api.delete('/employees/' + employeeId)
    }
}