<!-- home component page -->
<template>
    <section>

        <div
            class="container flex flex-col mx-auto justify-center items-center p-2 mt-1 space-y-1 md:space-y-0 md:flex-row">
            <!-- left item -->
            <div class="w-2/3 mx-auto md:w-2/6">
                <img :src="profile_picture" alt=""
                    style="margin: auto; width: 350px; height: 350px; border-radius:
                                                            50%; overflow: hidden; box-shadow: 1px 1px 62px 11px #00dc82ff;" />
            </div>

            <!-- right item -->
            <div class="flex flex-col pt-0  space-y-7 mx-auto w-2/3 md:p-8 md:w-4/6 md:flex-col">
                <p class="text-xl font-sans">
                    {{ $t("description") }}
                </p>
                <div>
                    <p class="font-bold text-2xl">
                        {{ full_name }}
                    </p>
                    <p class="text-xl">{{ job_title }}</p>
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
