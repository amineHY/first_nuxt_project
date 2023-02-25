<template>
    <footer class="fixed bottom-0 w-full ">
        <div class="container mx-auto p-4 flex justify-between">
            <div>&copy; {{ copyright }} </div>
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
    </footer>
</template>

<script setup lang="ts">
const copyright = "2023 by Amine HY"
const github_url = "https://github.com/amineHY";
const linkedin_url = "https://www.linkedin.com/in/aminehy/";
const email_address = "mailto:hadjyoucef.amine@gmail.com";
</script>