<template>
  <div class="index min-h-[50vh] flex flex-col justify-center items-center">
    <h1 class="mt-2">Installed items:</h1>
    <ColorScheme placeholder="..." tag="span">
      Color mode:
      <b>{{ $colorMode.preference }}</b>
      <span v-if="$colorMode.preference === 'system'">
        (
        <i>{{ $colorMode.value }}</i>
        mode detected)
      </span>
    </ColorScheme>
    <br />
    <a href="https://github.com/ydesign-labs/shadcn-nuxt-starter" class="href">https://github.com/ydesign-labs/shadcn-nuxt-starter</a>

    <a href="https://github.com/BayBreezy/nuxt-ui-thing-starter" class="href">https://github.com/BayBreezy/nuxt-ui-thing-starter</a>

    <a href="https://github.com/ZTL-UwU/shadcn-docs-nuxt" class="href">https://github.com/ZTL-UwU/shadcn-docs-nuxt</a>
  </div>
</template>

<script setup></script>

<style lang="postcss" scoped></style>
