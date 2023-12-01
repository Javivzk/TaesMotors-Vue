
<script setup>

    import {FormKit} from '@formkit/vue'
    import{ useRouter } from 'vue-router'
    import EmpleadoService from '../services/EmpleadoService'
    import RouterLink from '../components/UI/RouterLink.vue'
    import Heading from '../components/UI/Heading.vue'


    const router = useRouter()

    defineProps({
        titulo: {
            type: String
        }
    })


    const handleSubmit = (data) => {
        data.estado = false
        EmpleadoService.postEmployee(data)
            .then(respuesta =>{
                console.log(respuesta)
                router.push({name: 'listado-empleados'})
            })
            .catch(error => console.log(error))
        }
</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink  
                to="listado-empleados"
            >
                Volver
            </RouterLink>
        </div>

        <Heading>{{ titulo }}</Heading>

        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py20 px-6">
            <FormKit
                type="form"
                submit-label="Agregar Empleado"
                incomplete-message="No se pudo enviar, revisa los campos"
                @submit="handleSubmit"
            >
                <FormKit
                type="text"
                label="Nombre"
                name="name"
                placeholder="Nombre de Empleado"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'El nombre del Empleado es obligatorio'}"
                />

                <FormKit
                type="text"
                label="Apellidos"
                name="lastName"
                placeholder="Apellidos del Empleado"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'Los Apellidos del Empleado son obligatorios'}"
                />

                <FormKit
                type="text"
                label="Estado"
                name="estado"
                placeholder="Estado de Empleado"
                help="Coloca el Nombre del Empleado que deseas registrar"
                :validation-messages="{required:'El Email del Empleado es obligatorio', email: 'Coloca un email valido'}"
                />

                <FormKit
                type="email"
                label="Email"
                name="email"
                placeholder="Email de Empleado"
                prefix-icon="email"
                help="Coloca el Nombre del Empleado que deseas registrar"
                validation="required|email"
                :validation-messages="{required:'El Email del Empleado es obligatorio', email: 'Coloca un email valido'}"
                />
                
                <FormKit
                type="text"
                label="Telefono"
                name="phone"
                placeholder="Telefono: XXX-XXX-XXXX"
                prefix-icon="telephone"
                help="Coloca el Telefono del Empleado que deseas registrar"
                validation="?matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                :validation-messages="{ matches: 'El formato no es valido' }"
                />

                <FormKit
                type="text"
                label="Direccion"
                name="address"
                placeholder="Direccion del Empleado"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'La Direccion del Empleado es obligatoria'}"
                />

                <FormKit
                type="text"
                label="Ciudad"
                name="city"
                placeholder="Ciudad del Empleado"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'La Ciudad del Empleado es obligatoria'}"
                />

                <FormKit
                type="text"
                label="Codigo Postal"
                name="postalCode"
                placeholder="Codigo Postal del Empleado"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'El Codigo Postal del Empleado es obligatorio'}"
                />

            </FormKit>
            </div>
        </div>
    </div>
</template>

<style>
    .formkit-wrapper {
        max-width: 100%;
    }
</style>