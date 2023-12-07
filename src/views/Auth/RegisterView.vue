<script setup>

    const handleSubmit = async ({password_confirm, ...data}) => {
        console.log(data)
    }
     
</script>


<template>
    <h1 class="text-6xl font-extrabold text-black text-center mt-10">Crea una cuenta</h1>
    <p class="text-2xl text-black text-center my-5">Crea una cuenta en TaesMotors</p>

    <FormKit
        type="form"
        :actions="false"
        incomplete-message="Por favor, rellena todos los campos"
    
    >
        <FormKit
        type="text"
        label="Nombre"
        placeholder="Nombre"
        name="name"
        validation="required|length:3"
        :validation-messages="{
            required: 'El nombre es obligatorio',
            length: 'El nombre debe tener al menos 3 caracteres'
        }"
        />

        <FormKit
        type="text"
        label="Email"
        placeholder="Email de Registro"
        name="email"
        validation="required|email"
        :validation-messages="{
            required: 'El email es obligatorio',
            length: 'El email no es válido'
        }"
        />

        <FormKit
        type="password"
        label="Password"
        placeholder="Password de Usuario - Min 8 caracteres"
        name="password"
        validation="required|length:8"
        :validation-messages="{
            required: 'El password es obligatorio',
            length: 'El password debe contener al menos 8 caracteres'
        }"
        />

        <FormKit
        type="password"
        label="Repetir Password"
        placeholder="Repite el password"
        name="password_confirm"
        validation="required|confirm"
        :validation-messages="{
            required: 'El password es obligatorio',
            confirm: 'Los passwords no coinciden'
        }"
        />
        

        <FormKit type="submit">Crear Cuenta</FormKit>

    </FormKit>
</template>
