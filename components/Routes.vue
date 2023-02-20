<template>
    <div class="text-left">
        <h2>Available Routes:</h2>
        <ul class=" text-left mx-auto">
            <li v-for="route in $router.options.routes" :key="route.path">
                <router-link :to="route.path">{{ route.path }} - {{ route.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>

</script>

<style scoped></style>
