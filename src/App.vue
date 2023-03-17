<script setup>
import Box from './components/Box.vue';
import Container from './components/Container.vue'

const list = [
  { id: 1, title: "Tailwind CSS", promo: true },
  { id: 2, title: "Tailwind CSS" },
  { id: 3, title: "Tailwind CSS" },
  { id: 4, title: "Tailwind CSS", promo: true },
  { id: 5, title: "Tailwind CSS" },
  { id: 6, title: "Tailwind CSS" },
  { id: 7, title: "Tailwind CSS", promo: true },
  { id: 8, title: "Tailwind CSS" },
  { id: 9, title: "Tailwind CSS" },
]

</script>

<template>

  <Container class="sm:p-8">
    <Box v-for="item in list" :key="item.id" :promo="item.promo">{{ item.title }}</Box>
  </Container>

</template>

<style scoped></style>
