<template>
  <div class="flex justify-center items-center mt-16">
    <form @submit.prevent="registerUser" class="w-64 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div v-for="field in ['Username', 'Password', 'Name', 'Surname', 'Email']" :key="field.toLowerCase()" class="mb-4">
        <label :for="field.toLowerCase()" class="block text-gray-700 text-sm font-bold mb-2">{{ field }}:</label>
        <input v-model="user[field.toLowerCase()]" :type="getFieldType(field)" class="w-full border rounded py-2 px-3" :placeholder="field" required>
      </div>

      <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Register
      </button>
    </form>
  </div>
</template>

<script>
import authService from "@/services/authService";
import router from "@/router";
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
        email: "",
        name: "",
        surname: "",
      },
      errorMessage: null,
    };
  },
  methods: {
    async registerUser() {
      try {
        const trimmedPassword = this.user.password.trim();

        if (!trimmedPassword) {
          this.errorMessage = "La contraseña no puede estar vacía.";
          this.showNotification(this.errorMessage, "error");
          return;
        }

        const response = await authService.register(this.user);
        console.log("Usuario registrado:", response.data);
        this.handleSuccess("Registro exitoso, cuenta pendiente de asignar a su ID de empleado");
      } catch (error) {
        console.error("Error en el registro:", error);
        this.handleError(error);
      }
    },
    handleSuccess(message) {
      this.errorMessage = null;
      this.showNotification(message, "success");
      router.push({ name: "inicio" });
    },
    handleError(error) {
      this.errorMessage = "Error en el registro. Inténtalo de nuevo.";

      if (error.response && error.response.status === 400) {
        const errorData = error.response.data;
        if (errorData.message) {
          this.errorMessage = errorData.message;
        } else if (errorData.errors && errorData.errors.email) {
          this.errorMessage = errorData.errors.email;
        }
      }

      this.showNotification(this.errorMessage, "error");
    },
    showNotification(message, type) {
      Swal.fire({
        icon: type,
        title: message,
        showConfirmButton: true,
      });
    },
    getFieldType(field) {
      return field.toLowerCase().includes('password') ? 'password' : 'text';
    },
  },
};
</script>
