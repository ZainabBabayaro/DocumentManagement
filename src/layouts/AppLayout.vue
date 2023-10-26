<script setup>
import AppVerticalNav from '../components/AppVerticalNav.vue'
import AppHorizontalNav from '../components/AppHorizontalNav.vue'
</script>

<template>
    <main class="flex items-start pb-24 pl-[240px] ">
        <AppVerticalNav />
        <main class="w-full p-10 ">
            <slot name="main-content" />
        </main>
    </main>
</template>
