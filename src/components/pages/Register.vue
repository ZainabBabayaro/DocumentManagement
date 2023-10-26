<script setup>

</script>

<template>
    <div class="grid md:grid-cols-2 max-h-fit">
        <div class="w-full h-full z-10 portait transparent-bg bg-[#1C1C1C]/10 ">
            <!-- <img class="portait  lg:h-screen md:h-[800px] md:w-full lg:w-[1000px] w-0 h-0 "
                src="../../assets/portrait-bg.svg"> -->
        </div>
        <div class=" py-14 p-5 font-sans  px-6 lg:px-20 lg:space-y-5 space-y-7">
            <div class="flex flex-col justify-center items-center">
                <img src="../../assets/company-logo.svg" alt="" class="w-44">
                <h2 class="underline font-semibold text-2xl pt-5 font-poppins">REGISTER</h2>
            </div>

            <p class="text-sm font-light pt-4 ">Kindly provide correct details.</p>

            <div class="grid grid-cols-5 gap-2">
                <fieldset class=" p-1  w-full flex border border-[#23272B] rounded col-span-1">
                    <legend class="text-xs"><label for="">Title</label></legend>
                    <img src="../../assets/profile-Icon.svg" alt="" class="p-1 ">
                    <input type="text" class="form-control w-full focus:border-blue-500 ">
                </fieldset>
                <fieldset class=" p-1  w-full flex border border-[#23272B] rounded col-span-2">
                    <legend class="text-xs"><label for=""> First Name</label></legend>
                    <img src="../../assets/profile-Icon.svg" alt="" class="p-1 ">
                    <input type="text" class="form-control w-full focus:border-blue-500 ">
                </fieldset>
                <fieldset class="p-1  w-full flex border border-[#23272B] rounded col-span-2">
                    <legend class="text-xs"><label for="">Last Name</label></legend>
                    <img src="../../assets/profile-Icon.svg" alt="" class="p-1 ">
                    <input type="text" class="form-control w-full focus:border-blue-500 ">
                </fieldset>
            </div>

            <div>
                <fieldset class=" p-1 mb-5 w-full flex border border-[#23272B] rounded">
                    <legend class="text-xs"><label for="">E-mail</label></legend>
                    <img src="../../assets/profile-Icon.svg" alt="" class="p-1 ">
                    <input type="text" class="form-control w-full focus:border-blue-500 ">
                </fieldset>
                <fieldset class=" p-1 mb-5 w-full flex border border-[#23272B] rounded">
                    <legend class="text-xs"><label for="">Department</label></legend>
                    <img src="../../assets/profile-Icon.svg" alt="" class="p-1 ">
                    <input type="text" class="form-control w-full focus:border-blue-500 ">
                </fieldset>
                <fieldset class="m-0 p-1  flex border border-[#23272B] rounded">
                    <legend class="text-xs"><label for="">Password</label></legend>
                    <img src="../../assets/profile-Icon.svg" alt="" class="p-1 ">
                    <input type="text" class="form-control w-full focus:border-blue-500 ">
                </fieldset>

                <div class="text-xs grid grid-cols-2 py-4 ">
                    <div>
                        <input type="checkbox" name="" id="">
                        <label for="" class=" px-2">Remember Me</label>
                    </div>

                </div>

                <p class="text-xs">Already have an account? <router-link :to="{ name: 'register' }" class="font-bold">
                        Login</router-link>.
                </p>

            </div>
            <div
                class="text-xs border border-green-500 text-center bg-green-500 font-bold text-white rounded-md px-24 py-3 mt-10">
                REGISTER
            </div>

        </div>
    </div>
</template>

<style scoped>
.form-control {
    fill: none;
    background: transparent;
    border: none;
    outline: none;
}

.portait {
    background-image: url('../../assets/portrait-bg.svg');

}
</style>