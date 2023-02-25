<!-- home component page -->
<template>
    <section>
        <div
            class="container flex flex-col mx-auto justify-center items-center p-5 mt-10 space-y-1 md:space-y-0 md:flex-row">
            <!-- left item -->
            <div
                style="margin: auto; width: 350px; height: 350px; border-radius: 50%; overflow: hidden;  box-shadow: 1px 1px 62px 11px #00dc82ff;">
                <img :src="profile_picture" alt="" style="max-width: 100%; height: 100%; object-fit: cover" />
            </div>

            <!-- right item : image-->
            <div class="flex flex-col pt-6 md:p-8 space-y-5 mx-auto" style="width: 70%">
                <p class="text-lg font-sans">{{ $t("description") }}</p>
                <div class="font-medium">
                    <div class="">{{ full_name }}</div>
                    <div class="">{{ job_title }}</div>
                </div>
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

<style scoped></style>
