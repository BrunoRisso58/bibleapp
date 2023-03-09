<script setup>
const route = useRoute();
const book = route.params.book;
const chapter = route.params.chapter;
</script>

<template>
    <div class="m-12">
        <h1 class="text-3xl capitalize font-serif mb-10">{{ book + " " + chapter }}:</h1>
        <BooksVerse />
    </div>
</template>