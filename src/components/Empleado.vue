<script setup>
    import { computed } from 'vue'
    import { RouterLink } from 'vue-router';

    const props = defineProps({
        empleado: {
            type: Object
        }
    })

    defineEmits(['actualizar-estado', 'eliminar-empleado'])

    const nombreEmpleado = computed(() => {
        return props.empleado.name 
    })

    const estadoEmpleado = computed(() => {
        return props.empleado.estado
    })
</script>


<template>
    <tr>
        <td class="whitespace-nowrap py-3 pl-4 text-sm text-gray-500">
            <p class="font-medium text-gray-900">{{ empleado.name }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="font-medium text-gray-900">{{ empleado.lastName }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="font-medium text-gray-900">{{ empleado.phone }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <button
                class="inline-flex rounded-full px-2 text-xs font-semibold leading-5"
                :class="[estadoEmpleado ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800']"
                @click="$emit('actualizar-estado',
                 {employeeId: empleado.employeeId, estado: empleado.estado})"
            >
                {{ estadoEmpleado ? 'Plantilla' : 'ETT' }}
            </button>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="font-medium text-gray-900">{{ empleado.email }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="font-medium text-gray-900">{{ empleado.address }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="font-medium text-gray-900">{{ empleado.city }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="font-medium text-gray-900">{{ empleado.postalCode }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <RouterLink 
                :to="{ name: 'editar-empleado', params: { employeeId: empleado.employeeId } }"
                class="text-indigo-600 hover:text-indigo-900 mr-5"
                >Editar</RouterLink>
                
                <button
                    class="text-red-600 hover:text-red-900"
                    @click="$emit('eliminar-empleado', empleado.employeeId)"
                >
                    Eliminar
                </button>
        </td>
    </tr>
</template>