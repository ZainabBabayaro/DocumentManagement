<script setup>
import { ref } from 'vue'
import AppLayout from '../../layouts/AppLayout.vue'
import AppHorizontalNav from '../../components/AppHorizontalNav.vue'
import SearchAndFilter from '../molecules/SearchAndFilter.vue';
import ProgressCard from '../organisms/ProgressCard.vue';
import FileUpload from '../organisms/FileUpload.vue';
import HomeTable from '../organisms/HomeTable.vue'
const cardData = ref(
    [
        {
            textColor: "text-[#1AA4C8]",
            image: "<img src='../../../src/assets/blue-galary.svg'>",
            title: "Images",
        }, {
            textColor: "text-[#4CD080]",
            image: "<img src='../../../src/assets/green-file.svg'>",
            title: "Documents",
        },
        {
            textColor: "text-[#FFAE58]",
            image: "<img src='../../../src/assets/orange-video.svg' >",
            title: "Videos",
        }
    ]
);
</script>

<template>
    <div>
        <AppHorizontalNav />
        <AppLayout>
            <template v-slot:main-content>
                <main class="w-full font-poppins">
                    <section class="mt-24 ">
                        <h1 class="text-3xl font-semibold mb-10"> Welcome Amb. Adamu,</h1>
                        <SearchAndFilter class="" />
                    </section>
                    <div class="mx-8">
                        <section class="grid grid-cols-3 gap-16  my-10">
                            <ProgressCard v-for="(card, index) in cardData" :key="index" :title="card.title"
                                :textColor="card.textColor" :image="card.image" />
                        </section>
                        <section>
                            <p class="text-2xl my-10 font-semibold">Upload Files</p>
                            <FileUpload />
                        </section>
                        <section>
                            <HomeTable />
                        </section>
                    </div>

                </main>
            </template>
        </AppLayout>
    </div>
</template>
<!-- <style scoped></style> -->