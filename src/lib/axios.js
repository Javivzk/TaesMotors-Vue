// axios.js
import axios from 'axios';
import { useAuthStore } from '@/stores/auth';
import { onMounted } from 'vue';

axios.defaults.withCredentials = true;  // Habilita el envío de cookies

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

// Intercepta todas las solicitudes y agrega el token al encabezado de autorización si está presente
api.interceptors.request.use((config) => {
  const authStore = useAuthStore();  // Mueve esta línea al interceptor
  const token = authStore.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Asegúrate de ejecutar esta configuración después de que Pinia esté activa
onMounted(() => {
  // Puedes realizar alguna acción aquí si es necesario
});

export default api;