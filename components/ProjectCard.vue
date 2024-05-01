<template>
    <div class="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] z-[40] cursor-pointer">
        <NuxtImg
        :src="imgSrc"
        height="300"
        width="400"
        fit="fill"
        />
        <div class="relative p-4">
            <a :href="link" class="md:text-2xl text-lg font-semibold text-white">{{ title }}</a>
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
    link:{
        type: String,
        required: true
    }
})
</script>
