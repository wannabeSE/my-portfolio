<template>
  <div
    class="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer transition-all duration-300 hover:scale-110 z-[20]"
  >
    <NuxtImg
      :src="imgSrc"
      height="300"
      width="500"
      fit="fill"
      :alt="link"
      class="text-white"
    />
    <div class="relative py-2 px-3">
      <h1 class="md:text-2xl text-sm font-semibold text-white">{{ title }}</h1>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imgSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>
