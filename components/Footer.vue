<template>
  <div
    class="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[40]"
  >
    <div class="min-w-[200px] h-auto flex flex-col items-center justify-start">
      <div className="font-bold text-[16px]">Social Media</div>
      <p className="flex flex-row items-center my-[15px] cursor-pointer">
        <GitIcon class="bg-white h-6 w-6" />
        <a
          href="https://github.com/wannabeSE"
          class="text-[15px] ml-[6px] cursor-pointer"
          >Github</a
        >
      </p>
      <p className="flex flex-row items-center my-[15px] cursor-pointer">
        <LinkedInIcon class="bg-white h-6 w-6" />
        <a
          href="https://www.linkedin.com/in/jubair-samir-463376206"
          class="text-[15px] ml-[6px] cursor-pointer"
          >LinkedIn</a
        >
      </p>
    </div>
    <div class="mb-[20px] text-[15px] text-center">
      &copy; Jubair Samir, 2023 Inc. All rights reserved
    </div>
  </div>
</template>
<script setup>
import GitIcon from "@/public/github.svg?component";
import LinkedInIcon from "@/public/linkedin.svg?component";
</script>
