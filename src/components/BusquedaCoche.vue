<script setup>
    import {useCochesStore} from '../stores/coches'

    const coches = useCochesStore()

    defineProps({
        coche: {
            type: Object
        }
    })

</script>

<template>
    <div class="border shadow-lg">
        <div class="overflow-hidden">
            <img
                class="hover:scale-125 transform transition-all duration-500 
                hover:rotate-2"
                :src="coche.image"
                :alt="'Imagen de ' +  coche.brand + '\n' + coche.model"
            />

        </div>
        <div class="p-5">
            <h2 class="text-2xl truncate font-extrabold">{{coche.model}}</h2>
            <button
                type="button"
                class="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg"
                @click="coches.seleccionarCoche(coche.carId)"
            >
                Ver Coche
            </button>
        </div>
    </div>


</template>