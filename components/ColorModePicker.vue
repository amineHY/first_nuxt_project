<template>
    <div>
        <ul>
            <li v-for="theme of ['light', 'dark', 'system']" :key="theme" :class="{
                preferred: !$colorMode.unknown && theme === $colorMode.preference,
                selected: !$colorMode.unknown && theme === $colorMode.value
            }">
                <component :is="`icon-${theme}`" @click="$colorMode.preference = theme" />
            </li>
        </ul>
    </div>
</template>

<style scoped>
ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

ul li {
    display: inline-block;
    padding: 5px;
}

p {
    margin: 0;
    padding-top: 5px;
    padding-bottom: 20px;
}

.feather {
    position: relative;
    top: 0px;
    cursor: pointer;
    padding: 5px;
    background-color: var(--bg-secondary);
    border: 2px solid var(--border-color);
    margin: 0;
    border-radius: 5px;
    transition: all 0.1s ease;
}

.feather:hover {
    top: -3px;
}

.preferred .feather {
    border-color: var(--color-primary);
    top: -3px;
}

.selected .feather {
    color: var(--color-primary);
}
</style>