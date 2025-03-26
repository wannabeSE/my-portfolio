<template>
  <TresPerspectiveCamera :position="[0, 0, 4]" :fov="70" />
  <OrbitControls :enable-zoom="false" />
  <TresGroup ref="starRef" :rotation-z="Math.PI / 5">
    <Star v-for="i in stars" :key="i" />
  </TresGroup>
</template>
<script setup>
import { OrbitControls } from "@tresjs/cientos";
const starRef = ref();
const { onLoop } = useRenderLoop();
//Generating stars
const stars = Array(800).fill();
//animation
onLoop(({ delta }) => {
  if (starRef.value) {
    starRef.value.rotation.x -= delta / 20;
    starRef.value.rotation.y -= delta / 15;
  }
});
</script>
