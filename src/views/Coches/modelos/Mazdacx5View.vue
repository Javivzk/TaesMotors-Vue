<script setup>
    import RouterLink from '../../../components/UI/RouterLink.vue';


</script>


<template>
  <div class="container mx-auto mt-10 mb-6 text-center">
    <h1 class="text-4xl font-bold mb-6">MAZDA CX5</h1>
    <div class="container mx-auto mt-10 text-center">
      <img class="w-full hover:opacity-75 transition-opacity duration-200" src="src\assets\images\mazda\cx5\mazda-cx5-2022.jpg" alt="Seat Arona">
      
      <h2 class="text-3xl font-bold mt-10 mb-6">Elegancia y potencia combinadas</h2>
      
      <img class="w-full hover:opacity-75 transition-opacity duration-200" src="src\assets\images\mazda\cx5\mazda-cx5-2022-interior.jpg" alt="leonInterior">
      
      <h2 class="text-3xl font-bold mt-10 mb-6">Interior del Mazda CX-5 2022</h2>
      <p class="text-xl mb-6">
        Si nos adentramos en el habitáculo del Mazda CX-5 2022 encontramos unos asientos delanteros rediseñados para reducir la fatiga en viajes largos y nuevas molduras decorativas en algunos de los acabados. A nivel tecnológico, cuenta con una base para cargar el teléfono de carga inalámbrica y la pantalla de infoentretenimiento es compatible con Apple Carplay y Android Auto.      </p>
      
      <h2 class="text-3xl font-bold mx-auto mt-10 mr-4 mb-6">Diseño exterior del Mazda CX-5 2022</h2>
      <p class="text-xl mb-6">
        No conocemos las dimensiones del Mazda CX-5 2022, pero teniendo en cuenta que los cambios de esta versión son sutiles, es de esperar que no varíe mucho con el modelo que sucede: el Mazda CX-5 2017 con 4,55 metros de largo por 1,84 metros de ancho y 1,67 metros de alto. A nivel estético encontramos cambios en los parachoques, la parrilla, los faros y los pilotos. Además, está disponible un nuevo color de carrocería llamado Zircon Sand y las llantas de aleación que ahora pasan a ser de 19 pulgadas estrenan nuevo diseño.      
      </p>
      <img class="w-full hover:opacity-75 transition-opacity duration-200" src="src\assets\images\mazda\cx5\mazda-cx5-2022-2.jpg" alt="leonInterior">

      <h2 class="text-3xl font-bold mx-auto mt-10 mr-4 mb-6">Equipamiento del Mazda CX-5 2022</h2>
      <p class="text-xl mb-6">
        A nivel de seguridad cuenta con los últimos avances en tecnología que facilitan la experiencia conduciendo. Hablamos del i-Activsense, que es un Asistente de tráﬁco y crucero (CTS). El CTS tiene como objetivo reducir la fatiga al volante. También incorpora Faros Smart Full LED adaptativos (ALH), que en esta ocasión pasan de matrices de 12 a 20 módulos de ledes para controlar la distribución de la luz con mayor precisión. No falta tampoco el mantenimiento de carril, programador de velocidad activo, lector de señales de tráfico o un conjunto de cámaras que generan una vista cenital del vehículo.      </p>
      <h2 class="text-3xl font-bold mx-auto mt-10 mr-4 mb-6">Motores del Mazda CX-5 2022</h2>
      <p class="text-xl mb-6">
        A nivel mecánico el Mazda CX-5 2022 incluye motores de gasolina y diésel. El primer grupo se compone de dos propulsores Skyactiv-G que entregan respectivamente 165 y 194 caballos de potencia. El segundo bloque lo integran dos motores que erogan 150 y 184 caballos de potencia respectivamente. Las versiones más potentes están asociadas a tracción integral i-ACTIV AWD y depende de la versión estará disponible cambios manual de seis velocidades o una transmisión automática con el mismo número de relaciones.

        Las versiones gasolina con cambio automático contarán con un selector de modos de conducción que recibe el nombre de Mazda Intelligent Drive (Mi-Drive), además, las versiones con tracción total i-Activ AWD contarán con el modo Off-Road para terrenos más complicados fuera de ciudad.      
      </p>
    </div>
    <h2 class="text-2xl font-bold mx-auto mt-10 mr-4 mb-6">Configura ya tu Mazda CX5!</h2>

    
    <RouterLink 
    :to=" 'agregar-pedido' "
    class="text-indigo-600 hover:text-indigo-900 mr-5"
    >Configurar Coche</RouterLink>
    </div>




</template>
  
  <style scoped>
  /* No necesitas agregar estilos aquí para Tailwind CSS */
  </style>
  