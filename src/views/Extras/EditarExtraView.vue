<script setup>
    import { onMounted, reactive } from 'vue'
    import {FormKit} from '@formkit/vue'
    import{ useRouter, useRoute } from 'vue-router'
    import ExtraService from '../../services/ExtraService'
    import RouterLink from '../../components/UI/RouterLink.vue'


    const router = useRouter()
    const route = useRoute()

    const { extraId } = route.params

    const formData = reactive ({})

    onMounted(() => {
        ExtraService.getExtra(extraId)
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
        ExtraService.updateExtra(extraId, data)
            .then(() => router.push({name: 'listado-extras'}))
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
                submit-label="Guardar cambios"
                incomplete-message="No se pudo enviar, revisa los campos"
                @submit="handleSubmit"
                :value="formData"
            >
                <FormKit
                type="text"
                label="Nombre"
                name="name"
                placeholder="ID del Cliente"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'El nombre del Cliente es obligatorio'}"
                v-model="formData.name"
                />

                <FormKit
                type="text"
                label="Descripcion"
                name="description"
                placeholder="ID del Coche"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'Los Apellidos del Cliente son obligatorios'}"
                v-model="formData.description"
                />

                
                <FormKit
                type="text"
                label="Precio"
                name="price"
                prefix-icon="telephone"
                help="Coloca el Telefono del Cliente que deseas registrar"
                :validation-messages="{ matches: 'El formato no es valido' }"
                v-model="formData.price"
                />

                <FormKit
                type="text"
                label="Stock"
                name="stock"
                placeholder="Estado del Pedido"
                help="Coloca el Nombre del Cliente que deseas registrar"
                :validation-messages="{required:'El Email del Cliente es obligatorio', email: 'Coloca un email valido'}"
                v-model="formData.stock"
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