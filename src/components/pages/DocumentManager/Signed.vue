<script setup>
import TableHead from '../../atoms/TableHead.vue'
import TableData from '../../atoms/TableData.vue'
import AppLayout from '../../../layouts/AppLayout.vue';
import AppHorizontalNav from '../../AppHorizontalNav.vue';
import SearchAndFilter from '../../molecules/SearchAndFilter.vue';
</script>


<template>
    <div>
        <AppHorizontalNav />
        <AppLayout>
            <template v-slot:main-content>
                <main class="w-full font-poppins">
                    <section class="mt-24 ">
                        <SearchAndFilter class="" />
                    </section>
                    <div class="mx-8">
                        <section>
                            <p class="text-2xl mt-10 mb-3 font-semibold">Members</p>
                        </section>
                        <section>
                            <div>
                                <p class=" flex justify-end p-2 text-base">View All</p>

                                <div class="p-10 bg-[#FAFAFA] rounded-[10px]">
                                    <div>
                                    </div>
                                    <table class="table-auto w-full text-center font-sans text-base ">
                                        <thead class="text-gray-500">
                                            <tr>
                                                <TableHead label="s/n" />
                                                <TableHead label="name" />
                                                <TableHead label="title" />
                                                <TableHead label="date added" />
                                                <TableHead label="status" />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="border-b border-primary-gray">
                                                <TableData label="1." />
                                                <TableData label="Website Design.png" />
                                                <div class="flex  justify-center">
                                                    <img src="../../../assets/profile-pic.svg" alt="" class="w-8">
                                                    <TableData label="Peter Tamuno" />
                                                </div>
                                                <TableData label="Dec 13, 2022" />
                                                <TableData label="Approved" class="text-green-400"></TableData>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>
                    </div>

                </main>
            </template>
        </AppLayout>
    </div>
</template>
