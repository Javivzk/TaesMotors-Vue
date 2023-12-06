<script setup>
    import BusquedaCoche from '../components/BusquedaCoche.vue';
    import { useCochesStore } from '../stores/coches';
    import Header from '../components/UI/Header.vue';

    const coches = useCochesStore();
</script>

<template>

    <h1 class="text-6xl font-extrabold">Coches</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
        <BusquedaCoche
            v-for="coche in coches.coches"
            :coche="coche"
            :key="coche.carId"
        
        />



        
        
    </div>
</template>