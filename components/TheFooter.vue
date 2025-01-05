<template>
  <!-- <footer class="border py-4 text-center dark:border-gray-500">The Footer</footer> -->

  <footer class="py-6 text-muted-foreground md:py-0 border-t-[1px] border-muted-foreground">
    <div class="flex flex-col items-center justify-between gap-2 md:h-24 md:flex-row">
      <p class="flex items-center justify-center text-center text-text">
        <Icon name="ph:code-bold" class="mr-2 inline-flex h-4 w-4" />
        Carlos Bronze &copy; {{ new Date().getFullYear() }}
      </p>
      <span class="flex-1" />
      <div class="footerlinks mt-4 flex justify-center space-x-5 sm:mt-0">
        <a variant="ghost" size="icon" class="" href="https://linkedin.com/in/carlosbronze" rel="me" title="LinkedIn">
          <Icon name="mdi:linkedin" title="LinkedIn" />
        </a>
        <a variant="ghost" size="icon" class="" href="https://github.com/bronze" rel="me" title="GitHub">
          <Icon name="mdi:github" title="GitHub" />
        </a>
        <a variant="ghost" size="icon" class="" href="https://bsky.app/profile/carlosbronze.bsky.social" rel="me" title="BlueSky">
          <Icon name="simple-icons:bluesky" title="BlueSky" />
        </a>
        <a variant="ghost" size="icon" class="" href="https://www.carlosbronze.com.br/onlyfans" rel="me" title="OnlyFans">
          <Icon name="simple-icons:onlyfans" title="OnlyFans" />
        </a>
        <a
          variant="ghost"
          size="icon"
          href="https://docs.google.com/document/d/1QjJRMyWnHIhv6_bAtlz2mGRNnZZw81rjCOGd4ZlmZpY/edit?usp=sharing"
          rel="me"
          title="Resume">
          <Icon name="mdi:document" title="Resume" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="postcss" scoped>
.footerlinks {
  button {
    span {
      @apply h-full w-8 cursor-pointer;
    }
  }
}
</style>
