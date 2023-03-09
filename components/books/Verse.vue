<script setup>
import store from '@/plugins/vuex.js';

const { data: chapter } = await getChapter(store.state.bookId, store.state.chapterId);
</script>

<template>
    <div class="my-8 mx-4">
        <ul class="text-xl">
            <li v-for="verse in chapter" :key="verse.v" class="my-6">
                <p><sup class="text-gray-500 font-bold">{{ verse.v + " "}}</sup>{{ verse.t }}</p>
            </li>
        </ul>
    </div>
</template>