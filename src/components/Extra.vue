<script setup>
    import { computed } from 'vue'
    import { RouterLink } from 'vue-router';

    const props = defineProps({
        extra: {
            type: Object
        }
    })

    defineEmits(['actualizar-estado', 'eliminar-extra'])

    const numeroExtra = computed(() => {
        return props.extra.extraId 
    })

    const estadoExtra = computed(() => {
        return props.extra.stock
    })
</script>


<template>
    <tr>

        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="font-medium text-gray-900">{{ extra.name}}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="font-medium text-gray-900">{{ extra.description }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="font-medium text-gray-900">{{ extra.price }}</p>
        </td>

        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <button
                class="inline-flex rounded-full px-2 text-xs font-semibold leading-5"
                :class="[estadoExtra ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800']"
                @click="$emit('actualizar-estado',
                 {extraId: extra.extraId, stock: extra.stock})"
            >
                {{ estadoExtra ? 'Pagado' : 'Sin Pagar' }}
            </button>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <RouterLink 
                :to="{ name: 'editar-extra', params: { extraId: extra.extraId } }"
                class="text-indigo-600 hover:text-indigo-900 mr-5"
                >Editar</RouterLink>
                
                <button
                    class="text-red-600 hover:text-red-900"
                    @click="$emit('eliminar-pedido', extra.extraId)"
                >
                    Eliminar
                </button>
        </td>
    </tr>
</template>