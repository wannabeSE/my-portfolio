<template>
    <div class="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer transition-all duration-300 hover:scale-110 z-[20]">
        <NuxtImg
        :src="imgSrc"
        height="280"
        width="550"
        fit="fill"
        :alt="title"
        />
        <div class="relative p-4">
            <h1 class="md:text-2xl text-lg font-semibold text-white">{{ title }}</h1>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    imgSrc:{
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
})
</script>
