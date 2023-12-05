import api from "../lib/axios"

export default {
    getCars() {
        return api.get('/cars')
    },
    postCar(data) {
        return api.post('/cars', data)
    },
    getCar(carId) {
        return api.get('/cars/' + carId)
    },
    updateCar(carId, data) {
        return api.patch('/cars/' + carId, data)
    },
    updateStock(carId, data) {
        return api.patch('/cars/' + carId, data)
    },
    deleteCar(carId) {
        return api.delete('/cars/' + carId)
    },
    buscarCoches({marca, modelo}) {
        return api(`/cars?brand=${marca}&model=${modelo}`)
    }
}