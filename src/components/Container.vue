<script setup>

</script>

<template>
  <section class="base-container">

    <slot></slot>

  </section>
</template>

<style scoped>
.base-container{
  @apply grid gap-4 sm:grid-cols-1 md:grid-cols-2 container sm:w-8/12;
}
</style>