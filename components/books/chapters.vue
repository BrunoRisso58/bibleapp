<script setup>
import store from '@/plugins/vuex.js';

console.log(store)

console.log(store.state.bookId)
</script>

<template>
    <h1>{{ store.state.bookId }}</h1>
</template>