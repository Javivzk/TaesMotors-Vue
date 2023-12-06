
<script setup>
    import { onMounted, ref, computed } from 'vue'
    import ExtraService from '../../services/ExtraService';
    import RouterLink from '../../components/UI/RouterLink.vue';
    import Extra from '../../components/Extra.vue';


    const extras = ref([])

    onMounted(() => {
        ExtraService.getExtras()
            .then(({data}) => extras.value = data)
            .catch(error => console.log('Hubo un error'))
    })


    defineProps({
        titulo: {
            type: String
        }
    })

    const existenExtras = computed(() => {
        return extras.value.length > 0
    })

    const actualizarEstado = ({extraId, stock}) => {
        ExtraService.updateEstado(extraId, {stock: !stock})
            .then(() => {
                const i = extras.value.findIndex(extra => extra.extraId === extraId)
                extras.value[i].stock = !stock
            })
            .catch(error => console.log(error))
    }

    const eliminarExtra = extraId => {
        ExtraService.deleteExtra(extraId)
            .then(() => {
                extras.value = extras.value.filter(extra => extra.extraId !== extraId)
            })
            .catch(error => console.log(error))
    }       
</script>

<template>
    <div>
        <h1 class="text-4xl font-extrabold text-slate-500">Extras</h1>

        <div class="flex justify-end">
            <RouterLink  to="agregar-extra">
                Agregar Extra
            </RouterLink>
        </div>


        <div v-if="existenExtras" class="flow-root mx-auto  mt-10 p-5 bg-white shadow">
            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table class="min-w-full divide-y divide-gray-300">
                        <thead>
                        <tr>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">NOMBRE</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">DESCRIPCION</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">PRECIO</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">STOCK</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Acciones</th>


                        </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                            <Extra
                                v-for="extra in extras"
                                :key="extra.extraId"
                                :extra="extra"
                                @actualizar-estado="actualizarEstado"
                                @eliminar-extra="eliminarExtra"
                            />

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <p v-else class="text-center mt-10">No hay Extras</p>
    </div>
</template>