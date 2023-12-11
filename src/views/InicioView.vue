<script setup>

</script>

<template>
  <div class="container mx-auto mt-10 text-center">
    <h1 class="text-4xl font-bold mb-6">Bienvenido a TAESMOTORS</h1>

    <h1 class="text-4xl font-bold mb-6">SEAT</h1>

    <div class="flex flex-row items-center justify-center">

      <div class="mr-4">

        <router-link to="/leon">
          <img class="w-auto h-auto max-w-xs object-scale-down hover:opacity-75 transition-opacity duration-200" src="src\assets\images\seat\leon\seatleon.jpg" alt="Seat Leon">
        </router-link>
      </div>

      <div class="mr-4">
        <router-link to="/ibiza">
          <img class="w-auto h-auto max-w-xs object-scale-down hover:opacity-75 transition-opacity duration-200" src="src\assets\images\seat\ibiza\seatibiza.jpg" alt="Seat Ibiza">
        </router-link>
      </div>

      <div class="mr-4">
        <router-link to="/arona">
          <img class="w-auto h-auto max-w-xs object-scale-down hover:opacity-75 transition-opacity duration-200" src="src\assets\images\seat\arona\seatarona.jpg" alt="Seat Arona">
        </router-link>
      </div>
    </div>

  <div class="container mx-auto mt-10 text-center">

    <h1 class="text-4xl font-bold mb-6">MAZDA</h1>

    <div class="flex flex-row items-center justify-center">

      <div class="mr-4">
        <router-link to="/mazda3">
          <img class="w-auto h-auto max-w-xs object-scale-down hover:opacity-75 transition-opacity duration-200" src="src\assets\images\mazda\3\mazda3.jpg" alt="Mazda 3">
        </router-link>
      </div>
      
      <div class="mr-4">
        <router-link to="/mazdacx5">
          <img class="w-auto h-auto max-w-xs object-scale-down hover:opacity-75 transition-opacity duration-200" src="src\assets\images\mazda\cx5\mazdacx5.jpg" alt="Mazda CX5">
        </router-link>
      </div>

      <div class="mr-4">
        <router-link to="/mazdamx5">
          <img class="w-auto h-auto max-w-xs object-scale-down hover:opacity-75 transition-opacity duration-200" src="src\assets\images\mazda\mx5\mazdamx5.jpg" alt="Mazda MX5">
        </router-link>
      </div>
    </div>
  </div>


  </div>
</template>
  

  
  <style scoped>
  /* No necesitas agregar estilos aquí para Tailwind CSS */
  </style>
  