<!-- home component page -->
<template>
    <div>
    <!-- 
        <div>
            <form>
                <select v-model="locale">
                    <option value="en">en</option>
                    <option value="fr">fr</option>
                </select>
                <p>{{ $t("welcome") }}</p>
            </form>
                    </div> -->



        <figure class="md:flex rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img class="md:w-60 md:h-60 mx-auto" src="https://aminehy.github.io/assets/images/photo_linkedin_2020.png"
                alt="" />
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                <p class="text-lg font-medium">
                    {{ $t("description") }}
                </p>
                <figcaption class="font-medium">
                    <div class="text-sky-500 dark:text-sky-400">Amine Hadj-Youcef</div>
                    <div class="text-white-700 dark:text-slate-500">
                        Lead Data Scientist
                    </div>
                </figcaption>
            </div>
        </figure>
    </div>
</template>

<script setup>
// definePageMeta({
//     colorMode: "light",

import LangSwitcher from "~~/components/LangSwitcher.vue";

// });

const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const { locale } = useI18n();
const localeRoute = useLocaleRoute()

function onClick() {
    const route = localeRoute({ name: "blog" });
    if (route) {
        return navigateTo(route.fullPath);
    }
}
</script>

<style scoped>
h2 {
    font-size: 36px;
    margin-bottom: 20px;
}

p {
    margin-bottom: 10px;
}
</style>
