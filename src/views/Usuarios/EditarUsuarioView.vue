<script setup>
    import { onMounted, reactive } from 'vue'
    import {FormKit} from '@formkit/vue'
    import{ useRouter, useRoute } from 'vue-router'
    import UsuarioService from '../../services/UsuarioService'
    import RouterLink from '../../components/UI/RouterLink.vue'


    const router = useRouter()
    const route = useRoute()

    const { userId } = route.params

    const formData = reactive ({})

    onMounted(() => {
        UsuarioService.getUser(userId)
            .then(({data}) => {
                Object.assign(formData,data)
            formData.employeeId = data.employee ? data.employee.employeeId : null;
            })
            .catch(error => console.log(error))
    })

    defineProps({
        titulo: {
            type: String
        }
    })


    const handleSubmit = (data) => {
        UsuarioService.updateUser(userId, data)
            .then(() => router.push({name: 'listado-usuarios'}))
            .catch(error => console.log(error))
        }
</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink  
                to="listado-usuarios"
            >
                Volver
            </RouterLink>
        </div>


        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py20 px-6">
            <FormKit
                type="form"
                submit-label="Guardar cambios"
                incomplete-message="No se pudo enviar, revisa los campos"
                @submit="handleSubmit"
                :value="formData"
            >
                <FormKit
                type="text"
                label="Username"
                name="username"
                placeholder="Username"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'El Username del Usuario es obligatorio'}"
                v-model="formData.username"
                />

                <FormKit
                type="text"
                label="Password"
                name="password"
                placeholder="Password del Usuario"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'La contraseña del Usuario es obligatoria'}"
                v-model="formData.password"
                />

                <FormKit
                type="text"
                label="Nombre"
                name="name"
                placeholder="Nombre de Empleado"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'El nombre del Usuario es obligatorio'}"
                v-model="formData.name"
                />

                <FormKit
                type="text"
                label="Apellido"
                name="surname"
                placeholder="Apellido de Usuario"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'El Apellido del Usuario es obligatorio'}"
                v-model="formData.surname"
                />

                <FormKit
                type="text"
                label="Estado"
                name="estado"
                placeholder="Estado de Usuario"
                help="Coloca el Estado del Usuario que deseas registrar"
                :validation-messages="{required:'El Estado del Usuario es obligatorio', email: 'Coloca un email valido'}"
                v-model="formData.estado"
                />

                <FormKit
                type="email"
                label="Email"
                name="email"
                placeholder="Email de Usuario"
                prefix-icon="email"
                help="Coloca el Nombre del Usuario que deseas registrar"
                validation="required|email"
                :validation-messages="{required:'El Email del Usuario es obligatorio', email: 'Coloca un email valido'}"
                v-model="formData.email"
                />
                

                <FormKit
                type="text"
                label="Creation Date"
                name="creationDate"
                placeholder="Fecha de creacion del Usuario"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'La Fecha de creacion del Usuario es obligatoria'}"
                v-model="formData.creationDate"
                />

                <FormKit
                type="text"
                label="ID de Empleado"
                name="employee.employeeId"
                placeholder="ID de Empleado"
                help="ID del empleado asociado"
                v-model="formData.employeeId"
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