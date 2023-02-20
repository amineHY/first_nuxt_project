<template>
  <header class="shadow-2xl font-sans">
    <nav class="container mx-auto p-4 flex justify-between">
      <!-- Navbar right side -->
      <NuxtLink to="/" class="font-bold">Amine</NuxtLink>

      <!-- Navbar left side -->
      <div class="flex gap-4">
        <NavbarMenu />


        <!-- Theme color support -->
        <ColorModePicker />
      </div>
    </nav>
  </header>
</template>

<script setup>
const localePath = useLocalePath();
const { t } = useI18n()
</script>

<style>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}

.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
</style>
