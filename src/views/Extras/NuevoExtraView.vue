
<script setup>

    import {FormKit} from '@formkit/vue'
    import{ useRouter } from 'vue-router'
    import ExtraService from '../../services/ExtraService'
    import RouterLink from '../../components/UI/RouterLink.vue'


    const router = useRouter()

    defineProps({
        titulo: {
            type: String
        }
    })


    const handleSubmit = (data) => {
        data.stock = false
        ExtraService.postExtra(data)
            .then(respuesta =>{
                console.log(respuesta)
                router.push({name: 'listado-extras'})
            })
            .catch(error => console.log(error))
        }
</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink  
                to="listado-extras"
            >
                Volver
            </RouterLink>
        </div>


        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py20 px-6">
            <FormKit
                type="form"
                submit-label="Agregar Extra"
                incomplete-message="No se pudo enviar, revisa los campos"
                @submit="handleSubmit"
            >
                <FormKit
                type="text"
                label="Nombre"
                name="name"
                placeholder="Nombre de Extra"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'El nombre del Cliente es obligatorio'}"
                />

                <FormKit
                type="text"
                label="Descripcion"
                name="description"
                placeholder="Apellidos del Cliente"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'Los Apellidos del Cliente son obligatorios'}"
                />

                <FormKit
                type="text"
                label="Stock"
                name="stock"
                placeholder="Estado de Cliente"
                help="Coloca el Nombre del Cliente que deseas registrar"
                :validation-messages="{required:'El Email del Cliente es obligatorio', email: 'Coloca un email valido'}"
                />

                <FormKit
                type="number"
                label="Precio"
                name="price"
                placeholder="Email de Cliente"
                prefix-icon="email"
                help="Coloca el Nombre del Cliente que deseas registrar"
                validation="required|email"
                :validation-messages="{required:'El Email del Cliente es obligatorio', email: 'Coloca un email valido'}"
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