<script setup>
defineProps(['percentage'])
</script>

<template>
    <div class="flex items-center w-1/5 gap-x-2">
        <div class="bg-gray-300 w-full rounded-full">
            <div class="bg-primary-green h-3 rounded-l-full" :class="{ 'rounded-r-full': percentage > 97 }"
                :style="`width: ${percentage}%`"></div>
        </div>
        <div class="text-sm">{{ percentage }}%</div>
    </div>
</template>
