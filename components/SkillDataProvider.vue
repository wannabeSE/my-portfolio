<template>
    <div v-motion :initial="slideFromLeftWithVisible.initial" :visible="slideFromLeftWithVisible.visible">
        <div class="md:h-20 md:w-20 h-16 w-16 mx-16 my-4 md:mx-32">
            <img :src="imgSrc" :alt="imgAlt">
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    imgSrc: {
        type: String,
        required: true
    },
    imgAlt: {
        type: String,
        required: true
    }
})
</script>
