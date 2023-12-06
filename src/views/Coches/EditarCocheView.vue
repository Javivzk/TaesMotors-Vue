<script setup>
    import { onMounted, reactive } from 'vue'
    import {FormKit} from '@formkit/vue'
    import{ useRouter, useRoute } from 'vue-router'
    import CocheService from '../../services/CocheService'
    import RouterLink from '../../components/UI/RouterLink.vue'


    const router = useRouter()
    const route = useRoute()

    const { carId } = route.params

    const formData = reactive ({})

    onMounted(() => {
        CocheService.getCar(carId)
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
        CocheService.updateCar(carId, data)
            .then(() => router.push({name: 'listado-coches'}))
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
                label="Marca"
                name="brand"
                placeholder="Marca del Coche"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'La marca del Coche es obligatoria'}"
                v-model="formData.brand"
                />

                <FormKit
                type="text"
                label="Modelo"
                name="model"
                placeholder="Modelo del Coche"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'El modelo del Coche es obligatorio'}"
                v-model="formData.model"
                />

                
                <FormKit
                type="text"
                label="Motor"
                name="motor"
                prefix-icon="telephone"
                help="Coloca el Motor del Coche que deseas registrar"
                v-model="formData.motor"
                />

                <FormKit
                type="text"
                label="Combustible"
                name="combustible"
                placeholder="Combustible del Coche"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'El combustible del Coche es obligatorio'}"
                v-model="formData.combustible"
                />

                <FormKit
                type="text"
                label="Color"
                name="color"
                placeholder="Color del Coche"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'El color del Coche es obligatorio'}"
                v-model="formData.color"
                />

                <FormKit
                type="text"
                label="Stock"
                name="stock"
                placeholder="Stock de Cliente"
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