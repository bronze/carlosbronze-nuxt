<template>
  <Button variant="ghost" size="icon" @click="toggleDark">
    <Icon name="mdi:theme-light-dark" size="28" />
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
function toggleDark() {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
}
</script>
