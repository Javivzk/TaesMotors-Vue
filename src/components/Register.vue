<template>
    <div>
      <!-- Formulario de registro -->
      <form @submit.prevent="registerUser">
        <!-- Campos como se han definido en UserDTO como ejemplo -->
        <input v-model="user.username" placeholder="Username" required>
        <input type="password" v-model="user.password" placeholder="Password" required>
        <input v-model="user.email" placeholder="Email" required>
        <!-- Agrega más campos según sea necesario -->
  
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  import authService from "@/services/authService";
  
  export default {
    data() {
      return {
        // Datos del nuevo usuario
        user: {
          username: '',
          password: '',
          email: '',
          // Agrega más propiedades según sean necesarias
        },
      };
    },
    methods: {
      async registerUser() {
        try {
          const response = await authService.register(this.user);
          // Manejo de la respuesta - quizás quieras autenticar al usuario inmediatamente o redirigirlo a la página de login
          console.log('Usuario registrado:', response.data);
        } catch (error) {
          // Manejo de error - muestra mensajes de error para el usuario si es necesario
          console.error('Error en el registro:', error);
        }
      },
    },
  };
  </script>