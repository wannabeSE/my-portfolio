<template>
  <div
    class="flex flex-col items-center justify-center z-[20]"
    id="achievements"
  >
    <h1
      class="md:text-[40px] text-xl pb-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 md:py-20"
    >
      Achievements & Experiences
    </h1>
    <div
      class="w-full grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-center justify-center align-middle md:mx-30 p-4"
    >
      <Card
        :imgSrc="'/buetFest.jpeg'"
        :title="'1st Runner Up in BUET Hackathon'"
      />
      <Card
        :imgSrc="'/code.png'"
        :title="'Top Finalist in Code Samurai 2022'"
      />
      <Card
        :imgSrc="'wiz.jpeg'"
        :title="'Fully funded internship opportunity in a japanese company(W.I.Z)'"
      />
    </div>
  </div>
</template>
