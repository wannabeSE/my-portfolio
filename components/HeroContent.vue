<template>
  <div
    class="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    v-motion
    :initial="{ opacity: 0 }"
    :enter="slideFromTop.enter"
    :delay="400"
  >
    <div
      class="h-full w-full flex flex-col md:gap-5 gap-3 justify-center m-auto text-start"
    >
      <div
        v-motion
        :initial="slideFromTop.initial"
        :enter="slideFromTop.enter"
        :delay="600"
        class="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon class="text-[#b49bff] mr-[10px] size-5" />
        <h1 class="Welcome-text text-[13px]">Software Engineer Portfolio</h1>
      </div>
      <Intro />
      <ConnectWithMe />
    </div>
    <MainIcon />
  </div>
</template>

<script setup>
import { SparklesIcon } from "@heroicons/vue/24/solid";
</script>
