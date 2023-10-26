<script setup>
const props = defineProps({
    textColor: "",
    image: "",
    title: "",
    storage: ""
})

</script>

<template>
    <div class="bg-[#FAFAFA] p-5 rounded-lg font-poppins">
        <div class="mb-9 flex space-x-3">
            <div v-html="props.image"></div>
            <div class="text-sm">
                <p>{{ props.title }}</p>
                <p class="text-[#B3B3B3] text-[10px]">Using 10 % storage</p>
            </div>
        </div>

        <div class="py-4">
            <div class="border-b-8 rounded-md  border-gray-400">
                <div class="bg-red-600 rounded-md "></div>
            </div>

        </div>

        <div class="flex justify-between text-[10px] mb-9 " :class="[props.textColor]">
            <p>8 GB</p>
            <p>30 GB</p>
        </div>

        <div class="flex ">
            <img src="../../assets/clock-icon.svg" alt="">
            <p class="text-[#B3B3B3] px-2 text-[10px]">Last update : 12 Jan 2021</p>
        </div>
    </div>
</template>