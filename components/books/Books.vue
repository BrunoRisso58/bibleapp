<script setup>
const { data: otBooks } = await getOTBooks();
const { data: ntBooks } = await getNTBooks();

const handleChoice = (bookId, bookName) => {
    let formattedName = bookName.toLowerCase().replaceAll(' ', '');
    navigateTo(`/read/${formattedName}`)
}
</script>

<template>
    <div class="flex flex-row">
            <div class="my-8 mx-16">
                <h2 class="text-2xl font-serif">Old Testament</h2>
                <ul class="text-xl mt-6">
                    <li v-for="book in otBooks" :key="book.b" @click="handleChoice(book.b, book.n)" class="mt-4 cursor-pointer">
                        {{ book.n }}
                    </li>
                </ul>
            </div>
            <div class="my-8 mx-16">
                <h2 class="text-2xl font-serif">New Testament</h2>
                <ul class="text-xl mt-6">
                    <li v-for="book in ntBooks" :key="book.b" @click="handleChoice(book.b, book.n)" class="mt-4 cursor-pointer">
                        {{ book.n }}
                    </li>
                </ul>
            </div>
        </div>
</template>