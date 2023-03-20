<script setup>

</script>

<template>
    <h1 class="text-center font-bold text-2xl mb-4">Sobre</h1>
    <div class="flex w-8/12">
        <div class="w-6/12 flex justify-start">
            <div class="relative w-44 h-44">
                <span class="absolute z-10 w-full h-full blur-2xl rounded-full bg-title-color"></span>
                <span class="absolute z-20 w-full h-full right-3 top-3 rounded-full border-2 border-title-color" ></span>
                <img class="absolute z-30 w-full h-full rounded-full" src="../assets/eu.png" alt="">
            </div>
        </div>
        <div class="flex flex-col justify-evenly items-start w-6/12">
            <p class="text-sm text-justify">Atualmente Técnico em Suporte, formado em Tecnologia da Informação (curso técnico) e
                atualmente cursando Análise e Desenvolvimento de Sistemas. Sou uma pessoa alegre, proativa e sempre busco
                aprender mais. </p>
            <div class="flex items-center pt-4 pb-5 justify-between w-full">
                <div class="itens-sobre">
                    <h2>21</h2>
                    <span class="text-xs">Anos</span>
                </div>
                <div class="itens-sobre">
                    <h2>3</h2>
                    <span class="text-xs">Projetos</span>
                </div>
                <div class="itens-sobre">
                    <h2>3</h2>
                    <span class="text-xs">Anos em TI</span>
                </div>
                <div class="itens-sobre">
                    <h2>4°</h2>
                    <span class="text-xs">Semestre</span>
                </div>
                <img class="h-5 w-5" src="../assets/Group 4.png" alt="">
            </div>
            <button class="bg-title-color p-3 rounded-lg text-white font-light text-sm">Download CV</button>
        </div>
    </div>
</template>

<style scoped>
.itens-sobre {
    @apply flex flex-col items-center leading-4;
}

h2 {
    @apply font-extrabold;
}
</style>