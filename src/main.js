import './assets/styles/main.css'
import { plugin,defaultConfig } from '@formkit/vue'
import config from '../formkit.config'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(plugin,defaultConfig(config))
app.use(pinia)

app.mount('#app')
