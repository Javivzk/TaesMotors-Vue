<script setup>
    import { onMounted, reactive } from 'vue'
    import {FormKit} from '@formkit/vue'
    import{ useRouter, useRoute } from 'vue-router'
    import PedidoService from '../services/PedidoService'
    import RouterLink from '../components/UI/RouterLink.vue'
    import Heading from '../components/UI/Heading.vue'


    const router = useRouter()
    const route = useRoute()

    const { orderId } = route.params

    const formData = reactive({
    customer: {
        customerId: '', // Tipo de dato dependiendo de lo que esperas aquí
    },
    car: {
        carId: '', // Tipo de dato dependiendo de lo que esperas aquí
    },
    extra: {
        customerId: '', // Tipo de dato dependiendo de lo que esperas aquí
    },
    totalPrice: '', // Tipo de dato dependiendo de lo que esperas aquí
    paid: '', // Tipo de dato dependiendo de lo que esperas aquí
    });
    onMounted(() => {
        PedidoService.getOrder(orderId)
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
        PedidoService.updateOrder(orderId, data)
            .then(() => router.push({name: 'listado-pedidos'}))
            .catch(error => console.log(error))
        }
</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink  
                to="listado-pedidos"
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
                label="ID CLIENTE"
                name="customerId"
                placeholder="ID del Cliente"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'El nombre del Cliente es obligatorio'}"
                v-model="formData.customer.customerId"
                />

                <FormKit
                type="text"
                label="ID COCHE"
                name="carId"
                placeholder="ID del Coche"
                prefix-icon="add"
                validation="required"
                :validation-messages="{required:'Los Apellidos del Cliente son obligatorios'}"
                v-model="formData.car.carId"
                />

                <FormKit
                type="text"
                label="ID EMPLEADO"
                name="extraId"
                placeholder="ID del Empleado"
                prefix-icon="email"
                help="Coloca el Nombre del Cliente que deseas registrar"
                :validation-messages="{required:'El Email del Cliente es obligatorio', email: 'Coloca un email valido'}"
                v-model="formData.extra.extraId"
                />
                
                <FormKit
                type="text"
                label="Precio"
                name="price"
                prefix-icon="telephone"
                help="Coloca el Telefono del Cliente que deseas registrar"
                :validation-messages="{ matches: 'El formato no es valido' }"
                v-model="formData.totalPrice"
                />

                <FormKit
                type="text"
                label="Estado"
                name="paid"
                placeholder="Estado del Pedido"
                help="Coloca el Nombre del Cliente que deseas registrar"
                :validation-messages="{required:'El Email del Cliente es obligatorio', email: 'Coloca un email valido'}"
                v-model="formData.paid"
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