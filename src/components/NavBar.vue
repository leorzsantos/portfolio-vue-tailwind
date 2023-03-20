<script setup>

</script>

<template>
    <div class="fixed z-40 flex w-full bg-second-color px-6 pt-4 pb-4 shadow-xl ring-1 ring-gray-900/5 sm:px-5">
        <div class="w-2/6 flex justify-center">
            <span class="font-bold text-opaco-color">Leonardo Rezende</span>
        </div>
        <div class="w-4/6 mx-auto max-w-xl">
            <nav class="relative z-0 flex justify-around">
                <button class="peer/home flex-1 text-title-color font-medium">Home</button>
                <button class="peer/about flex-1 text-title-color font-medium">About</button>
                <button class="peer/blog flex-1 text-title-color font-medium">Blog</button>
                <button class="peer/contact flex-1 text-title-color font-medium">Contact</button>

                <span
                    class="absolute left-0 -z-10 h-full w-1/4 origin-center scale-x-75 scale-y-125 rounded-full bg-first-color transition-all duration-300 peer-focus/about:left-[25%]  peer-focus/blog:left-[50%] peer-focus/contact:left-[75%]"></span>
            </nav>
        </div>
    </div>
</template>

<style></style>