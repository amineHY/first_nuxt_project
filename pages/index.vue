<!-- home component page -->
<template>
    <div>


        <div
            style="margin: auto; width: 200px; height: 200px; border-radius: 50%; overflow: hidden;  box-shadow: 1px 1px 62px 11px #00dc82ff;">
            <img src="https://aminehy.github.io/assets/images/photo_linkedin_2020.png" alt=""
                style="max-width: 100%; height: 100%; object-fit: cover" />
        </div>
        <br>

        <div style="margin: auto; width:50%; border-top-width: 4px; border-top-style: solid; border-top-color: #00dc82ff;"
            class="pt-6 md:p-8 space-y-4">
            <p class="text-lg font-sans">{{ $t("description") }}</p>
            <div class="font-medium">
                <div class="">Amine Hadj-Youcef. PhD</div>
                <div class="">Lead Data Scientist</div>
            </div>
        </div>

        <!-- display routes -->
        <br />

        <!-- <Routes /> -->
    </div>
</template>

<script setup></script>

<style scoped></style>
