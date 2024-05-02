<template>
  <div
    class="w-full h-full flex justify-center items-center"
    v-motion
    :initial="slideFromRight.initial"
    :enter="slideFromRight.enter"
  >
    <NuxtImg src="/mainiconsdark.svg" height="650" width="650" alt="logo" />
  </div>
</template>

