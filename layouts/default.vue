<template>
  <the-navbar />
  <div id="layout" class="default-layout min-h-screen container mx-auto flex flex-col">
    <div class="flex-auto">
      <slot />
    </div>
    <the-footer />
  </div>
</template>

<script setup></script>

<style lang="postcss" scoped></style>
