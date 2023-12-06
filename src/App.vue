<script setup>
    import { RouterView } from 'vue-router'
    import Header from './components/UI/Header.vue'
    import Modal from './components/Modal.vue';
</script>

<template>
    <Header />

    <main class="container mx-auto mt-10">
        <RouterView />
    </main>

    <Modal />

</template>

