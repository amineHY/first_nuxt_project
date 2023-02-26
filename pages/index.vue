<!-- home component page -->
<template>
    <section>
        <h1 class="text-5xl font-bold  text-center mx-auto pb-10 ">
            {{
                $t("welcome") }}
        </h1>

        <div
            class="container flex flex-col mx-auto justify-center items-center p-5 mt-0 space-y-1 md:space-y-0 md:flex-row">
            <!-- left item -->
            <div class="flex">
                <img :src="profile_picture" alt=""
                    style="margin: auto; max-width: 350px; max-height: 350px; width: auto; height: auto; border-radius: 50%; overflow: hidden; box-shadow: 1px 1px 62px 11px #00dc82ff;" />
            </div>

            <!-- right item -->
            <div
                class="flex flex-col pt-10  mx-auto w-fit justify-center text-left items-center space-y-7   mt-10 md:p-8 md:w-4/6 md:flex-row">

                <div>
                    <p class="flex text-xl font-sans">
                        {{ $t("description") }}
                    </p>
                    <p class="font-bold text-2xl mt-10">
                        {{ full_name }}
                    </p>
                    <p class="text-xl">{{ job_title }}</p>
                </div>
            </div>
        </div>
    </section>

    <section>
        <h1 class="font-bold text-center text-4xl mt-10 mx-auto mb-0 pb-0">{{ $t('trust_us') }}</h1>
        <div
            class="container flex flex-col mt-5 mx-auto justify-center items-center md:flex-col bg-slate-00 md:w-2/3 md:justify-center md:items-center">
            <div
                class="flex flex-col   mx-auto space-x-0 space-y-10 items-center justify-center mt-10 md:flex-row md:space-x-20 md:items-center md:justify-center">
                <img class="image" src="https://upload.wikimedia.org/wikipedia/fr/e/ec/Logo_SNCF_R%C3%A9seau_2015.svg"
                    alt="Logo SNCF R%C3%A9seau 2015">
                <img class="image"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/TAG_Heuer_logo.svg/1200px-TAG_Heuer_logo.svg.png"
                    alt="1200px TAG Heuer logo.svg">
                <img src="https://www.dronevolt.com/wp-content/uploads/2020/01/logo_dronevolt_menu.svg"
                    alt="logo dronevolt menu" class="image">
                <img src="https://www.ias.u-psud.fr/sites/default/files/logoias.jpg" alt="logoias" class="image">
            </div>

            <div
                class="flex flex-col  mx-auto  space-x-0 space-y-5 items-center justify-center mt-10 md:flex-row md:space-x-10">
                <span class="image aspect-auto"><img
                        src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Logo_Universit%C3%A9_Paris-Saclay.svg"
                        alt="Logo Universit%C3%A9 Paris Saclay" class="image"></span>
                <span class="image aspect-auto"><img
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Ecole_Centrale_Supelec_logo.svg"
                        alt="Ecole Centrale Supelec logo" class="image"></span>
                <span class="image aspect-auto"><img
                        src="https://www.etsmtl.ca/getmedia/826e98bf-cb67-4281-8a25-69bdd0038590/Logo_ETS_TypoGrise_D_EN_1"
                        alt="Logo ETS TypoGrise D EN 1" class="image"></span>
                <span class="image aspect-auto"><img src="https://www.math.u-bordeaux.fr/~jcerri/images/logo_imb.png"
                        alt="logo imb" class="image"></span>
                <span class="image aspect-auto"><img
                        src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Universit%C3%A4t_Bordeaux_Logo.svg"
                        alt="Universit%C3%A4t Bordeaux Logo" class="image"></span>
                <span class="image aspect-auto"><img src="https://www.enp.edu.dz/storage/2020/06/logo-ENP-hd-1024x897-1.png"
                        alt="logo ENP hd 1024x897 1" class="image"></span>
                <span class="image aspect-auto"><img
                        src="https://www.esi.dz/wp-content/uploads/2021/04/ESI-Logo-BG-e1627076162748.png"
                        alt="ESI Logo BG e1627076162748" class="image"></span>
            </div>
            <div
                class="flex flex-col  mx-auto  space-x-0 space-y-5 items-center justify-center mt-10 md:flex-row md:space-x-10">
                <span class="image aspect-auto"><img
                        src="https://yt3.ggpht.com/a/AGF-l791eNhIhlL3lHjcx0_P1QCf7JlmKzS37uwJbg=s900-c-k-c0xffffffff-no-rj-mo"
                        alt="AGF l791eNhIhlL3lHjcx0 P1QCf7JlmKzS37uwJbg=s900 c k c0xffffffff no rj mo" width="85"></span>
                <span class="image aspect-auto"><img
                        src="https://i.pinimg.com/736x/2c/a6/c8/2ca6c8d907e76428a30ce6b4aad8f6a6.jpg"
                        alt="2ca6c8d907e76428a30ce6b4aad8f6a6" width="80"></span>
                <span class="image aspect-auto"><img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Atos_Origin_2011_logo.svg/640px-Atos_Origin_2011_logo.svg.png"
                        alt="640px Atos Origin 2011 logo.svg" class="image"></span>
                <span class="image aspect-auto"><img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/46/TF1_logo_2006.svg" alt="TF1 logo 2006"
                        class="image"></span>
                <span class="image aspect-auto"><img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Logo_Bouygues_Immobilier.png"
                        alt="Logo Bouygues Immobilier" class="image"></span>
                <span class="image aspect-auto"><img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Decathlon_Logo.svg/640px-Decathlon_Logo.svg.png"
                        alt="640px Decathlon Logo.svg" class="image"></span>
                <span class="image aspect-auto"><img
                        src="https://lucyinthecloud.com/app/uploads/2020/06/lucy-in-the-cloud-logo.png"
                        alt="lucy in the cloud logo" class="image"></span>
            </div>
        </div>

    </section>
    <!-- display routes -->
    <!-- <Routes /> -->
</template>

<script setup lang="ts">
const full_name = "Amine Hadj-Youcef. PhD"
const job_title = "Lead Data Scientist"
const profile_picture = "https://aminehy.github.io/assets/images/photo_linkedin_2020.png"
</script>

<style scoped>
.container {
    display: flex;
    align-items: stretch;
}

.image {
    width: 150px;
    height: auto;
}
</style>
