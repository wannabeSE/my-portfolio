<template>
    <section
    id="skills"
    class="flex flex-col items-center justify-center gap-3 scale-90 h-full relative overflow-hidden pb-80 py-20"
    >
        <div class="w-full grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center align-middle md:ml-52 ml-32">
            <SkillDataProvider v-for="i in skillImg" :imgSrc="i.src" :imgAlt="i.alt"/>
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
        src:'/python.png',
        alt:'python'
    },
    {
        src:'/dart.png',
        alt:'dart'
    },
    {
        src:'/cpp.png',
        alt:'cpp'
    },
    {
        src:'/java.png',
        alt:'java'
    },
    {
        src:'/node-js.png',
        alt:'node'
    },
    {
        src: '/nestjs.png',
        alt:'nestjs'
    },
    {
        src:'/spring.png',
        alt:'nuxt'
    },
    {
        src:'/nuxt.png',
        alt:'nuxt'
    },
    {
        src:'/tailwind.png',
        alt: 'mongodb'
    },
    {
        src:'/flutter.png',
        alt:'flutter'
    },
    {
        src: '/docker.webp',
        alt: 'docker'
    },
    {
        src:'/mongodb.png',
        alt:'mongodb'
    },
    {
        src:'/firebase.png',
        alt:'firebase'
    },
    {
        src:'/git.png',
        alt: 'git'
    }
    
]
</script>


