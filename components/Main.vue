<template>
  <section class="bg-gray-100 container-fluid py-10 w-full my-10 lg:my-20">
    <div class="container mx-auto md:my-5 lg:my-10 text-center relative sm:my-8">
      <h2 class="text-black text-3xl">Features</h2>
      <p class="text-gray-400 text-md w-1/2 sm:w-full mx-auto">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
    </div>
    <div class="container-fluid relative">
           <div
        class="w-1/3 hidden lg:block h-80 bg-indigo-500 rounded-r-full absolute left-0 bottom-28 lg:-bottom-20"
      ></div>
      <div class="container mx-auto w-4/5">
        <div class="flex flex-col w-full lg:flex lg:flex-row items-center lg:gap-24">
          <div class="z-10 w-1/2 sm:w-full">
            <img src="../public/imgs/illustration-features-tab-1.png" alt="" />
          </div>
          <div class="flex flex-col h-full items-center lg:items-start w-1/2 sm:w-full sm:text-center sm:my-8 gap-4">
            <h2 class="text-2xl">Bookmark in one click</h2>
            <p class="text-lg text-gray-500">
                Organize your bookmarks however you like. Our simple drag-and-drop
                interface gives you complete control over how you manage your
                favourite sites.
            </p> 
            <div class="flex items-start md:items-center">
                <button type="button" class="bg-indigo-500 rounded-md w-28 text-white py-3">More Info</button>
            </div>
          </div>
        </div>
      </div>

   
    </div>
    <div
      class="container gap-8 mx-auto sm:my-18 lg:my-32 xl:my-48 flex flex-col lg:flex lg:flex-row items-start justify-center"
    >
      <div
        class="flex flex-col gap-4 w-full px-10 text-center justify-center items-center lg:items-start my-auto mx-auto lg:text-left lg:w-1/2 lg:ml-24"
      >
        <h2 class="text-3xl">Intelligent search</h2>
        <p class="text-gray-400 w-full lg:w-4/5 text-justify">
          Our powerful search feature will help you find saved sites in no time
          at all. No need to crawl through all of your bookmarks.
        </p>
        <button
          type="button"
          class="py-3 px-2 w-28 rounded-md text-sm text-white bg-indigo-500 uppercase"
        >
          More Info
        </button>
      </div>
      <div class="w-full flex justify-center lg:w-1/2 z-10">
        <img src="../public/imgs/illustration-features-tab-2.png" alt="" />
      </div>
    </div>
    <div class="relative">
      <div
        class="w-2/5 h-80 bg-indigo-500 absolute hidden lg:block right-0 bottom-20 rounded-l-full"
      ></div>
    </div>
    <div class="container mx-auto">
      <div class="flex flex-col my-12 lg:flex lg:flex-row lg:space-x-24 gap-10">
        <div class="flex justify-center lg:justify-end w-full lg:w-1/2 z-10">
          <img src="../public/imgs/illustration-features-tab-3.png" alt="" />
        </div>
        <div
          class="flex flex-col flex-wrap lg:items-start items-center my-auto gap-3 w-full lg:w-1/2"
        >
          <h2 class="text-3xl lg:text-left text-center">
            Share your bookmarks
          </h2>
          <p class="text-gray-400 lg:w-3/5 w-full text-center">
            Easily share your bookmarks and collections with others. Create a
            shareable link that you can send at the click of a button.
          </p>
          <button
            type="button"
            class="py-3 px-2 w-28 rounded-md text-sm text-white bg-indigo-500 uppercase"
          >
            More Info
          </button>
        </div>
      </div>
    </div>
    <div class="relative">
      <div
        class="absolute rounded-r-full h-80 w-2/5 hidden lg:block bg-indigo-500 -bottom-20"
      ></div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
