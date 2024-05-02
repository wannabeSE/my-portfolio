<template>
  <div
    v-motion
    :initial="slideFromLeft.initial"
    :enter="slideFromLeft.enter"
    :delay="500"
    class="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
  >
    Hi Querist!
    <span
      class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
      >I&apos;m Jubair Samir</span
    >
  </div>
  <div
    v-motion
    :initial="slideFromLeft.initial"
    :enter="{
      x: 0,
      opacity: 1,
      transition: {
        delay: 800,
        duration: 500,
      },
    }"
    class="md:text-lg text-sm text-gray-400 my-5 max-w-[600px]"
  >
    I&apos;m a Full Stack Software Engineer with experience in Webapp, Mobile
    and Software development. Check out my projects and skills.
  </div>
</template>
