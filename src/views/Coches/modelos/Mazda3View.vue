<script setup>
    import RouterLink from '../../../components/UI/RouterLink.vue';


</script>


<template>
  <div class="container mx-auto mt-10 mb-6 text-center">
    <h1 class="text-4xl font-bold mb-6">MAZDA 3</h1>
    <div class="container mx-auto mt-10 text-center">
      <img class="w-full hover:opacity-75 transition-opacity duration-200" src="src\assets\images\mazda\3\mazda3-2024.jpg" alt="Seat Arona">
      
      <h2 class="text-3xl font-bold mt-10 mb-6">Elegancia y potencia combinadas</h2>
      
      <img class="w-full hover:opacity-75 transition-opacity duration-200" src="src\assets\images\mazda\3\mazda3-2024-interior.jpg" alt="leonInterior">
      
      <h2 class="text-3xl font-bold mt-10 mb-6">Interior del Mazda 3</h2>
      <p class="text-xl mb-6">
        El cambio en el interior del Mazda 3 2019 es más considerable. Ahora se percibe una mayor sensación de calidad en los materiales empleados para revestir el salpicadero y las puertas. El salpicadero presenta unas formas más horizontales, con la pantalla de 8,8 pulgadas del sistema multimedia mejor integrada y una reordenación de los botones físicos para el ajuste del climatizador. El cuadro de instrumentos incluye ahora una pantalla central de 7 pulgadas, que proyecta la información del vehículo.

        En general, la sensación es la de estar en un coche premium, que es el sector en el que se quiere ubicar la marca japonesa con este nuevo producto y plantarle cara al BMW Serie 1, Audi A3 y Mercedes-Benz Clase A.      </p>
      
      <h2 class="text-3xl font-bold mx-auto mt-10 mr-4 mb-6">Exterior del Mazda 3</h2>
      <p class="text-xl mb-6">
        Con la anterior generación, Mazda dio un importante paso hacia adelante con la introducción del nuevo leguaje de diseño KODO. Ahora, el nuevo Mazda 3 2019 estrena una evolución de este concepto, inspirado en el Mazda Kai Concept presentado hace un año. Predominan las líneas suaves y armoniosas, superficies planas, únicamente interrumpidas por los nervios del capó. Un capó, a su vez, alargado y ancho. Luce una parrilla ancha y en una posición más baja que el anterior modelo, en la que se incrustan los faros más rasgados, que le proporcionan una mirada agresiva.

        La zaga cambia más, con una forma más voluminosa y redondeada, superficies curvas que acentúan la deportividad del compacto de Mazda. Presenta unos pilotos horizontales integrados en el inclinado portón trasero. También es nuevo el difusor, con salida de escape a cada lado.      </p>
     

      <img class="w-full hover:opacity-75 transition-opacity duration-200" src="src\assets\images\mazda\3\mazda3-2024-zaga.jpg" alt="leonInterior">

      <h2 class="text-3xl font-bold mx-auto mt-10 mr-4 mb-6">Equipamiento del Mazda3 2024</h2>
      <p class="text-xl mb-6">
        El Mazda3 2024 está disponible con los acabados Prime-Line, Homura y Exclusive-Line. De serie cuenta con llantas de aleación de 16 pulgadas, faros delanteros LED con nivelación automática y luces diurnas, función Coming & Leaving Home, sistema de control de luces de largo alcance, asistente de arranque en cuesta, espejos retrovisores exteriores ajustables y plegables eléctricamente y calefactables, sensores traseros de aparcamiento y múltiples airbags (frontales, laterales, de cortina y de rodilla).

        Cuenta también con cámara de visión posterior, control de ángulo muerto, detector de tráfico trasero, control de crucero y limitador de velocidad, alerta de distancia y velocidad, sistema de llamada de emergencia e-Call, sistema de aviso y prevención de cambio involuntario de carril, control de crucero adaptativo, sistema de info-entretenimiento Mazda Connect con pantalla de 10,25 pulgadas, sistema de navegación Mazda, Head-Up Display, compatibilidad con Apple CarPlay y Android Auto, Bluetooth y Radio digital DAB.
        
        También ofrece aire acondicionado, cierre centralizado con mando a distancia, reposabrazos central delantero, freno de estacionamiento eléctrico con función Auto-Hold, sistema de arranque sin llave, sensor de humedad, elevalunas eléctricos, volante multifunción revestido de cuero, tapicería de tela negra y asientos delanteros ajustables en altura.
        
        El acabado Homura añade llantas de aleación de 18 pulgadas, tapicería de tela negra con costuras rojas, climatizador automático bizona, espejo retrovisor interior con función antideslumbramiento automático, cristales traseros con tratamiento de privacidad, sensores delanteros de aparcamiento, sistema de acceso y arranque sin llave, sensor de lluvia, cargador inalámbrico para teléfonos móviles compatibles y asientos delanteros calefactables.
        
        El tope de gama (Exclusive-Line) completa la oferta con espejos retrovisores exteriores ajustables y plegables eléctricamente, calefactables y con oscurecimiento automático en el lado del conductor y llantas de aleación de 18 pulgadas Grey Metallic. </p>
      <h2 class="text-3xl font-bold mx-auto mt-10 mr-4 mb-6">Motores del Mazda3 2024</h2>
      <p class="text-xl mb-6">
        A nivel mecánico el Mazda3 2024 cuenta con motores gasolina con tecnología de hibridación ligera (MHEV) que reciben la etiqueta ECO de la DGT. La versión de acceso incluye un motor 2.0 e-Skyactiv G de 122 CV. Por encima se ubica el motor 2.0 e-Skyactiv G de 150 CV y el motor 2.0 e-Skyactiv X de 186 CV. Estas tres opciones se asocian a una caja de cambios manual o una transmisión automática de seis velocidades. De serie incluye tracción delantera, y, opcionalmente, y la versión e-Skyactiv X de 186 CV con carrocería Hatchback puede configurarse con tracción 4×4.
      </p>
    </div>
    <h2 class="text-2xl font-bold mx-auto mt-10 mr-4 mb-6">Configura ya tu Mazda 3!</h2>

    
    <RouterLink 
    :to=" 'agregar-pedido' "
    class="text-indigo-600 hover:text-indigo-900 mr-5"
    >Configurar Coche</RouterLink>
    </div>




</template>
  
  <style scoped>
  /* No necesitas agregar estilos aquí para Tailwind CSS */
  </style>
  