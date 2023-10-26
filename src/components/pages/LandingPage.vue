<script setup>

</script>

<template>
    <div class="font-sans">
        <main class="landscape text-white flex flex-col justify-end pb-32 px-3 items-center text-center space-y-6 ">
            <h1 class="text-sm font-semibold md:text-2xl">OFFICE OF THE PERMANENT SECRETARY</h1>
            <h2 class="text-2xl font-bold md:text-4xl font-poppins">WELCOME</h2>
        </main>
    </div>
    <div class="flex  justify-center items-center space-x-4 text-base font-bold py-6 mx-3">
        <div class="border border-green-500  rounded-md w-48 flex justify-center items-center p-3">Register</div>
        <router-link :to="{ name: 'login' }" class=" border border-green-500 bg-green-500 text-white rounded-md flex w-48 p-3 justify-center
            items-center">
            Sign In
        </router-link>
    </div>
</template>

<style scoped>
.landscape {
    background-image: url("../../assets/landscape-bg.svg");
    height: 1240px;
    height: 500px;
    border-radius: 0 0 25px 25px;
}

@media only screen and (max-width: 350px) {
    .landscape {
        height: 500px;
    }
}

/* Extra extra small devices (phones, 420px and down) */
@media only screen and (min-width: 410px) {
    .landscape {
        height: 600px;
    }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (min-width: 600px) {
    .landscape {
        height: 600px;
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
/* @media only screen and (min-width: 600px) {
    .landscape {
        height: 900px;
    }
} */

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .landscape {
        height: 750px;
    }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .landscape {
        height: 700px;
    }
}

@media only screen and (min-width: 1000px) {
    .landscape {
        height: 500px;
    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .landscape {
        height: 650px;
    }
}
</style>
