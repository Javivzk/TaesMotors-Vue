<script setup>
    import { computed } from 'vue';
    import { RouterLink, useRoute } from 'vue-router';
    import { useCochesStore } from '../../stores/coches';
    import { useAuthStore } from '@/stores/auth';

    const paginaBusqueda = computed(() => route.name === 'busqueda');

    const route = useRoute()
    const store = useCochesStore()
    const authStore = useAuthStore(); 
    console.log(authStore.isAuthenticated);  // Asegúrate de que esto imprima `true` después del inicio de sesión

    const handleSubmit = () => {
        store.obtenerCoches()
    }

    const logoutUser = () => {
    authStore.logout();  
    route.push('/login'); 
}

</script>

<template>
    
    <header
        class="bg-slate-800"
        :class="{'header': paginaBusqueda}"
    >
        <div class="mx-auto container px-5 py-16">

            <div class="flex justify-between items-center">
                <div>
                    <RouterLink
                        :to="{name: 'inicio'}"
                    
                    >
                        <img class="w-32" src="/img/logo.jpg" alt="Logotipo" />
                    </RouterLink>

                </div>
                <nav class="flex gap-4">
                    <RouterLink
                        :to="{name: 'inicio'}"
                        class="text-white uppercase font-bold"
                        active-class="text-orange-500"                    
                    >
                        Inicio
                    </RouterLink>
                    <RouterLink
                        :to="{name: 'busqueda'}"
                        class="text-white uppercase font-bold"
                        active-class="text-orange-500"
                    >
                        Busqueda
                    </RouterLink>
                    <RouterLink
                        :to="{name: 'listado-coches'}"
                        class="text-white uppercase font-bold"
                        active-class="text-orange-500"
                    >
                        Coches
                    </RouterLink>
                    <RouterLink
                        :to="{name: 'listado-empleados'}"
                        class="text-white uppercase font-bold"
                        active-class="text-orange-500"
                    >
                        Empleados
                    </RouterLink>
                    <RouterLink
                        :to="{name: 'listado-clientes'}"
                        class="text-white uppercase font-bold"
                        active-class="text-orange-500"
                    >
                        Clientes
                    </RouterLink>
                    <RouterLink
                        :to="{name: 'listado-extras'}"
                        class="text-white uppercase font-bold"
                        active-class="text-orange-500"
                    >
                        Extras
                    </RouterLink>
                    <RouterLink
                        :to="{name: 'listado-pedidos'}"
                        class="text-white uppercase font-bold"
                        active-class="text-orange-500"
                    >
                        Pedidos
                    </RouterLink>
                    <RouterLink
                        v-if="authStore.isAuthenticated"
                        to="/listado-usuarios"
                        class="text-white uppercase font-bold"
                        active-class="text-orange-500"
                    >
                        Usuarios
                    </RouterLink>
                    <RouterLink
                        v-if="authStore.isAuthenticated"
                        @click="logoutUser"
                        to="/login"
                        class="text-white uppercase font-bold"
                        active-class="text-orange-500"
                    >
                        Logout
                    </RouterLink>
                    <RouterLink
                        v-if="!authStore.isAuthenticated"
                        to="/register"
                        class="text-white uppercase font-bold"
                        active-class="text-orange-500"
                    >
                        Registrarse
                    </RouterLink>

                </nav>
            </div>

            <form 
                v-if="paginaBusqueda"
                class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow
                space-y-6"
                @submit.prevent="handleSubmit"
            >
                <div class="space-y-4">
                    <label
                        class="block text-white uppercase font-extrabold text-lg"
                    for="marca">Marca</label>
                    <input 
                        id="marca"
                        type="text"       
                        class="p-3 w-full rounded lg focus:outline-none"  
                        placeholder="Marca del coche"  
                        v-model="store.busqueda.marca"             
                    >
                </div>

                <div class="space-y-4">
                    <label
                        class="block text-white uppercase font-extrabold text-lg"
                    for="modelo">Modelo</label>
                    <select 
                        id="modelo"
                        class="p-3 w-full rounded lg focus:outline-none"  
                        v-model="store.busqueda.modelo"             
                    >
                        <option value="">-- Seleccione --</option>
                        <option
                            v-for="modelo in store.modelos"
                            :key="modelo.model"
                            :value="modelo.model"
                        >{{modelo.model}}</option>

                    </select>
                </div>

                <input
                    type="submit"
                    class="bg-orange-800 hover:bg-orange-900 cursor-pointer text-white font-extrabold w-full p-2"
                    value="Buscar Coches"
                />
            </form>
        </div>
    </header>
</template>
