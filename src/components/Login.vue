<template>
    <div>
      <h2>Login</h2>
      <form class="mx-auto" style="max-width: 25rem;">
        <h1 class="mb-5 text-center" >Inicio de Sesion</h1>
        <div class="mb-3">
            <label for="email">Email</label>
            <input id="email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <div class="mb-3">
            <label for="password">Password</label>
            <input id="password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <div class="mb-3">
            <button class="w-full px-3 py-2 text-white bg-indigo-500 rounded-md">Login</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Aquí puedes implementar la lógica para enviar los datos de inicio de sesión al servidor.
        console.log('Username:', this.username);
        console.log('Password:', this.password);
        
        // Aquí puedes realizar una solicitud HTTP para autenticar al usuario con el servidor.
        // Por ejemplo, puedes usar Axios o el método fetch.
      },
    },
  };
  </script>
  