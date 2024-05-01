<template>
    <div class="flex flex-col items-center justify-center py-20" id="achievements">
        <h1
            class="md:text-[40px] text-xl py-4 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 md:py-20">
            Achievements & Experiences
        </h1>
        <div class="h-full w-full flex flex-col md:flex-row gap-10 px-10">
            <Card :imgSrc="'/buetFest.jpeg'" :title="'1st Runner Up in BUET Hackathon'"
                :description="'The hackathon was based on A.I. LLM.We needed to build a system that is able to generate pdf based on prompt also able to generate relevant images'" />
            <Card :imgSrc="'/code.png'" :title="'Top Finalist in Code Samurai 2022'" />
            <Card :imgSrc="'wiz.jpeg'" :title="'Full funded internship in a japanese company(W.I.Z)'"/>
        </div>
    </div>
</template>

<script setup>

</script>
