<!-- home component page -->
<template>
    <div>
        <h2>Bienvenu Root</h2>

        <figure class="md:flex rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img class="md:w-60 md:h-60 mx-auto" src="https://aminehy.github.io/assets/images/photo_linkedin_2020.png"
                alt="" />
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                <p class="text-lg font-medium">
                    “Bonjour, je m'appelle <strong>Amine Hadj-Youcef</strong>. Je fournis
                    des services de consultation, mentorat et formation, pour les
                    d'entreprise en définissant leurs besoins métiers et en les traduisant
                    en solutions techniques en Data Science et intelligence Artificielle.
                    Je suis spécialisé dans la collecte, l'analyse et l'exploration de
                    données, ainsi que dans la conception de tableaux de bord analytiques
                    et la production de solutions de ML sur le cloud. Mon expertise
                    s'étend également à la gestion de projet, en mettant l'accent sur le
                    suivi, la direction et l'atteinte des objectifs et des délais du
                    projet.”
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
