<template>
    <div>
        <Header />

        <div class="px-10 pt-10 pb-40 md:pt-44 lg:pb-56 lg:pt-36 text-center z-20">
            <slot />
        </div>

        <Footer />
    </div>
</template>

<script setup></script>

<style scoped>
/* body {
    background-image: linear-gradient(to bottom right, #87f1ff, #78ffd6) !important;
} */
</style>
