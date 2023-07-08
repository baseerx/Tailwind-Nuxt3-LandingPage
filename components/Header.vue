<template>
  <header class="container-fluid">
    <nav class="static lg:w-4/5 2xl:w-3/5 lg:mx-auto bg-white py-20 flex justify-between">
     
        <div class="flex items-center px-4">
            <img src="../public/imgs/logo-bookmark.svg" alt="logo">
        </div>
     
      <div class="hidden sm:block text-sm uppercase">
       <ul class="flex items-center space-x-8">
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact</li>
            <li><button type="button" class="py-3 px-6 text-white bg-red-500 rounded-md mx-4 uppercase">Login</button></li>
       </ul>
      </div>
      <div class="sm:hidden block px-2">
        <Icon name="majesticons:menu" color="black" class="w-10 h-10" />
      </div>
    
    </nav>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
