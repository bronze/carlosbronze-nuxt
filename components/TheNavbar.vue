<script setup>
import {useMagicKeys} from "@vueuse/core";

import {ref, watch} from "vue";

const color = useColorMode();

function toggleDark() {
  color.preference = color.value === "dark" ? "light" : "dark";
}

const isOpen = ref(false);
const {Meta_K, Ctrl_K} = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) e.preventDefault();
  },
});

watch([Meta_K, Ctrl_K], (v) => {
  if (v[0] || v[1]) isOpen.value = true;
});
</script>

<template>
  <!-- <nav class="text-center py-4 flex items-center justify-center"></nav> -->
  <header class="sticky top-0 z-40 backdrop-blur-lg">
    <div class="h-14 flex items-center container">
      <div class="mr-4 md:mr-1 md:flex">
        <NuxtLink to="/" class="ftext-2xl lg:ftext-lg mr-12">
          <span class="text-text/60">Carlos</span>
          <span class="font-bold">Bronze</span>
        </NuxtLink>
        <!-- <Logo /> -->
        <nav class="hidden md:flex items-center text-sm font-medium space-x-6 max-lg:space-x-4">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/page">page</NuxtLink>
        </nav>
      </div>

      <div class="flex flex-1 items-center justify-between md:justify-end space-x-2">
        <div class="w-full flex-1 md:w-auto md:flex-none">
          <Button
            variant="outline"
            class="relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm text-muted-foreground font-normal shadow-none lg:w-64 md:w-40 sm:pr-12"
            @click="isOpen = true">
            <span class="hidden lg:inline-flex">Search documentation...</span>
            <span class="inline-flex lg:hidden">Search...</span>
            <Kbd
              class="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 border rounded bg-muted px-1.5 text-[10px] font-medium font-mono opacity-100 sm:flex">
              <span class="text-xs">⌘</span>
              K
            </Kbd>
          </Button>
        </div>

        <nav class="flex items-end">
          <client-only>
            <DarkModeToggle />
            <!-- <DarkMode /> -->
          </client-only>
        </nav>
      </div>
    </div>
  </header>

  <Dialog v-model:open="isOpen">
    <DialogContent class="p-0">
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandList @escape-key-down="isOpen = false">
          <CommandGroup heading="Links">
            <CommandItem v-for="item in mainNav" :key="item.title" :heading="item.title" :value="item.title" class="py-3" @select="handleSelectLink(item)">
              <Icon name="radix-icons:file" class="mr-2 h-5 w-5" />
              <span>{{ item.title }}</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <!-- <CommandGroup v-for="item in docsConfig.sidebarNav" :key="item.title" :heading="item.title">
            <CommandItem
              v-for="subItem in item.items"
              :key="subItem.title"
              :heading="subItem.title"
              :value="subItem.title"
              class="py-3"
              @select="
                handleSelectLink(subItem)"
            >
              <Icon name="radix-icons:circle" class="mr-2 h-4 w-4" />
              <span>{{ subItem.title }}</span>
            </CommandItem>
          </CommandGroup> -->
        </CommandList>
      </Command>
    </DialogContent>
  </Dialog>
</template>

<style lang="postcss" scoped></style>
