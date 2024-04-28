<template>
    <TresCanvas window-size clear-color="#030014">
        <TresPerspectiveCamera visible />
        <TresMesh ref="starRef">
            <TresSphereGeometry />
            <TresMeshBasicMaterial :color="'#A39393'" />
        </TresMesh>
    </TresCanvas>
</template>
<script setup>
import { Scene, SphereGeometry, MeshBasicMaterial, Mesh, MathUtils } from 'three';
import * as random from 'maath/random/dist/maath-random.esm';
const starRef = ref()
const { onLoop } = useRenderLoop();
onLoop(({ delta }) => {
    if (starRef.value) {
        starRef.value.rotation.x -= delta / 10;
        starRef.value.rotation.y -= delta / 15
    }
})

</script>