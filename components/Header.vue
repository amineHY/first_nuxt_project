<template>
  <header class="shadow-2xl font-sans">
    <nav class="container mx-auto p-4 flex justify-between">
      <!-- Navbar right side -->
      <NuxtLink to="/" class="font-bold">Amine</NuxtLink>

      <!-- Navbar left side -->
      <div class="flex gap-4">
        <NavbarMenu />

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