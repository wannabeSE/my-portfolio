<template>
  <NuxtLink
    to="https://www.linkedin.com/in/jubair-samir-463376206"
    class="py-2 button-primary text-center text-white cursor-pointer max-w-40 text-sm md:text-lg rounded-lg md:max-w-[200px]"
    id="profile"
    v-motion
    :initial="slideFromLeft.initial"
    :enter="{
      x: 0,
      opacity: 1,
      transition: {
        delay: 1000,
        duration: 500,
      },
    }"
  >
    Connect With Me
  </NuxtLink>
</template>
<script></script>
<style></style>
