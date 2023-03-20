<script setup>
import NavBar from './components/NavBar.vue';
import About from './components/About.vue';
import Home from './components/Home.vue';


</script>

<template>
  <NavBar></NavBar>
  <section class="pt-32 pb-10 flex flex-col items-center justify-center">

    <Home></Home>

  </section>

  <div class="flex items-center justify-center">
    <hr class="my-8 border-title-color opacity-75 w-4/6">
  </div>

  <section class="py-10 flex flex-col items-center justify-center">

    <About></About>

  </section>

  <div class="flex items-center justify-center">
    <hr class="my-8 border-title-color opacity-75 w-4/6">
  </div>
  
</template>

<style>
body {
  @apply bg-first-color;
}
</style>
