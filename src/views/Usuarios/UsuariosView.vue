
<script setup>
    import { onMounted, ref, computed } from 'vue'
    import UsuarioService from '../../services/UsuarioService';
    import RouterLink from '../../components/UI/RouterLink.vue';
    import Usuario from '../../components/Usuario.vue';



    const usuarios = ref([])

    onMounted(() => {
        UsuarioService.getUsers()
            .then(({data}) => usuarios.value = data)
            .catch(error => console.log('Hubo un error'))
    })


    defineProps({
        titulo: {
            type: String
        }
    })

    const existenUsuarios = computed(() => {
        return usuarios.value.length > 0
    })

    const actualizarActive = ({userId, active}) => {
        UsuarioService.updateEstado(userId, {active: !active})
            .then(() => {
                const i = usuarios.value.findIndex(usuario => usuario.userId === userId)
                usuarios.value[i].active = !active
            })
            .catch(error => console.log(error))
    }

    const eliminarUsuario = userId => {
        UsuarioService.deleteUser(userId)
            .then(() => {
                usuarios.value = usuarios.value.filter(usuario => usuario.userId !== userId)
            })
            .catch(error => console.log(error))
    }       
</script>

<template>
    <div>
        <h1 class="text-4xl font-extrabold text-slate-500">Usuarios</h1>




        <div v-if="existenUsuarios" class="flow-root mx-auto  mt-10 p-5 bg-white shadow">
            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table class="min-w-full divide-y divide-gray-300">
                        <thead>
                        <tr>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">ID EMPLEADO</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Username</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Nombre del Empleado</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Ciudad del Empleado</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Email</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Estado</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Fecha Creacion</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Acciones</th>
                        </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                            <Usuario
                                v-for="usuario in usuarios"
                                :key="usuario.userId"
                                :usuario="usuario"
                                @actualizar-estado="actualizarActive"
                                @eliminar-usuario="eliminarUsuario"
                            />

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <p v-else class="text-center mt-10">No hay Usuarios</p>
    </div>
</template>