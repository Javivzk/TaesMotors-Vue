<script setup>
    import { computed } from 'vue'
    import { RouterLink } from 'vue-router';

    const props = defineProps({
        pedido: {
            type: Object
        }
    })

    defineEmits(['actualizar-estado', 'eliminar-pedido'])

    const numeroPedido = computed(() => {
        return props.pedido.orderId 
    })

    const estadoOrder = computed(() => {
        return props.pedido.paid
    })
</script>


<template>
    <tr>

        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="font-medium text-gray-900">{{ pedido.customer.name + "\n" + pedido.customer.lastName}}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="font-medium text-gray-900">{{ pedido.car.brand }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="font-medium text-gray-900">{{ pedido.car.model }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="font-medium text-gray-900">{{ pedido.totalPrice }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <button
                class="inline-flex rounded-full px-2 text-xs font-semibold leading-5"
                :class="[estadoOrder ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800']"
                @click="$emit('actualizar-estado',
                 {orderId: pedido.orderId, paid: pedido.paid})"
            >
                {{ estadoOrder ? 'Pagado' : 'Sin Pagar' }}
            </button>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <RouterLink 
                :to="{ name: 'editar-pedido', params: { orderId: pedido.orderId } }"
                class="text-indigo-600 hover:text-indigo-900 mr-5"
                >Editar</RouterLink>
                
                <button
                    class="text-red-600 hover:text-red-900"
                    @click="$emit('eliminar-pedido', pedido.orderId)"
                >
                    Eliminar
                </button>
        </td>
    </tr>
</template>