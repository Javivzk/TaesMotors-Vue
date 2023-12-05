<script setup>
    import { computed } from 'vue';
    import { RouterLink, useRoute } from 'vue-router';
    import { useCochesStore } from '../../stores/coches';

    const route = useRoute();
    const store = useCochesStore();
    const paginaBusqueda = computed(() => route.name === 'busqueda');

    const handleSubmit = () => {
        store.obtenerCoches();
    }

</script>

<template>
    <header
        class="bg-slate-800"
        :class="{'header': busqueda}"
    
    >
        <div class="mx-auto container px-5 py-16">
            <div class="flex justify-between items-center">
                <div>
                    <RouterLink
                        :to="{name: 'inicio'}"
                    
                    >
                        <img class="w-32" src="/img/logo2.jpg" alt="Logotipo" />
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
                    :to="{name: 'favoritos'}"
                    class="text-white uppercase font-bold"
                    active-class="text-orange-500"
                    >
                        Favoritos
                    </RouterLink>

                </nav>
            </div>

            <form 
                class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow
                space-y-6"
                v-if="paginaBusqueda"
                @submit.prevent="handleSubmit"
            >
                <div class="space-y-4">
                    <label
                        class="block text-white uppercase font-extrabold text-lg"
                    for="name">Marca</label>
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
                    for="coche">Modelo</label>
                    <select 
                        id="modelo"
                        class="p-3 w-full rounded lg focus:outline-none"  
                        v-model="store.busqueda.modelo"             
                    >
                        <option value="">-- Seleccione --</option>
                        <option
                            v-for="modelo in store.coches"
                            :key="modelo.model"
                            :value="modelo.model"
                        >{{modelo.model}}</option>

                    </select>
                </div>

                <input
                    type="submit"
                    class="bg-orange-800 hover:bg-orange-900 cursor-pointer text-white font-extrabold w-full p-2"
                    value="Buscar clientes"
                />
            </form>
        </div>
    </header>
</template>

<style>
    .header{
        background-image: url('/img/bg2.jpg');
        background-size: cover;
        background-position: center center;
    }
</style>