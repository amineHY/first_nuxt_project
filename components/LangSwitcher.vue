<template>
    <form class="flex justify-between px-4">
        <select v-model="locale" @change="switchLanguage">
            <option value="en">🇺🇸</option>
            <option value="fr">🇫🇷</option>
        </select>
    </form>
</template>

<script setup>
const { locale, locales, t } = useI18n();
// const switchLocalePath = useSwitchLocalePath();

// const availableLocales = computed(() =>
//     locales.value.filter((i) => i.code !== locale.value)
// );
</script>

<style  scoped></style>