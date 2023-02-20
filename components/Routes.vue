<template>
    <div>
        <h2>Available Routes:</h2>
        <ul>
            <li v-for="route in $router.options.routes" :key="route.path">
                <router-link :to="route.path">{{ route.path }} - {{ route.name }}</router-link>
            </li>
        </ul>
    </div>
</template>
