<template>
    <div>
      <!-- Campo de Búsqueda -->
      <input type="text" v-model="criterioBusqueda" placeholder="Buscar pedidos..." class="input-class" />
  
      <!-- Lista de Pedidos -->
      <table class="table-class">
        <thead>
          <!-- Encabezados de la tabla aquí -->
        </thead>
        <tbody>
          <BusquedaPedido
            v-for="pedido in pedidosFiltrados"
            :key="pedido.orderId"
            :pedido="pedido"
            @actualizar-estado="actualizarEstado"
            @eliminar-pedido="eliminarPedido"
          />
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import BusquedaPedido from '../components/BusquedaPedidos.vue';
  import PedidoService from '../services/PedidoService';
  
  const pedidos = ref([]);
  const criterioBusqueda = ref('');
  
  onMounted(async () => {
    try {
      const response = await PedidoService.getOrders();
      pedidos.value = response.data;
    } catch (error) {
      console.error('Error al cargar pedidos:', error);
    }
  });
  
  const pedidosFiltrados = computed(() => {
    return pedidos.value.filter(pedido => 
      pedido.customer.name.includes(criterioBusqueda.value) ||
      pedido.customer.lastName.includes(criterioBusqueda.value)
      // Agrega más condiciones según sea necesario
    );
  });
  
  const actualizarEstado = (pedido) => {
    // Lógica para actualizar el estado del pedido
  };
  
  const eliminarPedido = (orderId) => {
    // Lógica para eliminar un pedido
  };
  </script>
  