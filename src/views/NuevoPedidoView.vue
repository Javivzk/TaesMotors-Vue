<script setup>
import { FormKit } from '@formkit/vue';
import { useRouter } from 'vue-router';
import PedidoService from '../services/PedidoService';
import RouterLink from '../components/UI/RouterLink.vue';
import Heading from '../components/UI/Heading.vue';

const router = useRouter();

defineProps({
  titulo: {
    type: String,
  },
});

const handleSubmit = (data) => {
  // Asegúrate de que los datos estén correctamente estructurados
  if (data.carId && data.customerId && data.extraId) {
    const orderData = {
      customer: {
        customerId: data.customerId,
      },
      car: {
        carId: data.carId,
      },
      extra: {
        extraId: data.extraId,
      },
      paid: false,
    };

    // Asegúrate de calcular totalPrice según tu lógica
    orderData.totalPrice = orderData.car.basePrice + orderData.extra.price;
    PedidoService.postOrder(orderData)
      .then((respuesta) => {
        console.log(respuesta);
        router.push({ name: 'listado-pedidos' });
      })
      .catch((error) => console.log(error));
  } else {
    console.error('Los datos no están correctamente estructurados.');
  }
};
</script>

<template>
  <div>
    <!-- ... tu código existente ... -->
    <FormKit
      type="form"
      submit-label="Agregar Pedido"
      incomplete-message="No se pudo enviar, revisa los campos"
      @submit="handleSubmit"
    >
      <!-- Otros campos del formulario -->

      <!-- Agrega campos para car, customer y extra -->
      <FormKit
        type="number"
        label="ID COCHE"
        name="carId"
        placeholder="ID del Coche"
        prefix-icon="add"
        validation="required"
        :validation-messages="{ required: 'El ID del Coche es obligatorio' }"
      />

      <FormKit
        type="number"
        label="ID CUSTOMER"
        name="customerId"
        placeholder="ID del Cliente"
        prefix-icon="add"
        validation="required"
        :validation-messages="{ required: 'El ID del cliente es obligatorio' }"
      />

      <FormKit
        type="number"
        label="ID EXTRA"
        name="extraId"
        placeholder="Extra añadido al Coche"
        help="Coloca el Extra que deseas registrar"
        :validation-messages="{ required: 'El Extra del Coche es obligatorio' }"
      />
    </FormKit>
  </div>
</template>

<style>
.formkit-wrapper {
  max-width: 100%;
}
</style>
