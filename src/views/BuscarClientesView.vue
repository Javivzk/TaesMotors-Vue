
<script setup>
    import { onMounted, ref, computed } from 'vue'
    import ClienteService from '../services/ClienteService';
    import RouterLink from '../components/UI/RouterLink.vue';
    import Heading from '../components/UI/Heading.vue';
    import Cliente from '../components/Cliente.vue';
    import Header from '../components/UI/Header.vue';

    defineProps({
        titulo: {
            type: String
        }
    })

</script>

<template>
    <div>
        <Header>{{ titulo }}</Header>
        <Heading>{{ titulo }}</Heading>

    </div>


</template>