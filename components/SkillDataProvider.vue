<template>
    <div v-motion :initial="slideFromLeft.initial" :visible="slideFromLeft.visible">
        <div class="md:h-20 md:w-20 h-16 w-16 my-4 md:my-4">
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
const slideFromLeft = {
    initial: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 500,
            duration: 800
        }
    }
}
</script>
