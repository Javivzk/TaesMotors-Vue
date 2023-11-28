<template>
  <div class="container mx-auto mt-10 text-center">
    <h1 class="text-4xl font-bold mb-6">Bienvenido a TAESMOTORS</h1>
    <div class="flex flex-row items-center justify-center">
      <div class="mr-4">
        <router-link to="/buscar-clientes">
          <img class="w-auto h-auto max-w-xs object-scale-down hover:opacity-75 transition-opacity duration-200" src="src\assets\images\seatleon.jpg" alt="Seat Leon">
        </router-link>
      </div>
      <div class="mr-4">
        <router-link to="/buscar-clientes">
          <img class="w-auto h-auto max-w-xs object-scale-down hover:opacity-75 transition-opacity duration-200" src="src\assets\images\seatibiza.jpg" alt="Seat Leon">
        </router-link>
      </div>
      <div class="mr-4">
        <router-link to="/buscar-clientes">
          <img class="w-auto h-auto max-w-xs object-scale-down hover:opacity-75 transition-opacity duration-200" src="src\assets\images\seatarona.jpg" alt="Seat Leon">
        </router-link>
      </div>
    </div>
    <div class="container mx-auto mt-10 text-center">
      <router-link to="/listado-coches">
        <h1 class="text-4xl font-bold mb-6">Listado de Coches</h1>
      </router-link>
    </div>
    <div class="container mx-auto mt-10 text-center">
      <router-link to="/listado-pedidos">
        <h1 class="text-4xl font-bold mb-6">Listado de Pedidos</h1>
      </router-link>
    </div>
    <div class="container mx-auto mt-10 text-center">
      <router-link to="/listado-clientes">
        <h1 class="text-4xl font-bold mb-6">Listado de Clientes</h1>
      </router-link>
    </div>
  </div>
</template>
  
  <script>
  export default {
    name: 'Inicio',
  }
  </script>
  
  <style scoped>
  /* No necesitas agregar estilos aquí para Tailwind CSS */
  </style>
  