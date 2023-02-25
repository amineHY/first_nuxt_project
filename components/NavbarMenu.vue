<template>
    <nav class="relative container mx-auto p-6">
        <div class="flex justify-between items-center">

            <!-- Navbar left side -->
            <div class="nav-link hover:bg-slate-700">
                <NuxtLink to="/">
                    أمين <!-- <Icon name="ic:round-home" /> -->
                </NuxtLink>
            </div>

            <!-- Navbar center side -->
            <div class="hidden md:flex space-x-6">

                <div class="  nav-link">
                    <NuxtLink :to="localePath('/', 'fr')">{{ $t("home") }}</NuxtLink>
                </div>

                <div class=" nav-link">
                    <NuxtLink :to="localePath('/about')">{{ $t("about") }}</NuxtLink>
                </div>


            </div>

            <div class="">
                <div class="flex gap-4">
                    <NuxtLink :to="email_address">
                        <Icon name="ic:baseline-email" />
                    </NuxtLink>

                    <NuxtLink :to="github_url">
                        <Icon name="uil:github" />
                    </NuxtLink>
                    <NuxtLink :to="linkedin_url">
                        <Icon name="uil:linkedin" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </nav>
</template>


<script setup>

const localePath = useLocalePath();
const github_url = "https://github.com/amineHY";
const linkedin_url = "https://www.linkedin.com/in/aminehy/";
const email_address = "mailto:hadjyoucef.amine@gmail.com";

</script>

<style  scoped>
.nav-link a {
    @apply font-bold text-lg;
}
</style>