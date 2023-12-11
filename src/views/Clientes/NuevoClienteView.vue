<script setup>
import { FormKit } from '@formkit/vue';
import { useRouter } from 'vue-router';
import ClienteService from '../../services/ClienteService';
import Swal from 'sweetalert2';
import RouterLink from '../../components/UI/RouterLink.vue';

const router = useRouter();

defineProps({
  titulo: {
    type: String,
  },
});

const handleSubmit = (data) => {
  data.estado = false;
  ClienteService.postCustomer(data)
    .then((respuesta) => {
      console.log(respuesta);
      router.push({ name: 'listado-clientes' });
      // Mostrar notificación de cliente registrado
      showNotification('Cliente registrado exitosamente', 'success');
    })
    .catch((error) => {
      console.error(error);
      // Mostrar notificación de error
      showNotification('Hubo un error al registrar el cliente', 'error');
    });
};

const showNotification = (message, type) => {
  Swal.fire({
    icon: type,
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
};
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
                  name="name"
                  placeholder="Nombre de Cliente"
                  prefix-icon="avatarMan" 
                  validation="required"
                  :validation-messages="{required:'El nombre del Cliente es obligatorio'}"
                />
              
                <FormKit
                  type="text"
                  label="Apellidos"
                  name="lastName"
                  placeholder="Apellidos del Cliente"
                  prefix-icon="avatarMan" 
                  validation="required"
                  :validation-messages="{required:'Los Apellidos del Cliente son obligatorios'}"
                />
              
                <FormKit
                  type="text"
                  label="Estado"
                  name="clubMember"
                  placeholder="Estado de Cliente"
                  prefix-icon="add" 
                  help="Coloca el Nombre del Cliente que deseas registrar"
                  :validation-messages="{required:'El Email del Cliente es obligatorio', email: 'Coloca un email valido'}"
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
                  name="phone"
                  placeholder="Telefono: XXX-XXX-XXXX"
                  prefix-icon="telephone"
                  help="Coloca el Telefono del Cliente que deseas registrar"
                  validation="?matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                  :validation-messages="{ matches: 'El formato no es valido' }"
                />
              
                <FormKit
                  type="text"
                  label="Direccion"
                  name="address"
                  placeholder="Direccion del Cliente"
                  prefix-icon="flag" 
                  validation="required"
                  :validation-messages="{required:'La Direccion del Cliente es obligatoria'}"
                />
              
                <FormKit
                  type="text"
                  label="Ciudad"
                  name="city"
                  placeholder="Ciudad del Cliente"
                  prefix-icon="flag" 
                  validation="required"
                  :validation-messages="{required:'La Ciudad del Cliente es obligatoria'}"
                />
              
                <FormKit
                  type="text"
                  label="Codigo Postal"
                  name="postalCode"
                  placeholder="Codigo Postal del Cliente"
                  prefix-icon="flag" 
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