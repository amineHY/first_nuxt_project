<template>
    <div class="nav-links flex justify-between">
        <div class="nav-link mr-4">
            <NuxtLink :to="localePath('/', 'fr')">{{ $t("home") }}</NuxtLink>
        </div>

        <div class="nav-link">
            <NuxtLink :to="localePath('/about')">{{ $t("about") }}</NuxtLink>
        </div>
    </div>
</template>


<script setup>

const localePath = useLocalePath();
</script>

<style  scoped>
.nav-link a {
    @apply font-bold text-lg;
}
</style>