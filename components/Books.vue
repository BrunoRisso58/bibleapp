<script setup>
// import fetchBooks from '../composables/fetchBooks';
// const books = fetchBooks();
// console.log(books.value)

const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '69429c6d52mshbf884f8d222d712p12bb0djsne05d7c0b5898',
            'X-RapidAPI-Host': 'iq-bible.p.rapidapi.com'
        } 
    }
const req  = await fetch('https://iq-bible.p.rapidapi.com/GetBibleBookAbbreviations', options);
const data = await req.json();

console.log(data)
</script>

<template>
    <div class="m-12">
        <h1 class="text-4xl font-serif">Select a book:</h1>
        <ul class="text-xl">
            <li>{{ data }} </li>
        </ul>
    </div>
</template>