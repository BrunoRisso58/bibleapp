<script setup>
defineProps({
    bookId: Number
})

const route = useRoute();

console.log(route.params)
</script>

<template>
    <h1>Testing</h1>
</template>