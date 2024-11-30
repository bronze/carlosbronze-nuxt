<template>
  <div class="index min-h-[calc(100vh-10rem)] flex flex-col justify-center items-center">
    <Quotes />
  </div>
</template>

<script setup>
const colorMode = useColorMode();

console.log(colorMode.preference);
</script>

<style lang="postcss" scoped></style>
