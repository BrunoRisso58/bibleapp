<script setup>
import { useStore } from 'vuex';

const store = useStore();

const bookId = computed(() => store.getters.getBookId)
</script>

<template>
    <h1>{{ bookId }}</h1>
</template>