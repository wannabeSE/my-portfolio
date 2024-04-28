<template>
    
</template>

<script setup>
import * as random from 'maath/random/dist/maath-random.esm'
const { onLoop } = useRenderLoop();
const starRef = ref()
const sphere = computed(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));
onLoop(({ delta, elapsed }) => {
    if(starRef.value) {
        starRef.value.rotation.x -= delta/10;
        starRef.value.rotation.y -= delta/15
    }
})
</script>
