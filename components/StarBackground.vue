<template>
  <TresPerspectiveCamera :args="cameraArgs" :position="[0, 0, 1]" />
  <TresGroup ref="starRef" :rotation-z="Math.PI / 4">
    <Star v-for="i in stars" :key="i" />
  </TresGroup>
</template>
<script setup>
const starRef = ref();
const cameraArgs = [75, window.innerHeight / window.innerHeight, 0.1, 1000];
const { onLoop } = useRenderLoop();
//Generating stars
const stars = Array(1000).fill();
//animation
onLoop(({ delta }) => {
  if (starRef.value) {
    starRef.value.rotation.x -= delta / 10;
    starRef.value.rotation.y -= delta / 15;
  }
});
</script>
