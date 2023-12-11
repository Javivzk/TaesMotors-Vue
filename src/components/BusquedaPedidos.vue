<template>
    <div class="p-4 border border-gray-200 rounded shadow">
      <div class="flex space-x-4">
        <img :src="pedido.car.image" alt="Car Image" class="w-32 h-20 object-cover rounded">
        <div class="flex-grow">
          <h3 class="text-lg font-semibold">{{ pedido.customer.name }} {{ pedido.customer.lastName }}</h3>
          <div class="mt-2 text-sm">
            <p>Order ID: <span class="font-medium">{{ pedido.orderId }}</span></p>
            <p>Car: <span class="font-medium">{{ pedido.car.brand }} {{ pedido.car.model }}</span></p>
            <p>Year: <span class="font-medium">{{ pedido.car.year }}</span></p>
            <p>Color: <span class="font-medium">{{ pedido.car.color }}</span></p>
            <p>Total Price: <span class="font-medium">{{ pedido.totalPrice }}</span></p>
            <p>Status: <span :class="pedido.paid ? 'text-green-500' : 'text-red-500'">{{ pedido.paid ? 'Paid' : 'Unpaid' }}</span></p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      pedido: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  