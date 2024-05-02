<template>
  <div
    class="w-full h-full flex justify-center items-center"
    v-motion
    :initial="slideFromRight.initial"
    :enter="slideFromRight.enter"
  >
    <NuxtImg
    src="https://res.cloudinary.com/dcmgtfqoi/image/upload/v1714684368/mainIconsdark_ynspdo.svg" 
    height="650" 
    width="650" 
    alt="logo" />
  </div>
</template>

