<script setup>
    import { computed } from 'vue'
    import { RouterLink } from 'vue-router';

    const props = defineProps({
        coche: {
            type: Object
        }
    })

    defineEmits(['actualizar-stock', 'eliminar-coche'])

    const marcaCoche = computed(() => {
        return props.coche.brand 
    })

    const stockCoche = computed(() => {
        return props.coche.stock
    })
</script>


<template>
    <tr>
        <td class="whitespace-nowrap py-3 pl-4 text-sm text-gray-500">
            <p class="font-medium text-gray-900">{{ coche.brand }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="font-medium text-gray-900">{{ coche.model }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="font-medium text-gray-900">{{ coche.motor }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="font-medium text-gray-900">{{ coche.fuel }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="font-medium text-gray-900">{{ coche.color }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <button
                class="inline-flex rounded-full px-2 text-xs font-semibold leading-5"
                :class="[stockCoche ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800']"
                @click="$emit('actualizar-stock',
                 {carId: coche.carId, stock: coche.stock})"
            >
                {{ stockCoche ? 'Disponible' : 'Fuera de Stock' }}
            </button>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <RouterLink 
                :to="{ name: 'editar-coche', params: { carId: coche.carId } }"
                class="text-indigo-600 hover:text-indigo-900 mr-5"
                >Editar</RouterLink>
                
                <button
                    class="text-red-600 hover:text-red-900"
                    @click="$emit('eliminar-coche', coche.carId)"
                >
                    Eliminar
                </button>
        </td>
    </tr>
</template>