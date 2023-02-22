<template>
    <div class="flex items-center">
        <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
            <Icon :name="locale.icon" />
        </NuxtLink>
    </div>
</template>

<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
    return (locales.value).filter(i => i.code !== locale.value)
})
</script>

<style scoped>
.iconify {
    width: 1.2em;
    height: 1.2em;
}
</style>
