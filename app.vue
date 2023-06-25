<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
body {
  background: url("/background.png");
  background-size: cover;
  background-repeat: no-repeat;
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.13s;
}

.layout-enter-from {
  opacity: 0;
}

.layout-leave-to {
  opacity: 0;
}
</style>
