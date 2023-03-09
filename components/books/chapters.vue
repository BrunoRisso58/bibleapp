<script setup>
import store from '@/plugins/vuex.js';
const { data } = await getChapterCount(store.state.bookId);
const route = useRoute();

const chapters = [];
for (let i = 0; i < data.value.chapterCount; i++) {
    chapters[i] = i + 1;
}

const handleChoice = chapterId => {
    store.dispatch('updateChapterId', chapterId);
    navigateTo(`/read/${route.params.book}/${chapterId}`)
}
</script>

<template>
    <button v-for="chapter in chapters" :key="chapter" @click="handleChoice(chapter)" class="text-xl m-4 w-14 h-14">{{ chapter }}</button>
</template>