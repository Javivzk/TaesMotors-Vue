<script setup>
    import { onMounted, reactive } from 'vue'
    import {FormKit} from '@formkit/vue'
    import{ useRouter, useRoute } from 'vue-router'
    import ClienteService from '../services/ClienteService'
    import RouterLink from '../components/UI/RouterLink.vue'
    import Heading from '../components/UI/Heading.vue'


    const router = useRouter()
    const route = useRoute()

    const { customerId } = route.params

    const formData = reactive ({})

    onMounted(() => {
        ClienteService.getCustomer(customerId)
            .then(({data}) => {
                Object.assign(formData,data)
            })
            .catch(error => console.log(error))
    })

    defineProps({
        titulo: {
            type: String
        }
    })


    const handleSubmit = (data) => {
        ClienteService.updateClient(customerId, data)
            .then(() => router.push({name: 'listado-clientes'}))
            .catch(error => console.log(error))
        }
</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink  
                to="listado-clientes"
            >
                Volver
            </RouterLink>
        </div>

        <Heading>{{ titulo }}</Heading>

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
                label="Nombre"
                name="name"
                placeholder="Nombre de Cliente"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'El nombre del Cliente es obligatorio'}"
                v-model="formData.name"
                />

                <FormKit
                type="text"
                label="Apellidos"
                name="lastName"
                placeholder="Apellidos del Cliente"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'Los Apellidos del Cliente son obligatorios'}"
                v-model="formData.lastName"
                />

                <FormKit
                type="text"
                label="Estado"
                name="estado"
                placeholder="Estado de Cliente"
                help="Coloca el Estado del Cliente que deseas registrar"
                :validation-messages="{required:'El Estado del Cliente es obligatorio', email: 'Coloca un email valido'}"
                v-model="formData.estado"
                />

                <FormKit
                type="email"
                label="Email"
                name="email"
                placeholder="Email de Cliente"
                prefix-icon="email"
                help="Coloca el Nombre del Cliente que deseas registrar"
                validation="required|email"
                :validation-messages="{required:'El Email del Cliente es obligatorio', email: 'Coloca un email valido'}"
                v-model="formData.email"
                />
                
                <FormKit
                type="text"
                label="Telefono"
                name="phone"
                placeholder="Telefono: XXX-XXX-XXXX"
                prefix-icon="telephone"
                help="Coloca el Telefono del Cliente que deseas registrar"
                validation="?matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                :validation-messages="{ matches: 'El formato no es valido' }"
                v-model="formData.phone"
                />

                <FormKit
                type="text"
                label="Direccion"
                name="address"
                placeholder="Direccion del Cliente"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'La Direccion del Cliente es obligatoria'}"
                v-model="formData.address"
                />

                <FormKit
                type="text"
                label="Ciudad"
                name="city"
                placeholder="Ciudad del Cliente"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'La Ciudad del Cliente es obligatoria'}"
                v-model="formData.city"
                />

                <FormKit
                type="text"
                label="Codigo Postal"
                name="postalCode"
                placeholder="Codigo Postal del Cliente"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'El Codigo Postal del Cliente es obligatorio'}"
                v-model="formData.postalCode"
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