<template>
  <div
    class="w-full h-14 fixed flex items-center z-[20] shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md"
  >
    <div class="w-full flex justify-center">
      <ul
        class="flex gap-4 border border-[#7042f861] bg-[#0300145e] rounded-full p-3"
      >
        <a
          :href="`#${i.name}`"
          class="text-white font-semibold hover:scale-110 hover:text-black"
          v-for="i in navLinks"
          :key="i.name"
          >{{ i.text }}</a
        >
      </ul>
    </div>
  </div>
</template>
<script setup>
import { Bars3Icon } from "@heroicons/vue/24/solid";
const navLinks = [
  {
    name: "about-me",
    text: "About Me",
  },
  {
    name: "skills",
    text: "Skills",
  },
  {
    name: "achievements",
    text: "Achievements",
  },
  {
    name: "projects",
    text: "Projects",
  },
];
</script>
