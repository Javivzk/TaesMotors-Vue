<template>
  <div>
    <button @click="logoutUser">Logout</button>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/auth";

export default {
  methods: {
    logoutUser() {
      const authStore = useAuthStore();
      authStore.logout(); // Llama al método de logout del store
      this.$router.push('/login'); // Redirige a la página de login o a donde desees
    },
  },
};
</script>
