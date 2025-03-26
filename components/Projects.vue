<template>
  <div class="flex flex-col items-center justify-center" id="projects">
    <h1
      class="md:text-[40px] text-xl m-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 md:py-20"
    >
      My Projects
    </h1>
    <div
      class="w-full grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-center justify-center align-middle md:mx-30 p-4"
    >
      <ProjectCard
        :imgSrc="'/travel_app.png'"
        :title="'Travel app build with Flutter'"
        :link="'https://github.com/wannabeSE/flutter_travel_app'"
      />
      <ProjectCard
        :imgSrc="'/smart_home.png'"
        :title="'Smart home app build with Flutter'"
        :link="'https://github.com/wannabeSE/flutter_smart_home_app'"
      />
      <ProjectCard
        :imgSrc="'/sneaker_app.png'"
        :title="'Sneaker shop app build with Flutter'"
        :link="'https://github.com/wannabeSE/Shoeshop_UI'"
      />
      <ProjectCard
        :imgSrc="'/authImg.jpg'"
        :title="'Authentication system built with NestJS & MongoDB'"
        :link="'https://github.com/wannabeSE/nestjs-google-jwt-session-auth-system'"
      />
      <ProjectCard
        :imgSrc="'/face_match.jpeg'"
        :title="'Face match system using vectorDB with Spring Boot'"
        :link="'https://github.com/wannabeSE/soul-finder'"
      />
      <ProjectCard
        :imgSrc="'/aipdf.png'"
        :title="'Pdf generation with LLM including relevant image generation'"
        :link="'https://github.com/zarif007/buet-cse-fest?tab=readme-ov-file'"
      />
    </div>
  </div>
</template>
