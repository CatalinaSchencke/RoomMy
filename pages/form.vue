<template>
    <header class="[&+*]:mt-32">
        <!-- Definimos un navbar sticky conbackground blanco-->
        <div class="bg-white w-full fixed top-0 z-10 border-gray-200 px-2  sm:px-6 py-2 rounded ">
            <div class="flex flex-wrap items-center justify-center mx-auto px-6 sm:py-2.5 rounded ">
                <nuxt-link to="/" class="flex items-center">
                    <img src="/logo.png" class="h-8 mr-5 sm:h-10" alt="RoomMy Logo" />
                </nuxt-link>
            </div>
        </div>
    </header>
    <NuxtPage />
    <div class="absolute bottom-0  w-full">
        <p class="text-right mb-4 mr-10 font-semibold">1/3</p>
        <div class="">
            <img class="absolute w-[100%] h-2 object-cover" src="/bar-gray.svg" alt="">
            <img class="relative w-[33%] h-2 object-cover " src="/bar-blue.svg" alt="">
        </div>
        <div class="flex w-[100%] justify-between my-4 px-10">

            <nuxt-link to="/">
                <button
                    class="text-gray-500 hover:text-primary-blue focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md text-center">
                    Volver
                </button>
            </nuxt-link>
            <!-- Redirección a Inicio porque no está implementada interfaz de el inicio loggeado como perfil "Ofrezco" -->
            <nuxt-link to="/dashboard">
                <button
                    class="rounded-full text-white bg-darken-blue hover:bg-primary-blue  focus:outline-none focus:ring-blue-300 font-medium  text-base px-5 py-2.5 text-center mr-3 md:mr-0">
                    Continuar
                </button>
            </nuxt-link>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: false,
});
</script>