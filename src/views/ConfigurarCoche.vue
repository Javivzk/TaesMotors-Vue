<template>
    <div>
      <h1>Configura tu coche</h1>
      <form @submit.prevent="submitForm">
        <div>
          <label for="color">Color:</label>
          <input id="color" v-model="car.color" type="text">
        </div>
        <div>
          <label for="motor">Motor:</label>
          <input id="motor" v-model="car.motor" type="text">
        </div>
        <!-- Añade más campos de entrada para otras opciones aquí -->
        <button type="submit">Guardar configuración</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        car: {
          color: '',
          motor: '',
          // Añade más propiedades para otras opciones aquí
        },
      };
    },
    methods: {
      submitForm() {
        // Aquí puedes manejar la lógica de envío del formulario
        console.log(this.car);
      },
    },
  };
  </script>