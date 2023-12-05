import { ref, reactive, onMounted } from 'vue'
import { defineStore } from 'pinia'
import CocheService from '../services/CocheService'

export const useCochesStore = defineStore('coches', () => {
  const modelos = ref([])
  const busqueda = reactive({
    marca: '',
    modelo: ''
  })
  const coches= ref([])


  onMounted(async () => {
    const response = await CocheService.getCars()
    modelos.value = response.data
    
  })

  async function obtenerCoches() {
    const data = await CocheService.buscarCoches(busqueda)    
    coches.value = data.data
  }

  return {
    modelos,
    busqueda,
    obtenerCoches,
    coches
  }
})
