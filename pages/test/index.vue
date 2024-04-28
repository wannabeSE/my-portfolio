<template>
  <div class="w-full h-auto fixed inset-0 z-[20]">
    <TresCanvas window-size clear-color="#030014">
      <TresPerspectiveCamera :args="cameraArgs" :position="[0, 0, 5]" />
      <TresGroup ref="starRef" :rotation-z="Math.PI / 4">
        <Star v-for="i in stars" :key="i" />
      </TresGroup>
    </TresCanvas>
  </div>
</template>
<script setup>
const starRef = ref();
const cameraArgs = [75, window.innerHeight / window.innerHeight, 0.1, 1000];
const { onLoop } = useRenderLoop();
//Generating stars  
const stars = Array.from({ length: 1500 }, (_, index) => index + 1);
//animation
onLoop(({ delta }) => {
  if (starRef.value) {
    starRef.value.rotation.x -= delta / 10;
    starRef.value.rotation.y -= delta / 15;
  }
});
</script>
