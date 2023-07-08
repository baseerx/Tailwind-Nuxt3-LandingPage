<template>
  <section class="container-fluid my-12 md:mb-32">
    <div class="relative">
      <div
        class="w-2/5 h-80 bg-indigo-500 absolute hidden md:block right-0 lg:top-24 md:top-48 rounded-l-full"
      ></div>
    </div>
    <div class="container mx-auto w-4/5">
      <div class="sm:flex sm:flex-col-reverse lg:flex lg:flex-row gap-8 md:gap-28 lg:gap-23">
        <div
          class="flex flex-col text-center lg:text-left gap-4 lg:w-3/5 pl-4 sm:w-full"
        >
          <h1 class="text-5xl">A Simple Bookmark Manager</h1>
          <p class="text-lg text-gray-500 text-justify">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div class="flex flex-col sm:flex sm:flex-row items-center lg:items-start mt-8 gap-4 mb-8">
            <button class="bg-indigo-500 w-48 text-white px-2 py-3 rounded-md">
              Get it on Chrome
            </button>
            <button
              class="text-black w-48 hover:bg-indigo-500 hover:text-white px-2 py-3 rounded-md"
            >
              Get it on Firefox
            </button>
          </div>
        </div>
        <div class="z-10">
          <img src="../public/imgs/hero-bg.png" alt="hero" class="w-full" />
        </div>
      </div>
    </div>
    
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
