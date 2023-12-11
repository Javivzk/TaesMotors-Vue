<script setup>
    import RouterLink from '../../../components/UI/RouterLink.vue';


</script>


<template>
  <div class="container mx-auto mt-10 mb-6 text-center">
    <h1 class="text-4xl font-bold mb-6">MAZDA MX5</h1>
    <div class="container mx-auto mt-10 text-center">
      <img class="w-full hover:opacity-75 transition-opacity duration-200" src="src\assets\images\mazda\mx5\mazda-mx5.jpg" alt="Seat Arona">
      
      <h2 class="text-3xl font-bold mt-10 mb-6">Elegancia y potencia combinadas</h2>
      
      <img class="w-full hover:opacity-75 transition-opacity duration-200" src="src\assets\images\mazda\mx5\mazda-mx5-interior.jpg" alt="Seat Arona">
      
      <h2 class="text-3xl font-bold mt-10 mb-6">Interior del Mazda MX5</h2>
      <p class="text-xl mb-6">
        El interior del MX-5 realza la idea de Colin Chapman (fundador de la marca Lotus) de que un buen coche deportivo ha de ser ligero: el Mazda busca sobre todo la ligereza en sus elementos y huye de lujos innecesarios o materiales que puedan entorpecer el coche. Es, por tanto, una fórmula distinta a la que ha seguido Fiat con el nuevo 124.

        El navegador es opcional (se encuentra en la pantalla táctil que se sitúa por encima de la consola central, a la altura del cuadro de mandos) y no viene en el modelo más básico, pero funciona de una manera muy intuitiva y todo, en general, está construido de manera que se encuentra en el lugar idóneo, todo donde debería estar. En definitiva, el MX-5 2018 está bastante mejor conseguido que sus generaciones anteriores, siendo más cómodo de utilizar antes de ponerse a conducir como tal. 
        En el apartado multimedia, el cuadro de mandos tendrá una de las esferas con pantalla TFT con la información sobre la conducción. La seguridad también se verá mejorada con asistente de mantenimiento de carril, cámara trasera, frenada inteligente, reconocimiento de señales y por primera vez, volante ajustable.      </p>
      
      <h2 class="text-3xl font-bold mx-auto mt-10 mr-4 mb-6">Exterior del MAZDA MX5</h2>
      <p class="text-xl mb-6">
        Con la llegada de su cuarta generación el MX-5 ha afilado sus dientes, sus faros y sus formas: sus pilotos delanteros son pequeños y agresivos, más delgados que en su segunda y tercera generación (y por supuesto más que los faros escamoteables de la primera generación). La filosofía de diseño Kodo es muy evidente en las trazas del MX-5 descapotable, con líneas onduladas que cruzan el largo y ancho del coche para dar lugar a un diseño único en un coche que ya de por sí es único.      </p>
     
     <h2 class="text-3xl font-bold mx-auto mt-10 mr-4 mb-6">Maletero del MAZDA MX5</h2>
     <p class="text-xl mb-6">
      Siendo un deportivo con unas dimensiones tan reducidas y contenidas para ser un conjunto ligero, es lógico esperar un espacio de maletero reducido: en concreto son 130 litros. Salvo el Alfa Romeo 4C, todos sus rivales cuentan con un maletero de mayor tamaño, algo lógico dado que se trata de vehículos de mayor tamaño. Lo que sí sorprende del maletero de este MX-5 es que es más profundo de lo que parece a simple vista.       </p>

      <img class="w-full hover:opacity-75 transition-opacity duration-200" src="src\assets\images\mazda\mx5\mazda-mx5-2023.jpg" alt="Seat Arona">

      <h2 class="text-3xl font-bold mx-auto mt-10 mr-4 mb-6">Equipamiento del Mazda MX-5 2023</h2>
      <p class="text-xl mb-6">
        El Mazda MX-5 2023 está disponible con los acabados Prime-Line, Exclusive-Line, Kazari, Kizuna y Homura. De serie cuenta con llantas de aleación de 16 pulgadas, faros Full LED, luces LED para la conducción diurna, espejos retrovisores exteriores ajustables eléctricamente y calefactables, sistema MZD Connect con pantalla táctil de 7 pulgadas, compatibilidad con Android Auto y Apple CarPlay, Radio digital, HMI Commander y dos conexiones USB.

        También ofrece conexión Aux-in, Bluetooth, aire acondicionado, sistema de arranque sin llave, cierre centralizado con mando a distancia, elevalunas eléctricos, volante multifunción forrado en cuero ajustable en altura y en profundidad, palanca y freno de mano revestido en cuero, múltiples airbags (frontales y laterales), control de crucero con limitador de velocidad, control de estabilidad con control de tracción, control cinemático de posición, sensor de presión de los neumáticos y tapicería de tela negra.
        
        El acabado Exclusive-Line añade sistema de navegación, equipo de sonido BOSE, sistema de acceso y arranque sin llave, cámara de visión posterior, encendido automático de luces y sensor de lluvia, sensores traseros de aparcamiento, asientos calefactables, climatizador automático, espejo retrovisor interior con función antideslumbramiento, control de ángulo muerto avanzado y detector de tráfico trasero, alerta de cambio involuntario de carril y tapicería de cuero negro.
        
        Por su parte, el acabado Kazari añade faros Smart Full LED adaptativos, reconocimiento de señales de tráfico, reconocimiento de peatones y sistema de asistencia a la frenada en ciudad delantero y trasero. El acabado Kizuna añade capota de lona en color azul y tapicería de cuero perforado en color blanco. Finalmente, el tope de gama, Homura, completa la oferta de equipamiento con asientos Recaro, suspensión deportiva Bilstein, barra antitorsión y pinzas de freno Brembo y capota de lona negra.      </p>
    
      <h2 class="text-3xl font-bold mx-auto mt-10 mr-4 mb-6">Motores del Mazda MX-5 2023</h2>
      <p class="text-xl mb-6">
        A nivel mecánico el Mazda MX-5 2023 está disponible con un motor de 1.5 litros Skyactiv-G que entrega 132 caballos de potencia y par máximo de 152 Nm. Se asocia a una caja de cambios manual de seis velocidades y un sistema de tracción trasera. Un escalón por encima se encuentra un motor de 2.0 litros Skyactiv-G de 184 CV y 205 Nm de par máximo que se asocia a cambio manual o automático, de seis relaciones y con tracción trasera en ambos casos.
      </p>
    </div>
    <h2 class="text-2xl font-bold mx-auto mt-10 mr-4 mb-6">Configura ya tu Mazda MX5!</h2>

    
    <RouterLink 
    :to=" 'agregar-pedido' "
    class="text-indigo-600 hover:text-indigo-900 mr-5"
    >Configurar Coche</RouterLink>
    </div>




</template>
  
  <style scoped>
  /* No necesitas agregar estilos aquí para Tailwind CSS */
  </style>
  