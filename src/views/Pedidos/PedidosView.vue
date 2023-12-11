
<script setup>
    import { onMounted, ref, computed } from 'vue'
    import PedidoService from '../../services/PedidoService';
    import RouterLink from '../../components/UI/RouterLink.vue';
    import Pedido from '../../components/Pedido.vue';


    const pedidos = ref([])

    onMounted(() => {
        PedidoService.getOrders()
            .then(({data}) => pedidos.value = data)
            .catch(error => console.log('Hubo un error'))
    })


    defineProps({
        titulo: {
            type: String
        }
    })

    const existenPedidos = computed(() => {
        return pedidos.value.length > 0
    })

    const actualizarEstado = ({orderId, paid}) => {
        PedidoService.updateEstado(orderId, {paid: !paid})
            .then(() => {
                const i = pedidos.value.findIndex(pedido => pedido.orderId === orderId)
                pedidos.value[i].paid = !paid
            })
            .catch(error => console.log(error))
    }

    const eliminarPedido = orderId => {
        PedidoService.deleteOrder(orderId)
            .then(() => {
                pedidos.value = pedidos.value.filter(pedido => pedido.orderId !== orderId)
            })
            .catch(error => console.log(error))
    }       
</script>

<template>
    <div>
        <h1 class="text-4xl font-extrabold text-slate-500">Pedidos</h1>

        <div class="flex justify-end">
            <RouterLink  to="agregar-pedido">
                Agregar Pedido
            </RouterLink>
        </div>
        <div class="flex justify">
            <RouterLink  to="busqueda-pedidos">
                Buscar Pedidos
            </RouterLink>
        </div>

        <div v-if="existenPedidos" class="flow-root mx-auto  mt-10 p-5 bg-white shadow">
            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table class="min-w-full divide-y divide-gray-300">
                        <thead>
                        <tr>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">CLIENTE</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">EMPLEADO</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">MARCA DE COCHE</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">MODELO DE COCHE</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">PRECIO TOTAL</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">ESTADO</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Acciones</th>


                        </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                            <Pedido
                                v-for="pedido in pedidos"
                                :key="pedido.orderId"
                                :pedido="pedido"
                                @actualizar-estado="actualizarEstado"
                                @eliminar-pedido="eliminarPedido"
                            />

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <p v-else class="text-center mt-10">No hay Pedidos</p>
    </div>
</template>
