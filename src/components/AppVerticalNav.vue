<script setup>
import { ref } from 'vue'
const expandDocumentMg = ref(false)
const expandSecretariat = ref(false)
</script>

<template lang="">
<aside class="fixed top-0 left-0 h-screen w-[240px] bg-[#0F151F] px-4 py-12 font-poppins font-semibold text-white">

    <div class=" flex flex-col justify-center items-center">
        <img src="../assets/company-logo.svg" alt="Home" class="w-32 " />
    </div>

    <div class="mt-10 text-center mx-3 flex space-x-3 ">
        <p>New Folder</p>
        <img src="../assets/green-yellow-plus.svg" alt="">
    </div>

    <ul class="font-sm mt-4 h-full space-y-8 text-base ">
        <li>
            <router-link :to="{name: 'home'}" class="space-x-2 flex">
                <img src="../assets/home.svg" alt="">
                <span>Home</span>
            </router-link>
        </li>
        <li>
            <div class="flex space-x-2 cursor-pointer "   @click="expandDocumentMg = !expandDocumentMg">
                <img src="../assets/document-icon.svg" alt="">
                <span>Document Manager</span>
                <img src="../assets/arrow-down.svg" alt="">
            </div>
            <ul v-if="expandDocumentMg" class="px-4">
                <li>
                    <div class="space-x-2 my-2 flex py-2 cursor-pointer" @click="expandSecretariat = !expandSecretariat">
                        <img src="../assets/group-people.svg" alt="">
                        <span>Secretariat</span>
                        <img src="../assets/arrow-down.svg" alt="">
                    </div>

                    <ul v-if="expandSecretariat" class="pb-5 space-y-2 px-4 ">
                        <li>
                            <router-link :to="{name: 'members'}" class="space-x-2 flex">
                                <img src="../assets/people.svg" alt="">
                                <span>Members</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'sent'}" class="space-x-2 flex">
                                <img src="../assets/sent.svg" alt="">
                                <span>Sent</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'signed'}" class="space-x-2 flex">
                                <img src="../assets/white-edit.svg" alt="">
                                <span>Signed</span>
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <router-link :to="{name: 'home'}" class="space-x-2 flex">
                        <img src="../assets/group-people.svg" alt="">
                        <span>Department 1</span>
                    </router-link>
                </li>
                <!-- <li>
                    <router-link :to="{name: 'home'}" class="space-x-2 flex">
                        <img src="../assets/document-icon.svg" alt="">
                        <span>Sent</span>
                        <img src="../assets/arrow-down.svg" alt="">
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'home'}" class="space-x-2 flex">
                        <img src="../assets/document-icon.svg" alt="">
                        <span>Signed</span>
                        <img src="../assets/arrow-down.svg" alt="">
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'home'}" class="space-x-2 flex">
                        <img src="../assets/document-icon.svg" alt="">
                        <span>Department 1</span>
                        <img src="../assets/arrow-down.svg" alt="">
                    </router-link>
                </li> -->
            </ul>
        </li>


        <li>
            <div class="flex space-x-2 cursor-pointer" >
                <img src="../assets/group-people.svg" alt="">
                <span>Departments</span>
                <img src="../assets/arrow-down.svg" alt="">

            </div>
            <ul >
                <!-- <li>
                    <router-link :to="{name: 'home'}" class="space-x-2 flex">
                        <img src="../assets/document-icon.svg" alt="">
                        <span>Secretariat</span>
                        <img src="../assets/arrow-down.svg" alt="">
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'home'}" class="space-x-2 flex">
                        <img src="../assets/document-icon.svg" alt="">
                        <span>Members</span>
                        <img src="../assets/arrow-down.svg" alt="">
                    </router-link>
                </li> -->
               
            </ul>
        </li>

        <li>
            <router-link :to="{name: 'secure-folder'}" class="space-x-2 flex">
                <img src="../assets/lock-icon.svg" alt="">
                <span>Secure Folder</span>
            </router-link>
        </li>
        <li>
            <router-link :to="{name: 'account-setting'}" class="space-x-2 flex">
                <img src="../assets/settings-icon.svg" alt="">
                <span>Account Settings</span>
            </router-link>
        </li>
        <li>
            <router-link :to="{name: 'home'}" class="space-x-2 flex">
                <img src="../assets/logout.svg" alt="">
                <span>Logout</span>
            </router-link>

        </li>
    </ul>

</aside>
</template>

<style lang=""></style>
