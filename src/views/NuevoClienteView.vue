
<script setup>
    import {FormKit} from '@formkit/vue';
    import RouterLink from '../components/UI/RouterLink.vue';
    import Heading from '../components/UI/Heading.vue';

    defineProps({
        titulo: {
            type: String
        }
    })


    const handleSubmit = (data) => {
        console.log('submit...', data)
    }
</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink  to="inicio">
                Volver
            </RouterLink>
        </div>

        <Heading>{{ titulo }}</Heading>

        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py20 px-6">
            <FormKit
                type="form"
                submit-label="Agregar Cliente"
                incomplete-message="No se pudo enviar, revisa los campos"
                @submit="handleSubmit"
            >
                <FormKit
                type="text"
                label="Nombre"
                name="nombre"
                placeholder="Nombre de Cliente"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'El nombre del Cliente es obligatorio'}"
                />

                <FormKit
                type="text"
                label="Apellidos"
                name="apellidos"
                placeholder="Apellidos del Cliente"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'Los Apellidos del Cliente son obligatorios'}"
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
                />
                
                <FormKit
                type="text"
                label="Telefono"
                name="telefono"
                placeholder="Telefono: XXX-XXX-XXXX"
                prefix-icon="telephone"
                help="Coloca el Telefono del Cliente que deseas registrar"
                validation="?matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                :validation-messages="{ matches: 'El formato no es valido' }"
                />

                <FormKit
                type="text"
                label="Direccion"
                name="direccion"
                placeholder="Direccion del Cliente"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'La Direccion del Cliente es obligatoria'}"
                />

                <FormKit
                type="text"
                label="Ciudad"
                name="ciudad"
                placeholder="Ciudad del Cliente"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'La Ciudad del Cliente es obligatoria'}"
                />

                <FormKit
                type="text"
                label="Codigo Postal"
                name="codigoPostal"
                placeholder="Codigo Postal del Cliente"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'El Codigo Postal del Cliente es obligatorio'}"
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