
<script setup>

    import {FormKit} from '@formkit/vue'
    import{ useRouter } from 'vue-router'
    import CocheService from '../services/CocheService'
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
        CocheService.postCar(data)
            .then(respuesta =>{
                console.log(respuesta)
                router.push({name: 'listado-coches'})
            })
            .catch(error => console.log(error))
        }
</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink  
                to="listado-coches"
            >
                Volver
            </RouterLink>
        </div>

        <Heading>{{ titulo }}</Heading>

        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py20 px-6">
            <FormKit
                type="form"
                submit-label="Agregar Coche"
                incomplete-message="No se pudo enviar, revisa los campos"
                @submit="handleSubmit"
            >
                <FormKit
                type="text"
                label="Marca"
                name="brand"
                placeholder="Marca del Coche"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'La marca del Coche es obligatoria'}"
                />

                <FormKit
                type="text"
                label="Modelo"
                name="model"
                placeholder="Modelo del Coche"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'El modelo del Coche es obligatorio'}"
                />

                <FormKit
                type="text"
                label="Estado"
                name="estado"
                placeholder="Estado del Coche"
                help="Coloca el Nombre del Coche que deseas registrar"
                :validation-messages="{required:'El Email del Cliente es obligatorio', email: 'Coloca un email valido'}"
                />

                
                <FormKit
                type="text"
                label="Motor"
                name="motor"
                prefix-icon="telephone"
                help="Coloca el Motor del Coche que deseas registrar"
                />

                <FormKit
                type="text"
                label="Combustible"
                name="combustible"
                placeholder="Combustible del Coche"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'El Combustible del Coche es obligatorio'}"
                />

                <FormKit
                type="text"
                label="Color"
                name="color"
                placeholder="Color del Coche"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'El Color del Coche es obligatorio'}"
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