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

        <!-- Social media icons -->
        <!-- <div class="flex gap-4">
          <NuxtLink to="mailto:hadjyoucef.amine@gmail.com" aria-label="Email">
            <Icon name="ic:baseline-email" />
          </NuxtLink>
          <NuxtLink to="https://github.com/aminehy" aria-label="GitHub">
            <Icon name="uil:github" />
          </NuxtLink>
          <NuxtLink to="https://www.linkedin.com/in/aminehy/" aria-label="LinkedIn">
            <Icon name="uil:linkedin" />
          </NuxtLink>
        </div> -->
      </div>
    </nav>
  </header>
</template>

<script setup>
const localePath = useLocalePath();
const { t } = useI18n();
</script>

<style scoped>
.fixed {
  position: fixed;
  top: 0;
  left: 0;
}

.w-full {
  width: 100%;
}

.gap-4>*+* {
  margin-left: 1rem;
}

/* Media query for smaller devices */
@media (max-width: 640px) {
  .gap-4 {
    flex-direction: column;
    align-items: center;
  }

  .gap-4>*+* {
    margin-left: 0;
    margin-top: 1rem;
  }
}
</style>
