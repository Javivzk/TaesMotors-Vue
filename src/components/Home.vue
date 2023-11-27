<template>
    <div>
      <h1>Elige un modelo de coche:</h1>
      <ul>
        <li v-for="car in cars" :key="car.id">
          <router-link :to="{ name: 'Car', params: { id: car.id } }">{{ car.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import config from '@/config'
  
  export default {
    name: 'Home',
    data () {
      return {
        cars: []
      }
    },
    mounted () {
      axios.get(`${config.apiUrl}/cars`)
        .then(response => {
          this.cars = response.data
        })
    }
  }
  </script>
  