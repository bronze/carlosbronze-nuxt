<script setup lang="ts">
import {ConfigProvider} from "radix-vue";
import {Analytics} from "@vercel/analytics/nuxt";
import Toaster from "@/components/ui/toast/Toaster.vue";
</script>

<template>
  <Bodybg />
  <TooltipProvider :delay-duration="0">
    <NuxtLoadingIndicator style="opacity: 1" :height="4" :color="false" class="z-100 bg-primary/80" />
    <Toaster />
    <NuxtLayout>
      <NuxtPage />
      <Analytics />
    </NuxtLayout>
  </TooltipProvider>
</template>
