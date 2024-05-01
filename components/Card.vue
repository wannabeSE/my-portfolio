<template>
    <div class="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
        <NuxtImg
        :src="imgSrc"
        height="300"
        width="400"
        fit="cover"
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
    description:{
        type: String,
        required: true
    }
})
</script>
