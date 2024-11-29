<script setup lang="ts">
import {ConfigProvider} from "radix-vue";

import Toaster from "@/components/ui/toast/Toaster.vue";
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <VitePwaManifest />
    <NuxtLoadingIndicator style="opacity: 1" :height="2" />
    <Toaster />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </TooltipProvider>
</template>
