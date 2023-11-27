<script setup>
  import { ref, onMounted } from 'vue';
  import { FormKit } from '@formkit/vue';
  import { useRouter } from 'vue-router';
  import PedidoService from '../services/PedidoService';
  import RouterLink from '../components/UI/RouterLink.vue';
  import Heading from '../components/UI/Heading.vue';

  const customerId = ref('');
  const carId = ref('');
  const extraId = ref('');
  const totalPrice = ref('');
  const paid = ref('');
  const extras = ref([]);

  const router = useRouter();

  defineProps({
    titulo: {
      type: String,
    },
  });

  const data = ref({
    customerId: customerId.value,
    carId: carId.value,
    extraId: extraId.value,
    totalPrice: totalPrice.value,
    paid: paid.value,
  });

  const loadExtras = () => {
    PedidoService.getExtras()
      .then((response) => {
        extras.value = response.data;
      })
      .catch((error) => console.error(error));
  };

  onMounted(() => {
    loadExtras();
  });

  const handleSubmit = () => {
    data.value.estado = false;
    PedidoService.postOrder(data.value)
      .then((respuesta) => {
        console.log(respuesta);
        router.push({ name: 'listado-pedidos' });
      })
      .catch((error) => console.log(error));
  };
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="listado-pedidos">Volver</RouterLink>
    </div>

    <Heading>{{ titulo }}</Heading>

    <div class="mx-auto mt-10 bg-white shadow">
      <div class="mx-auto md:w-2/3 py20 px-6">
        <FormKit
          type="form"
          submit-label="Agregar Pedido"
          incomplete-message="No se pudo enviar, revisa los campos"
          @submit="handleSubmit"
        >
          <FormKit
            type="text"
            label="ID CLIENTE"
            name="customerId"
            placeholder="Apellidos del Cliente"
            prefix-icon="add"
            validation="required"
            :validation-messages="{ required: 'Los Apellidos del Cliente son obligatorios' }"
          />

          <FormKit
            type="text"
            label="ID COCHE"
            name="carId"
            placeholder="Email de Cliente"
            prefix-icon="email"
            help="Coloca el Nombre del Cliente que deseas registrar"
            :validation-messages="{ required: 'El Email del Cliente es obligatorio', email: 'Coloca un email valido' }"
          />

          <FormKit
            type="select"
            label="Extras"
            name="extraId"
            help="Coloca el Telefono del Cliente que deseas registrar"
            :options="extras"
          />

          <FormKit
            type="text"
            label="Precio Total"
            name="totalPrice"
            placeholder="Direccion del Cliente"
            prefix-icon="add"
            validation="required"
          />

          <FormKit
            type="text"
            label="Estado"
            name="paid"
            placeholder="Estado de Cliente"
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
