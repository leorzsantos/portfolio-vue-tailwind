<script setup>
  defineProps({
  promo: Boolean,
})
</script>

<template>
    <div class="box" :class="{ promo }">
        <slot></slot>
    </div>
</template>

<style scoped>
.box {
    @apply flex items-center justify-center bg-gray-300 h-52 w-full sm:rounded shadow border-gray-300;
}

.box.promo {
    @apply bg-red-300;
}
</style>