import { createRouter, createWebHistory } from 'vue-router'
import listadoClientes from '../views/Clientes/ClientesView.vue'
import listadoPedidos from '../views/Pedidos/PedidosView.vue'
import listadoCoches from '../views/Coches/CochesView.vue'
import listadoEmpleados from '../views/Empleados/EmpleadosView.vue'
import leon from '../views/Coches/Modelos/LeonView.vue'
import Inicio from '../views/Inicio.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio,
      props: { titulo: 'Index CRM' }
    },
    {
      path: '/leon',
      name: 'leon',
      component: () => import('../views/Coches/Modelos/LeonView.vue'),
      props: { titulo: 'Index CRM' }
    },
    {
      path: '/ibiza',
      name: 'ibiza',
      component: () => import('../views/Coches/Modelos/IbizaView.vue'),
      props: { titulo: 'Index CRM' }
    },
    {
      path: '/arona',
      name: 'arona',
      component: () => import('../views/Coches/Modelos/AronaView.vue'),
      props: { titulo: 'Index CRM' }
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      component: () => import('../views/FavoritosView.vue'),
      props: { titulo: 'Index CRM' }
    },
    {
      path: '/busqueda',
      name: 'busqueda',
      component: () => import('../views/BusquedaView.vue'),
      props: { titulo: 'Index CRM' }
    },
    {
      path: '/buscar-clientes',
      name: 'buscar-clientes',
      component: import('../views/Clientes/BuscarClientesView.vue'),
      props: { titulo: 'Busqueda de clientes'}
    },
    {
      path: '/listado-clientes',
      name: 'listado-clientes',
      component: import('../views/Clientes/ClientesView.vue'),
      props: { titulo: 'Listado de Clientes' }
    },
    {
      path: '/listado-empleados',
      name: 'listado-empleados',
      component: import('../views/Empleados/EmpleadosView.vue'),
      props: { titulo: 'Listado de Empleados' }
    },
    {
      path: '/listado-coches',
      name: 'listado-coches',
      component: import('../views/Coches/CochesView.vue'),
      props: { titulo: 'Listado de Coches' }
    },
    {
      path: '/listado-pedidos',
      name: 'listado-pedidos',
      component: import('../views/Pedidos/PedidosView.vue'),
      props: { titulo: 'Listado de Pedidos' }
    },
    {
      path: '/listado-extras',
      name: 'listado-extras',
      component: import('../views/Extras/ExtrasView.vue'),
      props: { titulo: 'Listado de extras' }
    },
    {
      path: '/agregar-cliente',
      name: 'agregar-cliente',
      component: () => import('../views/Clientes/NuevoClienteView.vue'),
      props: { titulo: 'Agregar Clientes' }
    },
    {
      path: '/editar-cliente/:customerId',
      name: 'editar-cliente',
      component: () => import('../views/Clientes/EditarClienteView.vue'),
      props: { titulo: 'Editar Cliente' }
    },
    {
      path: '/agregar-empleado',
      name: 'agregar-empleado',
      component: () => import('../views/Empleados/NuevoEmpleadoView.vue'),
      props: { titulo: 'Agregar Empleados' }
    },
    {
      path: '/editar-empleado/:employeeId',
      name: 'editar-empleado',
      component: () => import('../views/Empleados/EditarEmpleadoView.vue'),
      props: { titulo: 'Editar Empleado' }
    },
    {
      path: '/agregar-coche',
      name: 'agregar-coche',
      component: () => import('../views/Coches/NuevoCocheView.vue'),
      props: { titulo: 'Agregar Coches' }
    },
    {
      path: '/editar-coche/:carId',
      name: 'editar-coche',
      component: () => import('../views/Coches/EditarCocheView.vue'),
      props: { titulo: 'Editar Coche' }
    },
    {
      path: '/agregar-pedido',
      name: 'agregar-pedido',
      component: () => import('../views/Pedidos/NuevoPedidoView.vue'),
      props: { titulo: 'Agregar Pedido' }
    },
    {
      path: '/editar-pedido/:orderId',
      name: 'editar-pedido',
      component: () => import('../views/Pedidos/EditarPedidoView.vue'),
      props: { titulo: 'Editar Pedido' }
    },
    {
      path: '/agregar-extra',
      name: 'agregar-extra',
      component: () => import('../views/Extras/NuevoExtraView.vue'),
      props: { titulo: 'Agregar Extra' }
    },
    {
      path: '/editar-extra/:extraId',
      name: 'editar-extra',
      component: () => import('../views/Extras/EditarExtraView.vue'),
      props: { titulo: 'Editar Extra' }
    },
  ]
})

export default router
