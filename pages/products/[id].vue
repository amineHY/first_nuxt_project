<!-- /products/:id -->
<template>
    <div>
        <p>Product details for {{ id }}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ea, numquam officiis laborum exercitationem
            debitis. Voluptatem totam id amet qui eius tempora, sed harum ad pariatur! Optio nisi vel facere.</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params
definePageMeta({
    layout: 'products'
})
</script>

<style scoped></style>