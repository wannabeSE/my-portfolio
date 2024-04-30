<template>
  <TresMesh :position="[x, y, z]">
    <TresSphereGeometry :args="[0.008, 12, 12]" />
    <TresMeshBasicMaterial :color="'#FFFFFF'" />
  </TresMesh>
</template>
<script setup>
import { MathUtils } from "three";
const [x, y, z] = Array(3)
  .fill()
  .map(() => MathUtils.randFloatSpread(10));
</script>
