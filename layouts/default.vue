<script setup lang="ts">
import {SpeedInsights} from "@vercel/speed-insights/vue";
</script>

<template>
  <SpeedInsights />

  <the-navbar />
  <div id="layout" class="default-layout min-h-screen container mx-auto flex flex-col">
    <div class="flex-auto">
      <slot />
    </div>
    <the-footer />
  </div>
</template>

<style lang="postcss" scoped></style>
