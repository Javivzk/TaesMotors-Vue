<template>
    <div>
      <h1>{{ car.name }}</h1>
      <p>{{ car.description }}</p>
      <h2>Configuración:</h2>
      <ul>
        <li v-for="option in options" :key="option.id">
          {{ option.name }}: {{ option.value }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import config from '@/config'
  
  export default {
    name: 'Car',
    data () {
      return {
        car: {},
        options: []
      }
    },
    mounted () {
      axios.get(`${config.apiUrl}/cars/${this.$route.params.id}`)
        .then(response => {
          this.car = response.data
          this.options = this.car.options
        })
    }
  }
  </script>
  