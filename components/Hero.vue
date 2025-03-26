<template>
  <div class="relative flex flex-col h-full w-full" id="about-me">
    <video
      autoplay
      muted
      loop
      class="rotate-180 absolute md:top-[-340px] -top-56 xl:-top-62 left-0 z-[1] h-full w-full object-cover"
    >
      <source src="/blackhole.webm" type="video/webm" />
    </video>
    <HeroContent />
  </div>
</template>
