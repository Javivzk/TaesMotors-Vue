<script setup>
    import { computed } from 'vue'
    import { RouterLink } from 'vue-router';

    const props = defineProps({
        cliente: {
            type: Object
        }
    })

    defineEmits(['actualizar-estado', 'eliminar-cliente'])

    const nombreCliente = computed(() => {
        return props.cliente.name 
    })

    const estadoCliente = computed(() => {
        return props.cliente.estado
    })
</script>


<template>
    <tr>
        <td class="whitespace-nowrap py-3 pl-4 text-sm text-gray-500">
            <p class="font-medium text-gray-900">{{ cliente.name }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="font-medium text-gray-900">{{ cliente.lastName }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="font-medium text-gray-900">{{ cliente.phone }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <button
                class="inline-flex rounded-full px-2 text-xs font-semibold leading-5"
                :class="[estadoCliente ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800']"
                @click="$emit('actualizar-estado',
                 {clientId: cliente.clientId, estado: cliente.estado})"
            >
                {{ estadoCliente ? 'Activo' : 'Inactivo' }}
            </button>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="font-medium text-gray-900">{{ cliente.email }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="font-medium text-gray-900">{{ cliente.address }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="font-medium text-gray-900">{{ cliente.city }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="font-medium text-gray-900">{{ cliente.postalCode }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <RouterLink 
                :to="{ name: 'editar-cliente', params: { clientId: cliente.clientId } }"
                class="text-indigo-600 hover:text-indigo-900 mr-5"
                >Editar</RouterLink>
                
                <button
                    class="text-red-600 hover:text-red-900"
                    @click="$emit('eliminar-cliente', cliente.clientId)"
                >
                    Eliminar
                </button>
        </td>
    </tr>
</template>