<template>
    <footer>
        <!-- fixed bottom-0 w-full items-center justify-between  -->
        <div class="relative bottom-0 w-full container mx-auto">
            <div class="flex justify-between items-center">
                <div>
                    &copy; {{ copyright }}
                </div>
                <div>
                    <!-- Language switcher support -->
                    <LangSwitcherV2 />
                </div>

                <div>
                    <!-- Theme color support -->
                    <ColorModePicker />
                </div>
            </div>

        </div>

    </footer>
</template>

<script setup lang="ts">
const copyright = "2023 by Amine HY"
</script>


<style scoped>
.nav-link a {
    @apply font-bold text-lg;
}
</style>