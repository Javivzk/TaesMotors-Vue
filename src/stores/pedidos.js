import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'
import PedidoService from '../services/PedidoService'
import { useModalStore } from './modal'

export const usePedidosStore = defineStore('pedidosStore', () => {
  const modal = useModalStore()

  const modelos = ref([])

  const busqueda = ref({
    marca: '',
    modelo: ''
  })

  const pedidos = ref([])
  const pedido = ref({})

  onMounted(async () => {
    try {
      const response = await PedidoService.getOrders()
      pedidos.value = response.data
    } catch (error) {
      // Manejar el error
      console.error('Error al obtener pedidos:', error)
    }
  })

  async function obtenerPedidos() {
    try {
      const data = await PedidoService.buscarPedidos(busqueda.value)
      pedidos.value = data.data
    } catch (error) {
      // Manejar el error
      console.error('Error al buscar pedidos:', error)
    }
  }

  async function seleccionarPedido(orderId) {
    try {
        console.log('Ejecutando seleccionarPedido con orderId:', orderId);
        const data = await PedidoService.getOrder(orderId);
        pedido.value = data.data;
        modal.handleClickModal();
    } catch (error) {
        console.error('Error al obtener pedido:', error);
    }
}

  return {
    modelos,
    busqueda,
    pedido,
    pedidos,
    obtenerPedidos,
    seleccionarPedido,
  }
})
