<script setup>
import NavBar from './components/NavBar.vue';
import About from './components/About.vue';
import Home from './components/Home.vue';
import Separetor from './components/Separetor.vue';
import Blog from './components/Blog.vue';


</script>

<template>
  <NavBar></NavBar>
  <section class="pt-32 pb-10 flex flex-col items-center justify-center">

    <Home></Home>

  </section>

<Separetor></Separetor>

  <section class="py-10 flex flex-col items-center justify-center">

    <About></About>

  </section>

  <Separetor></Separetor>

  <section class="py-10 flex flex-col items-center justify-center">

    <Blog></Blog>

  </section>

  <Separetor></Separetor>
  
</template>

<style>
body {
  @apply bg-first-color;
}
</style>
