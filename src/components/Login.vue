<template>
  <div class="flex justify-center items-center">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="loginUser">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input
          v-model="username"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          required
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input
          v-model="password"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
          required
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService";
import { useAuthStore } from "@/stores/auth";
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await AuthService.login(this.username, this.password);

        if (response.data.token) {
          const authStore = useAuthStore();
          authStore.login(response.data.token); // Almacena el token en el store
          this.$router.push('/'); // Redirigir a la ruta de inicio

          // Muestra notificación de inicio de sesión exitoso
          this.showNotification('Inicio de sesión exitoso', 'success');
        } else {
          console.log('Token no recibido:', response.data);
        }
      } catch (error) {
        console.error('Error en el login:', error);

        // Muestra notificación de error
        this.showNotification('Error en el inicio de sesión. Verifica tus credenciales o espera a que activen tu cuenta', 'error');
      }
    },
    showNotification(message, type) {
      // Utiliza Sweetalert2 para mostrar notificaciones
      Swal.fire({
        icon: type,
        title: message,
        showConfirmButton: false,
        timer: 1500,
      });
    },
  },
};
</script>