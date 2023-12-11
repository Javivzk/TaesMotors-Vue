<template>
  <div class="container mx-auto mt-10">
    <h1 class="text-4xl font-bold mb-6 text-center">Bienvenido a TAESMOTORS</h1>

    <section class="mb-10">
      <h2 class="text-3xl font-bold mb-4 text-center">SEAT</h2>
      <div class="flex flex-wrap justify-center gap-4">
        <div v-for="model in seatModels" :key="model.name" class="max-w-xs">
          <router-link :to="model.route">
            <img class="object-scale-down hover:opacity-75 transition-opacity duration-200" :src="model.image" :alt="model.name">
          </router-link>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-3xl font-bold mb-4 text-center">MAZDA</h2>
      <div class="flex flex-wrap justify-center gap-4">
        <div v-for="model in mazdaModels" :key="model.name" class="max-w-xs">
          <router-link :to="model.route">
            <img class="object-scale-down hover:opacity-75 transition-opacity duration-200" :src="model.image" :alt="model.name">
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const seatModels = [
  { name: 'Seat Leon', route: '/leon', image: 'src/assets/images/seat/leon/seatleon.jpg' },
  { name: 'Seat Ibiza', route: '/ibiza', image: 'src/assets/images/seat/ibiza/seatibiza.jpg' },
  { name: 'Seat Arona', route: '/arona', image: 'src/assets/images/seat/arona/seatarona.jpg' }
];

const mazdaModels = [
  { name: 'Mazda 3', route: '/mazda3', image: 'src/assets/images/mazda/3/mazda3.jpg' },
  { name: 'Mazda CX5', route: '/mazdacx5', image: 'src/assets/images/mazda/cx5/mazdacx5.jpg' },
  { name: 'Mazda MX5', route: '/mazdamx5', image: 'src/assets/images/mazda/mx5/mazdamx5.jpg' }
];
</script>