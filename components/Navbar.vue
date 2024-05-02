<template>
  <nav
    class="w-full h-16 fixed top-0 flex items-center z-40 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md"
  >
    <div class="hidden w-full md:flex justify-center">
      <ul
        class="flex gap-6 border border-[#7042f861] bg-[#0300145e] rounded-full px-6 py-3"
      >
        <a
          :href="`#${i.name}`"
          class="transition-all duration-500 text-white text-lg font-medium hover:scale-110 hover:text-purple-500"
          v-for="i in navLinks"
          :key="i.name"
          >{{ i.text }}</a
        >
      </ul>
    </div>
    <!-- mobile menu bar -->
    <div class="md:hidden flex justify-end w-full" id:mobile-menu-bar>
      <Bars3BottomRightIcon
        @click="isOpen = !isOpen"
        class="size-8 text-white mr-1"
      />
      <div
        class="absolute top-12 right-4 bg-[#040209] opacity-80 h-40 w-1/2 border-2 border-white rounded-lg backdrop-filter backdrop-blur-lg"
        :class="isOpen ? '' : 'hidden'"
      >
        <ul class="flex flex-col m-5 gap-2">
          <li v-for="i in navLinks">
            <a :href="`#${i.name}`" class="text-white font-semibold">{{
              i.text
            }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { Bars3BottomRightIcon } from "@heroicons/vue/24/solid";
let isOpen = ref(false);
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
