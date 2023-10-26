<script setup>
import { ref } from 'vue'
import AppLayout from '../../layouts/AppLayout.vue'
import AppHorizontalNav from '../../components/AppHorizontalNav.vue'
import AppModal from '../../components/AppModal.vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'
// import SearchAndFilter from '../molecules/SearchAndFilter.vue';
// import ProgressCard from '../organisms/ProgressCard.vue';
// import FileUpload from '../organisms/FileUpload.vue';
// import HomeTable from '../organisms/HomeTable.vue'

const uploadOptions = ref(false)

const faqs = [
    {
        question: "Add Signature",
        answer:
            "I don't know, but the flag cupiditate laboriosam fugiat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "Add Members",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "Change Password",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
]
</script>

<template>
    <div>
        <AppHorizontalNav />
        <AppLayout>
            <template v-slot:main-content>
                <main class="w-full font-poppins mt-24 ">
                    <div class="py-8 flex flex-col justify-center items-center">
                        <img src="../../assets/sen-pic.svg" alt="">
                        <p class="text-xl font-semibold">Amb. Adamu Ibrahim Lamuwa</p>
                        <p class="text-base text-gray-400">Permanent Secretary, Ministry of Foreign Affairs</p>
                    </div>
                    <div class="flex justify-around border-b-2 border-green-300 pb-10">
                        <div>
                            <p class="text-base underline text-gray-400 py-2">Work E-mail</p>
                            <p>adamu.l@mfa.gov.ng</p>
                        </div>

                        <div>
                            <p class="text-base underline text-gray-400 py-2">Personal E-mail</p>
                            <p>example.email.com</p>
                        </div>
                        <div>
                            <p class="text-base underline text-gray-400 py-2">Phone Number</p>
                            <p>+234 000 000 0000</p>
                        </div>
                        <div>
                            <p class="text-base underline text-gray-400 py-2">New Detail</p>
                            <div class="flex space-x-2">
                                <p class="text-gray-300 italic ">Write here</p>
                                <img src="../../assets/edit-pen.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <div>

                        <div class="bg-white">
                            <div class="mx-auto  pt-5 ">
                                <div class="mx-auto  divide-y divide-gray-900/10">

                                    <dl class=" space-y-6 divide-y divide-gray-900/10">
                                        <Disclosure as="div" v-for="faq in faqs" :key="faq.question"
                                            class="py-4 px-5 border-none border border-gray-200 p-4 shadow-md rounded-md"
                                            v-slot="{ open }">
                                            <dt>
                                                <DisclosureButton
                                                    class="flex w-full items-start justify-between text-left text-gray-900">
                                                    <span class="text-base font-semibold leading-7">{{ faq.question
                                                    }}</span>
                                                    <span class="ml-6 flex h-7 items-center">
                                                        <img src="../../assets/dropdown.svg" alt="">

                                                    </span>
                                                </DisclosureButton>
                                            </dt>


                                            <DisclosurePanel as="dd" class="mt-2 ">
                                                <div class="grid grid-cols-2 gap-x-20 px-16 pt-4">
                                                    <section @click="uploadOptions = true"
                                                        class="bg-[#FAFAFA] p-7 rounded-lg font-poppins space-y-3 flex flex-col justify-center items-center  mb-12">
                                                        <img src="../../assets/green-upload.svg" alt="">
                                                        <p class="text-xl font-semibold">Drag and drop files, or Browse
                                                        </p>
                                                        <p class="font-light">Supports zip and rar files</p>
                                                    </section>
                                                    <app-modal v-if="uploadOptions">
                                                        <template v-slot:modal-content>
                                                            fnsaklhbcsacjak
                                                        </template>
                                                    </app-modal>
                                                    <section
                                                        class="bg-[#FAFAFA] p-7 rounded-lg space-y-3 mb-12 font-poppins">
                                                        <p class="underline text-xs">View All</p>
                                                        <div>
                                                            <p class="text-center py-2">Type Signature 1</p>
                                                            <div
                                                                class="flex justify-between bg-[#f8f7f7] rounded-md border-l-4 border-green-300">
                                                                <div></div>
                                                                <p class="font-bold ">ADAMU IBRAHIM LAMUWA</p>
                                                                <div>
                                                                    <img src="../../assets/Trash.svg" alt="">
                                                                    <p class="text-[8px]">Delete</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p class="text-xs text-center">Created on 25-May-2023
                                                        </p>

                                                        <div>
                                                            <p class="text-center py-1">Draw Signature 1</p>
                                                            <div
                                                                class="flex justify-between bg-[#f8f7f7] rounded-md border-l-4 border-green-300">
                                                                <div></div>
                                                                <img src="../../assets/sign .svg" alt="">
                                                                <div>
                                                                    <img src="../../assets/Trash.svg" alt="">
                                                                    <p class="text-[8px]">Delete</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p class="text-xs text-center">Created on 25-May-2023
                                                        </p>
                                                        <div>
                                                            <p class="text-center py-1">Draw Signature 1</p>
                                                            <div
                                                                class="flex justify-between bg-[#f8f7f7] rounded-md border-l-4 border-green-300">
                                                                <div></div>
                                                                <img src="../../assets/sign .svg" alt="">
                                                                <div>
                                                                    <img src="../../assets/Trash.svg" alt="">
                                                                    <p class="text-[8px]">Delete</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p class="text-xs text-center">Created on 25-May-2023
                                                        </p>
                                                    </section>
                                                </div>
                                                <!-- <p class="text-base leading-7 text-gray-600">{{ faq.answer }}</p> -->
                                            </DisclosurePanel>
                                        </Disclosure>
                                    </dl>
                                </div>
                            </div>
                        </div>



                    </div>
                </main>
            </template>
        </AppLayout>
    </div>
</template>
<!-- <style scoped></style> -->

r