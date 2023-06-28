<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
body {
  background: url("/background.png");
  background-size: cover;
  background-repeat: no-repeat;
  font-family: "Poppins", sans-serif;
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

.page-enter-active,
.page-leave-active {
  transition: all 0.13s;
}

.page-enter-from {
  opacity: 0;
}

.page-leave-to {
  opacity: 0;
}
</style>