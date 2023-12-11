import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: InicioView,
      props: { titulo: 'Index CRM' },
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/leon',
      name: 'leon',
      component: () => import('../views/Coches/Modelos/LeonView.vue'),
      props: { titulo: 'Seat Leon' },
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/ibiza',
      name: 'ibiza',
      component: () => import('../views/Coches/Modelos/IbizaView.vue'),
      props: { titulo: 'Seat Ibiza' },
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/arona',
      name: 'arona',
      component: () => import('../views/Coches/Modelos/AronaView.vue'),
      props: { titulo: 'Seat Arona' },
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/mazda3',
      name: 'mazda3',
      component: () => import('../views/Coches/Modelos/Mazda3View.vue'),
      props: { titulo: 'Mazda 3' },
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/mazdacx5',
      name: 'mazdacx5',
      component: () => import('../views/Coches/Modelos/Mazdacx5View.vue'),
      props: { titulo: 'Mazda CX5' },
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/mazdamx5',
      name: 'mazdamx5',
      component: () => import('../views/Coches/Modelos/Mazdamx5View.vue'),
      props: { titulo: 'Mazda MX5' },
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/busqueda',
      name: 'busqueda',
      component: () => import('../views/BusquedaView.vue'),
      props: { titulo: 'Busqueda' },
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/busqueda-pedidos',
      name: 'busqueda-pedidos',
      component: () => import('../views/BusquedaPedidosView.vue'),
      props: { titulo: 'Busqueda' },
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/listado-clientes',
      name: 'listado-clientes',
      component: () =>import('../views/Clientes/ClientesView.vue'),
      props: { titulo: 'Listado de Clientes' },
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/listado-empleados',
      name: 'listado-empleados',
      component: () => import('../views/Empleados/EmpleadosView.vue'),
      props: { titulo: 'Listado de Empleados' },
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/listado-coches',
      name: 'listado-coches',
      component:() => import('../views/Coches/CochesView.vue'),
      props: { titulo: 'Listado de Coches' },
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/listado-pedidos',
      name: 'listado-pedidos',
      component:() => import('../views/Pedidos/PedidosView.vue'),
      props: { titulo: 'Listado de Pedidos' },
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/listado-extras',
      name: 'listado-extras',
      component:() => import('../views/Extras/ExtrasView.vue'),
      props: { titulo: 'Listado de extras' },
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/listado-usuarios',
      name: 'listado-usuarios',
      component:() => import('../views/Usuarios/UsuariosView.vue'),
      props: { titulo: 'Listado de Usuarios' },
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/agregar-cliente',
      name: 'agregar-cliente',
      component: () => import('../views/Clientes/NuevoClienteView.vue'),
      props: { titulo: 'Agregar Clientes' },
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/editar-cliente/:customerId',
      name: 'editar-cliente',
      component: () => import('../views/Clientes/EditarClienteView.vue'),
      props: { titulo: 'Editar Cliente' },
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/agregar-empleado',
      name: 'agregar-empleado',
      component: () => import('../views/Empleados/NuevoEmpleadoView.vue'),
      props: { titulo: 'Agregar Empleados' },
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/editar-empleado/:employeeId',
      name: 'editar-empleado',
      component: () => import('../views/Empleados/EditarEmpleadoView.vue'),
      props: { titulo: 'Editar Empleado' },
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/agregar-coche',
      name: 'agregar-coche',
      component: () => import('../views/Coches/NuevoCocheView.vue'),
      props: { titulo: 'Agregar Coches' },
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/editar-coche/:carId',
      name: 'editar-coche',
      component: () => import('../views/Coches/EditarCocheView.vue'),
      props: { titulo: 'Editar Coche' },
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/agregar-pedido',
      name: 'agregar-pedido',
      component: () => import('../views/Pedidos/NuevoPedidoView.vue'),
      props: { titulo: 'Agregar Pedido' },
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/editar-pedido/:orderId',
      name: 'editar-pedido',
      component: () => import('../views/Pedidos/EditarPedidoView.vue'),
      props: { titulo: 'Editar Pedido' },
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/agregar-extra',
      name: 'agregar-extra',
      component: () => import('../views/Extras/NuevoExtraView.vue'),
      props: { titulo: 'Agregar Extra' },
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/editar-extra/:extraId',
      name: 'editar-extra',
      component: () => import('../views/Extras/EditarExtraView.vue'),
      props: { titulo: 'Editar Extra' },
      meta: {
        requiresAuth: true,
      },
    },
      {
        path: '/editar-usuario/:userId',
        name: 'editar-usuario',
        component: () => import('../views/Usuarios/EditarUsuarioView.vue'),
        props: { titulo: 'Editar Usuario' },
        meta: {
          requiresAuth: true,
        },
    },
  
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = localStorage.getItem('userToken');

  if (!requiresAuth) {
    next(); // No requiere autenticación, continúa con la navegación
  } else if (requiresAuth && isAuthenticated) {
    next(); // La ruta requiere autenticación y el usuario está autenticado, continúa con la navegación
  } else {
    console.log('Redirigiendo a /login');
    next('/login'); // Redirige al usuario al login
  }
});

export default router