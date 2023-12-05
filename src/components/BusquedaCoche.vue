<script setup>
    defineProps({
        modelo: {
            type: Object
        }
    })

</script>

<template>
    <div>
        <h2>{{modelo.brand}}</h2>
    </div>


</template>