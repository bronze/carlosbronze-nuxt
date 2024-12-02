<template>
  <div class="flex-auto content-center">
    <Quotes />
  </div>
</template>

<script setup>
const colorMode = useColorMode();

console.log(colorMode.preference);
</script>

<style lang="postcss" scoped></style>
