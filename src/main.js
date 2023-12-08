import './assets/styles/main.css';
import { plugin, defaultConfig } from '@formkit/vue';
import config from '../formkit.config';
import { createApp } from 'vue';
import { createPinia } from 'pinia';  // Importa createPinia aquí
import { useAuthStore } from '@/stores/auth';
import App from './App.vue';
import router from './router';

const pinia = createPinia();  // Crea la instancia de pinia antes de cualquier uso

const app = createApp(App);

app.use(pinia);  // Usa pinia antes que cualquier store

// Resto del código...
app.use(router);
app.use(plugin, defaultConfig(config));

const authStore = useAuthStore(); // Instancia del store de autenticación

// Recuperar el token del almacenamiento local al cargar la aplicación
const token = localStorage.getItem('userToken');
if (token) {
  authStore.login(token);
}

app.mount('#app');