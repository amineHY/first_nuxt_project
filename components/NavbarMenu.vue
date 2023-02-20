<template>
    <NuxtLink :to="localePath('/')">{{ $t("home") }}</NuxtLink>
    <NuxtLink :to="localePath('about')">{{ $t("about") }}</NuxtLink>
    <NuxtLink :to="localePath('blog')">{{ $t("blog") }}</NuxtLink>
    <NuxtLink :to="localePath('publication')">{{
        $t("publication")
    }}</NuxtLink>
</template>

<script setup>
const localePath = useLocalePath();

</script>

<style  scoped></style>