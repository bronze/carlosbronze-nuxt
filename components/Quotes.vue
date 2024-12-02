<template>
  <div class="w-full relative">
    <blockquote class="flex cursor-auto flex-col font-semibold" id="quote-block">
      <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
        <div
          class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "></div>
      </div>
      <p class="relative pb-4 ftext-4xl text-balance" id="quote-text">If you don’t know where you’re going, any road will take you there.</p>
      <footer class="mt-4 block max-w-[70%] pb-12 not-italic">
        <span class="mb-1 block text-2xl" id="quote-author">— Lewis Carroll</span>
      </footer>
    </blockquote>
  </div>
</template>

<script lang="ts" setup></script>

<style>
@media (max-width: 480px) {
  blockquote p::after {
    position: absolute;
    right: 0rem;
  }
}
@media (min-width: 481px) {
  blockquote p::after {
    position: relative;
    left: -1rem;
    top: 3.5rem;
  }
}
blockquote {
  --calc: clamp(2.125rem, 1.538rem + 2.9348vw, 3.8125rem);
  & p {
    &::before {
      content: "";
      /* background-image: url('../assets/quotes.svg'); */
      background-size: 100% auto;
      background-repeat: no-repeat;
      width: var(--calc);
      height: calc(var(--calc) * 0.75741);
      top: calc(var(--calc) * -1);
      aspect-ratio: 200/150;

      display: inline-block;
      position: absolute;
      left: -2rem;
      top: -3rem;
    }
    &::after {
      content: "";
      /* background-image: url('../assets/quotes.svg'); */
      background-size: 100% auto;
      background-repeat: no-repeat;
      width: calc(var(--calc));
      height: calc(var(--calc) * 0.75741);
      bottom: calc(var(--calc) * -1);
      aspect-ratio: 200/150;

      transform: rotate(180deg);
      mask-size: cover;
      display: inline-block;
    }
  }
}
</style>
