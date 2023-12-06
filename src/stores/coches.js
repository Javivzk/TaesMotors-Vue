import { ref, reactive, onMounted } from 'vue'
import { defineStore } from 'pinia'
import CocheService from '../services/CocheService'
import { useModalStore } from './modal'

export const useCochesStore = defineStore('cochesStore', () => {

  const modal = useModalStore()

  const modelos = ref([])
  
  const busqueda = reactive({
    marca: '',
    modelo: ''
  })

  const coches = ref([])


  onMounted(async () => {
    const response = await CocheService.getCars()
    modelos.value = response.data    
  })

  async function obtenerCoches() {
    const data = await CocheService.buscarCoches(busqueda)    
    coches.value = data.data
  }

  async function seleccionarCoche(carId) {
    const data = await CocheService.getCar(carId)
    console.log(data)

    modal.handleClickModal()
  }

  return {
    modelos,
    busqueda,
    obtenerCoches,
    coches,
    seleccionarCoche
  }
})
