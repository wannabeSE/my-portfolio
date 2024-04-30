<template>
    <div class="flex flex-row items-center justify-center px-20 mt-40 w-full" v-motion :initial="{ opacity: 0 }"
        :enter="slideFromTop.enter" :delay="400">
        <div class="h-full w-full flex flex-col md:gap-5 gap-3 justify-center m-auto text-start">
            <div v-motion :initial="slideFromTop.initial" :enter="slideFromTop.enter" :delay="600"
                class="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]">
                <SparklesIcon class="text-[#b49bff] mr-[10px] size-5" />
                <h1 class="Welcome-text text-[13px]">Software Engineer Portfolio</h1>
            </div>
            <div v-motion :initial="slideFromLeft.initial" :enter="slideFromLeft.enter" :delay="500"
                class="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto">
                Hi Querist!
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">I&apos;m Jubair Samir</span>
            </div>
            <div v-motion :initial="slideFromLeft.initial" :enter="{
                x: 0,
                opacity: 1,
                transition: {
                    delay: 800,
                    duration: 500
                }
            }" class="md:text-lg text-sm text-gray-400 my-5 max-w-[600px]">
                I&apos;m a Full Stack Software Engineer with experience in Webapp,
                Mobile and Software development. Check out my projects and skills.
            </div>
            <NuxtLink to="https://www.linkedin.com/in/jubair-samir-463376206"
                class="py-2 button-primary text-center text-white cursor-pointer max-w-40 text-sm md:text-lg rounded-lg md:max-w-[200px]" v-motion
                :initial="slideFromLeft.initial" :enter="{
                    x: 0,
                    opacity: 1,
                    transition: {
                        delay: 1000,
                        duration: 500
                    }
                }">
                Connect With Me
            </NuxtLink>
        </div>
        <div class="w-full h-full flex justify-center items-center" v-motion :initial="slideFromRight.initial"
            :enter="slideFromRight.enter">
            <MainIconsDark class="h-90 w-70 md:block hidden" />
        </div>
    </div>
</template>

<script setup>
import MainIconsDark from '@/public/mainiconsdark.svg?component';
import { SparklesIcon } from '@heroicons/vue/24/solid';
const slideFromTop = {
    initial: {
        y: -100,
        opacity: 0,
    },
    enter: {
        y: 0,
        opacity: 1,
        transition: {
            stiffness: 60,
        }
    }
};
const slideFromLeft = {

    initial: {
        x: -100,
        opacity: 0
    },
    enter: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 500
        }
    },

}
const slideFromRight = {
    initial: {
        x: 100,
        opacity: 0
    },
    enter: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 800,
            duration: 500
        }
    }
}
</script>
