<template>
  <div class="w-full h-auto fixed inset-0 z-20">
    <Suspense fallback="null">
      <TresCanvas :alpha="true">
        <StarBackground />
      </TresCanvas>
    </Suspense>
  </div>
</template>
