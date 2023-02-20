<!-- home component page -->
<template>
    <div>
        <h2>Welcome</h2>

        <figure class="md:flex rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img class="md:w-60 md:h-60 mx-auto" src="https://aminehy.github.io/assets/images/photo_linkedin_2020.png"
                alt="" />
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                <p class="text-lg font-medium">
                    “Hello, my name is Amine Hadj-Youcef. I provide consulting and support for business teams, defining
                    their needs and translating them into technical solutions in Data Science and Machine Learning. I
                    specialize in data collection, analysis, and exploration, as well as the design of analytical dashboards
                    and the production of ML solutions on the cloud. My expertise also extends to project management, with a
                    focus on tracking, direction, and meeting project goals and deadlines.”
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
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();
const { locale } = useI18n();

// definePageMeta({
//     colorMode: "light",
// });
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
