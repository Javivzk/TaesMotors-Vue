
<script setup>
    import { onMounted, ref, computed } from 'vue'
    import CocheService from '../../services/CocheService';
    import RouterLink from '../../components/UI/RouterLink.vue';
    import Coche from '../../components/Coche.vue';
    import { useAuthStore } from '@/stores/auth';
    
    const authStore = useAuthStore();

    const coches = ref([])

    onMounted(() => {
        CocheService.getCars()
            .then(({data}) => coches.value = data)
            .catch(error => console.log('Hubo un error'))
    })


    defineProps({
        titulo: {
            type: String
        }
    })

    const existenCoches = computed(() => {
        return coches.value.length > 0
    })

    const actualizarStock = ({carId, stock}) => {
        CocheService.updateStock(carId, {stock: !stock})
            .then(() => {
                const i = coches.value.findIndex(coche => coche.carId === carId)
                coches.value[i].stock = !stock
            })
            .catch(error => console.log(error))
    }

    const eliminarCoche = carId => {
        CocheService.deleteCar(carId)
            .then(() => {
                coches.value = coches.value.filter(coche => coche.carId !== carId)
            })
            .catch(error => console.log(error))
    }       
</script>

<template>
    <div>
        <h1 class="text-4xl font-extrabold text-slate-500">Coches</h1>

        <div class="flex justify-end">
            <RouterLink  to="agregar-coche">
                Agregar Coche
            </RouterLink>
        </div>
        <div v-if="authStore.isAuthenticated">
            <div v-if="existenCoches" class="flow-root mx-auto  mt-10 p-5 bg-white shadow">
                <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead>
                            <tr>
                                <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Marca</th>
                                <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Modelo</th>
                                <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Motor</th>
                                <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Fuel</th>
                                <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Color</th>
                                <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Stock</th>
                                <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Precio Base</th>
                                <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Acciones</th>
                            </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <Coche
                                    v-for="coche in coches"
                                    :key="coche.carId"
                                    :coche="coche"
                                    @actualizar-stock="actualizarStock"
                                    @eliminar-coche="eliminarCoche"
                                />

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
            <p v-else class="text-center mt-10">No hay coches</p>
    </div>
</template>