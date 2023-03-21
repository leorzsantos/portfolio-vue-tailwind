<script setup>
import Container from './Container.vue';

const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
const maxLenght = 200;

</script>

<template>
    <Container>
        <div class="flex flex-col justify-between h-36">
            <h1 class="font-bold text-2xl">Meu Blog</h1>
            <p class="text-sm py-3">Veja meu medium, publico artigos sobre tecnologia, livros e mangás.</p>
            <a href="https://medium.com/@leorezendes" target="_blank"
                class="btn-medium">My
                medium</a>
        </div>
        <article v-for="index in 3" class="article-box">
            <div class="flex justify-between">
                <div class="pr-3 w-4/5">
                    <h2 class="font-bold text-base">Titulo da postagem</h2>
                    <figcaption v-if="text.length < maxLenght" class="text-xs text-justify font-light">{{ text }}
                    </figcaption>
                    <figcaption v-else class="text-xs text-justify font-light">{{ text.slice(0, maxLenght) }}...
                    </figcaption>
                    <a class="font-bold text-sm " href="https://medium.com/@leorezendes" target="_blank">Read more &rarr;</a>
                </div>
                <div class="flex flex-col items-endw-1/5">
                    <img class="w-14 h-14 mb-12 rounded-lg" src="../assets/postagem.png" alt="">
                    <figure class="flex mt-0.5">
                        <figcaption class="text-sm">4 &#10025;</figcaption>
                    </figure>
                </div>
            </div>
        </article>
        
    </Container>
</template>

<style>

.article-box{
    @apply border-0 rounded-lg bg-white p-3 h-36 cursor-pointer shadow-xl 
    ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
    hover:bg-title-color hover:border-white hover:text-white;
}

.btn-medium {
    @apply bg-second-color p-3 px-5 rounded-lg text-title-color font-light text-sm border-2
    transition-all duration-300
    border-title-color w-fit  hover:bg-title-color hover:text-white
    hover:-translate-y-1 hover:shadow-2xl shadow-xl;
}

</style>