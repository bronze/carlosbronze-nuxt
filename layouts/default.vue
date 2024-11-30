<script setup lang="ts">
import {SpeedInsights} from "@vercel/speed-insights/vue";
</script>

<template>
  <SpeedInsights />
  <div class="default-layout min-h-screen container mx-auto flex flex-col">
    <the-navbar />
    <div class="flex-auto">
      <slot />
    </div>
    <the-footer />
  </div>
</template>

<style lang="postcss" scoped></style>
