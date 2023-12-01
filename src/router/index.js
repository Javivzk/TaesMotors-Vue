import { createRouter, createWebHistory } from 'vue-router'
import listadoClientes from '../views/ClientesView.vue'
import listadoPedidos from '../views/PedidosView.vue'
import listadoCoches from '../views/CochesView.vue'
import listadoEmpleados from '../views/EmpleadosView.vue'
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
      path: '/buscar-clientes',
      name: 'buscar-clientes',
      component: import('../views/BuscarClientesView.vue'),
      props: { titulo: 'Busqueda de clientes'}
    },
    {
      path: '/listado-clientes',
      name: 'listado-clientes',
      component: import('../views/ClientesView.vue'),
      props: { titulo: 'Listado de Clientes' }
    },
    {
      path: '/listado-empleados',
      name: 'listado-empleados',
      component: import('../views/EmpleadosView.vue'),
      props: { titulo: 'Listado de Empleados' }
    },
    {
      path: '/listado-coches',
      name: 'listado-coches',
      component: import('../views/CochesView.vue'),
      props: { titulo: 'Listado de Coches' }
    },
    {
      path: '/listado-pedidos',
      name: 'listado-pedidos',
      component: import('../views/PedidosView.vue'),
      props: { titulo: 'Listado de Pedidos' }
    },
    {
      path: '/agregar-cliente',
      name: 'agregar-cliente',
      component: () => import('../views/NuevoClienteView.vue'),
      props: { titulo: 'Agregar Clientes' }
    },
    {
      path: '/editar-cliente/:customerId',
      name: 'editar-cliente',
      component: () => import('../views/EditarClienteView.vue'),
      props: { titulo: 'Editar Cliente' }
    },
    {
      path: '/agregar-empleado',
      name: 'agregar-empleado',
      component: () => import('../views/NuevoEmpleadoView.vue'),
      props: { titulo: 'Agregar Empleados' }
    },
    {
      path: '/editar-empleado/:employeeId',
      name: 'editar-empleado',
      component: () => import('../views/EditarEmpleadoView.vue'),
      props: { titulo: 'Editar Empleado' }
    },
    {
      path: '/agregar-coche',
      name: 'agregar-coche',
      component: () => import('../views/NuevoCocheView.vue'),
      props: { titulo: 'Agregar Coches' }
    },
    {
      path: '/editar-coche/:carId',
      name: 'editar-coche',
      component: () => import('../views/EditarCocheView.vue'),
      props: { titulo: 'Editar Coche' }
    },
    {
      path: '/agregar-pedido',
      name: 'agregar-pedido',
      component: () => import('../views/NuevoPedidoView.vue'),
      props: { titulo: 'Agregar Pedido' }
    },
    {
      path: '/editar-pedido/:orderId',
      name: 'editar-pedido',
      component: () => import('../views/EditarPedidoView.vue'),
      props: { titulo: 'Editar Pedido' }
    },
  ]
})

export default router
