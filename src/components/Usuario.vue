<script setup>
    import { computed } from 'vue'
    import { RouterLink } from 'vue-router';

    const props = defineProps({
        usuario: {
            type: Object
        }
    })

    defineEmits(['actualizar-estado', 'eliminar-usuario'])

    const nombreUsuario = computed(() => {
        return props.usuario.name 
    })

    const estadoUsuario = computed(() => {
        return props.usuario.active
    })
</script>


<template>
    <tr>
        <td class="whitespace-nowrap py-3 pl-4 text-sm text-gray-500">
            <p class="font-medium text-gray-900">{{ usuario.employee ? usuario.employee.employeeId : 'No asignado' }}</p>
        </td>
        <td class="whitespace-nowrap py-3 pl-4 text-sm text-gray-500">
            <p class="font-medium text-gray-900">{{ usuario.username }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="font-medium text-gray-900">{{ usuario.employee ? usuario.employee.name + " " + usuario.employee.lastName : 'No asignado' }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="font-medium text-gray-900">{{ usuario.employee ? usuario.employee.city : 'No asignado' }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="font-medium text-gray-900">{{ usuario.employee ? usuario.employee.email : 'No asignado' }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <button
                class="inline-flex rounded-full px-2 text-xs font-semibold leading-5"
                :class="[estadoUsuario ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800']"
                @click="$emit('actualizar-estado',
                 {userId: usuario.userId, active: usuario.active})"
            >
                {{ estadoUsuario ? 'Activo' : 'Inactivo' }}
            </button>
        </td>

        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="font-medium text-gray-900">{{ usuario.creationDate }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <RouterLink 
                :to="{ name: 'editar-usuario', params: { userId: usuario.userId } }"
                class="text-indigo-600 hover:text-indigo-900 mr-5"
                >Editar</RouterLink>
                
                <button
                    class="text-red-600 hover:text-red-900"
                    @click="$emit('eliminar-usuario', usuario.userId)"
                >
                    Eliminar
                </button>
        </td>
    </tr>
</template>