<template>
  <div class="container mx-auto mt-10 text-center">
    <h1 class="text-4xl font-bold mb-6">Bienvenido a TAESMOTORS</h1>

    <h1 class="text-4xl font-bold mb-6">SEAT</h1>

    <div class="flex flex-row items-center justify-center">

      <div class="mr-4">

        <router-link to="/buscar-clientes">
          <img class="w-auto h-auto max-w-xs object-scale-down hover:opacity-75 transition-opacity duration-200" src="src\assets\images\seatleon.jpg" alt="Seat Leon">
        </router-link>
      </div>

      <div class="mr-4">
        <router-link to="/buscar-clientes">
          <img class="w-auto h-auto max-w-xs object-scale-down hover:opacity-75 transition-opacity duration-200" src="src\assets\images\seatibiza.jpg" alt="Seat Ibiza">
        </router-link>
      </div>

      <div class="mr-4">
        <router-link to="/buscar-clientes">
          <img class="w-auto h-auto max-w-xs object-scale-down hover:opacity-75 transition-opacity duration-200" src="src\assets\images\seatarona.jpg" alt="Seat Arona">
        </router-link>
      </div>
    </div>

  <div class="container mx-auto mt-10 text-center">

    <h1 class="text-4xl font-bold mb-6">MAZDA</h1>

    <div class="flex flex-row items-center justify-center">

      <div class="mr-4">
        <router-link to="/buscar-clientes">
          <img class="w-auto h-auto max-w-xs object-scale-down hover:opacity-75 transition-opacity duration-200" src="src\assets\images\mazda3.jpg" alt="Mazda 3">
        </router-link>
      </div>
      
      <div class="mr-4">
        <router-link to="/buscar-clientes">
          <img class="w-auto h-auto max-w-xs object-scale-down hover:opacity-75 transition-opacity duration-200" src="src\assets\images\mazdacx5.jpg" alt="Mazda CX5">
        </router-link>
      </div>

      <div class="mr-4">
        <router-link to="/buscar-clientes">
          <img class="w-auto h-auto max-w-xs object-scale-down hover:opacity-75 transition-opacity duration-200" src="src\assets\images\mazdamx5.jpg" alt="Mazda MX5">
        </router-link>
      </div>
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
    <div class="container mx-auto mt-10 text-center">
      <router-link to="/listado-empleados">
        <h1 class="text-4xl font-bold mb-6">Listado de Empleados</h1>
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
  