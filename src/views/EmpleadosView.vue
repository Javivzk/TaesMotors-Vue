
<script setup>
    import { onMounted, ref, computed } from 'vue'
    import EmpleadoService from '../services/EmpleadoService';
    import RouterLink from '../components/UI/RouterLink.vue';
    import Heading from '../components/UI/Heading.vue';
    import Empleado from '../components/Empleado.vue';
    import Header from '../components/UI/Header.vue';



    const empleados = ref([])

    onMounted(() => {
        EmpleadoService.getEmployees()
            .then(({data}) => empleados.value = data)
            .catch(error => console.log('Hubo un error'))
    })


    defineProps({
        titulo: {
            type: String
        }
    })

    const existenEmpleados = computed(() => {
        return empleados.value.length > 0
    })

    const actualizarEstado = ({employeeId, estado}) => {
        EmpleadoService.updateEstado(employeeId, {estado: !estado})
            .then(() => {
                const i = empleados.value.findIndex(empleado => empleado.employeeId === employeeId)
                empleados.value[i].estado = !estado
            })
            .catch(error => console.log(error))
    }

    const eliminarEmpleado = employeeId => {
        EmpleadoService.deleteEmployee(employeeId)
            .then(() => {
                empleados.value = empleados.value.filter(empleado => empleado.employeeId !== employeeId)
            })
            .catch(error => console.log(error))
    }       
</script>

<template>
    <div>
        <Heading>{{ titulo }}</Heading>

        <div class="flex justify-end">
            <RouterLink  to="agregar-cliente">
                Agregar Empleado
            </RouterLink>
        </div>



        <div v-if="existenEmpleados" class="flow-root mx-auto  mt-10 p-5 bg-white shadow">
            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table class="min-w-full divide-y divide-gray-300">
                        <thead>
                        <tr>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Nombre</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Apellidos</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Telefono</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Estado</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Email</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Direccion</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Ciudad</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Codigo Postal</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Acciones</th>
                        </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                            <Empleado
                                v-for="empleado in empleados"
                                :key="empleado.employeeId"
                                :empleado="empleado"
                                @actualizar-estado="actualizarEstado"
                                @eliminar-empleado="eliminarEmpleado"
                            />

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <p v-else class="text-center mt-10">No hay empleados</p>
    </div>
</template>