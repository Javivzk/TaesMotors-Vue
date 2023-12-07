import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: InicioView,
      props: { titulo: 'Index CRM' }
    },
    {
      path: '/leon',
      name: 'leon',
      component: () => import('../views/Coches/Modelos/LeonView.vue'),
      props: { titulo: 'Seat Leon' }
    },
    {
      path: '/ibiza',
      name: 'ibiza',
      component: () => import('../views/Coches/Modelos/IbizaView.vue'),
      props: { titulo: 'Seat Ibiza' }
    },
    {
      path: '/arona',
      name: 'arona',
      component: () => import('../views/Coches/Modelos/AronaView.vue'),
      props: { titulo: 'Seat Arona' }
    },
    {
      path: '/busqueda',
      name: 'busqueda',
      component: () => import('../views/BusquedaView.vue'),
      props: { titulo: 'Busqueda' }
    },
    {
      path: '/listado-clientes',
      name: 'listado-clientes',
      component: () =>import('../views/Clientes/ClientesView.vue'),
      props: { titulo: 'Listado de Clientes' }
    },
    {
      path: '/listado-empleados',
      name: 'listado-empleados',
      component: () => import('../views/Empleados/EmpleadosView.vue'),
      props: { titulo: 'Listado de Empleados' }
    },
    {
      path: '/listado-coches',
      name: 'listado-coches',
      component:() => import('../views/Coches/CochesView.vue'),
      props: { titulo: 'Listado de Coches' }
    },
    {
      path: '/listado-pedidos',
      name: 'listado-pedidos',
      component:() => import('../views/Pedidos/PedidosView.vue'),
      props: { titulo: 'Listado de Pedidos' }
    },
    {
      path: '/listado-extras',
      name: 'listado-extras',
      component:() => import('../views/Extras/ExtrasView.vue'),
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
    {
      path: '/auth',
      name: 'login',
      component: () => import('../views/Auth/AuthLayout.vue'),
      props: { titulo: 'Editar Extra' },
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('../views/Auth/LoginView.vue'),
          props: { titulo: 'Login' }
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('../views/Auth/RegisterView.vue'),
          props: { titulo: 'Register' }
        },
      ]
    },
  ]
})

export default router