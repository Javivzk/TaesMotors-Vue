<script setup>
    import RouterLink from '../../../components/UI/RouterLink.vue';


</script>


<template>
  <div class="container mx-auto mt-10 mb-6 text-center">
    <h1 class="text-4xl font-bold mb-6">SEAT LEON</h1>
    <div class="container mx-auto mt-10 text-center">
      <img class="w-full hover:opacity-75 transition-opacity duration-200" src="src\assets\images\seat\leon\seat-leon-3.jpg" alt="Seat Leon">
      
      <h2 class="text-3xl font-bold mt-10 mb-6">Elegancia y potencia combinadas</h2>
      
      <img class="w-full hover:opacity-75 transition-opacity duration-200" src="src\assets\images\seat\leon\seat-leon-interior.jpg" alt="leonInterior">
      
      <h2 class="text-3xl font-bold mt-10 mb-6">Interior del SEAT León</h2>
      <p class="text-xl mb-6">
        En el interior el cambio comparado con la anterior generación es bastante grande, en la línea de lo que Volkswagen está lanzando ahora mismo.
         Destaca la pantalla de infoentretenimiento de hasta 10 pulgadas compatible con Apple CarPlay y Android Auto que se complementa con un cuadro de instrumentos digital de 10,25 pulgadas.
          Destaca la iluminación ambiental que es novedad y que le aporta un toque premium y la calidad percibida del habitáculo ha mejorado.
      </p>
      
      <h2 class="text-3xl font-bold mx-auto mt-10 mr-4 mb-6">Espacio para pasajeros del SEAT León</h2>
      <p class="text-xl mb-6">
        El nuevo SEAT León crece en dimensiones y eso permite mejorar la habitabilidad con respecto a la generación anterior.
         En él pueden viajar cuatro adultos de forma cómoda y en la segunda fila de asientos destaca la buena altura libre al techo.
         Las plazas traseras están equipadas con aireadores de la climatización y en las versiones más avanzadas puede incluir dos tomas USB de tipo C y reguladores de la temperatura del aire. 
      </p>
     
     <h2 class="text-3xl font-bold mx-auto mt-10 mr-4 mb-6">Maletero del SEAT León</h2>
     <p class="text-xl mb-6">
      En la versión de cinco plazas el SEAT León incluye un maletero de 380 litros de capacidad que esta en la media del segmento.
      Si abatimos la segunda fila de asientos pasamos a 1.301 litros y ofrece una boca de carga ancha pero un piso con una altura pronunciada que puede dificultar la carga de objetos.
      La versión híbrida enchufable (e-Hybrid), ofrece 300 litros debido a la batería que incluye. 
      </p>

      <img class="w-full hover:opacity-75 transition-opacity duration-200" src="src\assets\images\seat\leon\seat-leon-1.jpg" alt="leonInterior">

      <h2 class="text-3xl font-bold mx-auto mt-10 mr-4 mb-6">Equipamiento SEAT León</h2>
      <p class="text-xl mb-6">
        El SEAT León estrena equipamiento que está estructurado en los acabados Style y FR. Adicionalmente cuenta con paquetes que amplían la oferta y 
        que se muestran más abajo (Style XS, Style XM, Style XL, FR XS, FR XM y , FR XL y FR XXL). 
        También cuenta con dos ediciones especiales, Style Special Edition y FR Special Edition.
      </p>
      <h2 class="text-2xl font-bold mx-auto mt-10 mr-4 mb-6">Style</h2>
      <p class="text-xl mb-6">
        De serie cuenta con faros EcoLED, asistente de salida involuntaria de carril, asistente de frenada automática de emergencia con detección de peatones y ciclistas,
         control de velocidad de crucero y limitador de velocidad, sistema de llamada de emergencia e-Call, detector de fatiga, múltiples airbags (frontales, laterales, de cortina y central delantero), 
         sistema Full Link inalámbrico para Android Auto y Apple CarPlay, cargador inalámbrico para teléfonos móviles compatibles,
        sistema de info-entretenimiento con pantalla táctil de 8,25 pulgadas, sistema SEAT Connect, volante multifunción deportivo forrado en cuero y climatizador.
      </p>
      <h2 class="text-2xl font-bold mx-auto mt-10 mr-4 mb-6">FR</h2>
      <p class="text-xl mb-6">
        El acabado FR añade faros Full LED, pilotos traseros LED, control de crucero, faros antiniebla con función Cornering, Full Link inalámbrico con Apple CarPlay y Android Auto,
        llantas de aleación de 15 pulgadas, colante multifunción y pomo de la palanca de cambios forrados en cuero.
     </p>
     <p class="text-xl mb-6">
      Incluye también radio digital DAB, climatizador automático, sistema de arranque sin llave, cierre centralizado con mando a distancia, freno de mano eléctrico, elevalunas eléctricos, sistema de iluminación ambiental LED, volante multifunción deportivo con levas de cambio y ajustable en altura y en profundidad, asientos delanteros ajustables en altura, bolsas portaobjetos en respaldos de asientos delanteros, espacio de almacenamiento bajo asiento del conductor, control de crucero y limitador de velocidad y sensores traseros de aparcamiento.
    </p>

      <h2 class="text-2xl font-bold mx-auto mt-10 mr-4 mb-6">Style Special Edition</h2>
      <p class="text-xl mb-6">
      Cuenta con cristales traseros oscurecidos, cargador inalámbrico en consola central, cuadro de mandos Digital Cockpit de 10,25′ pulgadas, llantas de aleación de (17 pulgadas, climatizador de tres zonas y asistente de aparcamiento automático Park Assist.
      </p>

      <h2 class="text-2xl font-bold mx-auto mt-10 mr-4 mb-6">FR Special Edition</h2>
      <p class="text-xl mb-6">
        Cuenta con detector de ángulo muerto, faros Full LED, cámara de visión trasera, sistema de apertura sin llave KESSY, parachoques específico FR, sistema de navegación con pantalla de 10 pulgadas.        
      </p>

    </div>
    <h2 class="text-2xl font-bold mx-auto mt-10 mr-4 mb-6">Configura ya tu Seat Leon!</h2>

    
    <RouterLink 
    :to=" 'agregar-pedido' "
    class="text-indigo-600 hover:text-indigo-900 mr-5"
    >Configurar Coche</RouterLink>
    </div>




</template>
  
  <style scoped>
  /* No necesitas agregar estilos aquí para Tailwind CSS */
  </style>
  