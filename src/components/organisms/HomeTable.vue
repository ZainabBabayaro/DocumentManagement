<script setup>
import TableHead from '../atoms/TableHead.vue'
import TableData from '../atoms/TableData.vue'
</script>

<template>
    <div>
        <p class="text-green-400  flex justify-end p-2 text-base">View All</p>

        <div class="p-10 bg-[#FAFAFA] rounded-[10px]">
            <div>
            </div>
            <table class="table-auto w-full text-center font-sans text-base ">
                <thead class="text-gray-500">
                    <tr>
                        <TableHead label="s/n" />
                        <TableHead label="name" />
                        <TableHead label="owner" />
                        <TableHead label="file size" />
                        <TableHead label="date" />
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-primary-gray">
                        <TableData label="1." />
                        <TableData label="Website Design.png" />
                        <div class="flex  justify-center">
                            <img src="../../assets/profile-pic.svg" alt="" class="w-8">
                            <TableData label="Peter Tamuno" />
                        </div>
                        <TableData label="2.8 MB"></TableData>
                        <TableData label="Dec 13, 2022" />
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


