<template>
  <div>
    <!-- Formulario de login -->
    <form @submit.prevent="loginUser">
      <input v-model="username" placeholder="Username" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService";
import { useAuthStore } from "@/stores/auth";

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
        } else {
          console.log('Token no recibido:', response.data);
        }
      } catch (error) {
        console.error('Error en el login:', error);
        // Manejar errores específicos, como mostrar un mensaje de error en la interfaz de usuario.
      }
    },
  },
};
</script>