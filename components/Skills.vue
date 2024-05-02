<template>
    <section id="skills"
        class="flex flex-col items-center justify-center gap-3 scale-90 h-full relative overflow-hidden md:py-20">
        <SkillText />
        <div
            class="w-full grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center align-middle md:ml-52 lg:ml-64 ml-32">
            <SkillDataProvider v-for="i in skillImg" :imgSrc="i.src" :imgAlt="i.alt" />
        </div>
        <div class="w-full h-full absolute">
        <div class="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video 
          class="w-full h-auto"
          preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/public/cards-video.webm"
            >
          </video>
        </div>
      </div>
    </section>
</template>

<script setup>
const skillImg = [
    {
        src: '/js.png',
        alt: 'js'
    },
    {
        src: '/ts.png',
        alt: 'ts'
    },
    {
        src: '/python.png',
        alt: 'python'
    },
    {
        src: '/dart.png',
        alt: 'dart'
    },
    {
        src: '/cpp.png',
        alt: 'cpp'
    },
    {
        src: '/java.png',
        alt: 'java'
    },
    {
        src: '/node-js.png',
        alt: 'node'
    },
    {
        src: '/nestjs.png',
        alt: 'nestjs'
    },
    {
        src: '/spring.png',
        alt: 'nuxt'
    },
    {
        src: '/nuxt.png',
        alt: 'nuxt'
    },
    {
        src: '/tailwind.png',
        alt: 'mongodb'
    },
    {
        src: '/flutter.png',
        alt: 'flutter'
    },
    {
        src: '/docker.webp',
        alt: 'docker'
    },
    {
        src: '/mongodb.png',
        alt: 'mongodb'
    },
    {
        src: '/firebase.png',
        alt: 'firebase'
    },
    {
        src: '/git.png',
        alt: 'git'
    }

]
</script>
