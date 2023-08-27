<template>
    <div>
        <Header />
        Some *custom* layout

        <div class="px-10 pt-10 pb-40 md:pt-44 lg:pb-56 lg:pt-36 text-center z-20">
            <slot />
        </div>

        <Footer />
    </div>
</template>

<script setup></script>

<style scoped>
h2 {
    text-align: left;
}
</style>
