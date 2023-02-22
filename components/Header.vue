<template>
  <header class="font-sans">
    <nav class="container mx-auto p-4 flex justify-between items-center">
      <!-- Navbar left side -->
      <NuxtLink to="/" class="font-bold text-lg">
        <Icon name="ic:round-home" />
      </NuxtLink>

      <!-- Navbar right side -->
      <div class="">
        <NavbarMenu />
      </div>

      <div class="flex justify-between">
        <!-- Language switcher support -->
        <LangSwitcherV2 />

        <!-- Theme color support -->
        <ColorModePicker />
      </div>
    </nav>
  </header>
</template>

<script setup>

</script>

<style></style>