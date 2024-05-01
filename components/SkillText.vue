<template>
    <div class="w-full h-auto flex flex-col items-center justify-center">
        <div v-motion :initial="slideFromTop.initial"
        :visible-once="slideFromTop.visible"
            class="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]">
            <SparklesIcon class="text-[#b49bff] mr-[10px] size-5" />
            <h1 class="cursive Welcome-text text-[13px]">Think Better with Technologies</h1>
        </div>
        <div v-motion :initial="{ x: -100, opacity: 0 }"
            :visible-once="{ x: 0, opacity: 1, transition: { delay: 500, duration: 500 } }"
            class="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]">
            Making Apps with Modern Technologies
        </div>
    </div>
</template>

<script setup>
import { SparklesIcon } from '@heroicons/vue/24/solid';
const slideFromTop = {
    initial: {
        y: -100,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 400,
            duration: 600
        }
    }
};
</script>