<template>
    <NuxtLink :to="localePath('/', 'fr')">{{ $t("home") }}</NuxtLink>
    <NuxtLink :to="localePath('/about')">{{ $t("about") }}</NuxtLink>
    <NuxtLink :to="localePath('/blog')">{{ $t("blog") }}</NuxtLink>
    <NuxtLink :to="localePath('publication')">{{
        $t("publication")
    }}</NuxtLink>
    <nuxt-link to="/routes">Routes</nuxt-link>

    <!-- Language switcher support -->
    <LangSwitcherV2 />
</template>

<script setup>

const localePath = useLocalePath();
// console.log('localPath ', localePath)
</script>

<style  scoped></style>