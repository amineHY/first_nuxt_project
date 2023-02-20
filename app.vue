<template>
    <Header />

    <!-- display main -->
    <br>
    <br>
    <figure class="md:flex">
        <img class="md:w-60 md:h-60 mx-auto" src="https://aminehy.github.io/assets/images/photo_linkedin_2020.png" alt="" />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <p class="text-lg font-sans">{{ $t("description") }}</p>
            <figcaption class="font-medium">
                <div class="">Amine Hadj-Youcef</div>
                <div class="">Lead Data Scientist</div>
            </figcaption>
        </div>
    </figure>

    <!-- display routes -->
    <br>
    <br>
    <Routes />

    <!-- display footer -->
    <Footer />
</template>

<script setup>

</script>

<style scoped></style>