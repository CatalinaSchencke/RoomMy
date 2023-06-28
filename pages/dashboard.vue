<template>
    <div class="flex flex-col mx-14 gap-x-0 gap-y-10 my-20">
        <!-- Titulo bienvenida -->
        <h1 class="text-4xl font-bold text-gray-800 ">¡Bienvenida de vuelta, {{ userStore.user.name }}!</h1>
        <!-- Sección de recomendaciones de roomies-->
        <div>
            <p class="text-2xl font-bold text-gray-800 mb-4">Roomies recomendados</p>
            <div v-if="recommendedRoomies.length > 0" class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div v-for="(roomie) in recommendedRoomies" :key="roomie.id"
                    class="lg:max-w-sm p-6 grid grid-cols-1 bg-white border border-gray-200 rounded-lg shadow">
                    <button type="button" @click="removeRecommendedRoomie(roomie.id)"
                        class="inline-flex font-medium justify-end text-gray-500 hover:text-primary-blue rounded-lg text-md mr-0">
                        Descartar
                    </button>
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{{ roomie.name }}</h5>
                    </a>
                    <ul class="list-image-[url('/checkmark.png')] list-inside ml-0 mb-6">
                        <li v-for="characteristic in roomie.characteristics">
                            {{ characteristic }}
                        </li>
                    </ul>
                    <div class="inline-flex justify-end">
                        <button @click="removeRecommendedRoomie(roomie.id)"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-vivid-blue hover:bg-darken-blue">
                            Enviar solicitud
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div v-else class="shadow border p-3 rounded-lg">
                <p class="text-gray-600 text-xl font-semibold">No hay roomies recomendados por ahora</p>
            </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Sección de Solicitudes de roomies enviadas -->
            <div>
                <h3 class="text-2xl font-bold text-gray-800 mb-4">Solicitudes recibidas</h3>
                <div v-if="sentRequests.length > 0" class="grid grid-cols-1 xl:grid-cols-2 gap-2">
                    <div v-for="sentRequest in sentRequests" :key="sentRequest.id"
                        class="flex items-center justify-between gap-2 p-2 bg-white border border-gray-200 rounded-lg shadow">
                        <div class="flex items-center gap-x-4">
                            <div
                                class="border-4 w-[75px] h-[75px] overflow-hidden border-gray-200 rounded-full inline-block bg-[#F1D6A0]">
                                <img class="h-[80px] object-cover" src="/girl.png" :alt="sentRequest.name" />
                            </div>
                            <p class=" text-gray-500 text-2xl font-semibold">{{ sentRequest.name }}</p>
                        </div>
                        <button @click="removeSentRequest(sentRequest.id)"
                            class="inline-flex px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-vivid-blue hover:bg-darken-blue ">
                            Cancelar
                        </button>
                    </div>
                </div>
                <div v-else class="shadow border p-3 rounded-lg">
                    <p class="text-gray-600 text-xl font-semibold">No hay solicitudes recibidas</p>
                </div>

            </div>

            <!-- Sección de Solicitudes de roomies recibidas -->
            <div>
                <h3 class="text-2xl font-bold text-gray-800 mb-4">Solicitudes recibidas</h3>
                <div v-if="receivedRequests.length > 0" class="grid grid-cols-1 xl:grid-cols-2 gap-2">
                    <div v-for="receivedRequest in receivedRequests" :key="receivedRequest.id"
                        class="flex items-center justify-between gap-2 p-2 bg-white border border-gray-200 rounded-lg shadow">
                        <div class="flex items-center gap-x-4">
                            <div
                                class="border-4 w-[75px] h-[75px] overflow-hidden border-gray-200 rounded-full inline-block bg-[#F1D6A0]">
                                <img class="h-[80px] object-cover" src="/girl.png" :alt="receivedRequest.name" />
                            </div>
                            <p class=" text-gray-500 text-2xl font-semibold">{{ receivedRequest.name }}</p>
                        </div>
                        <button @click="removeReceivedRequest(receivedRequest.id)"
                            class="inline-flex px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-vivid-blue hover:bg-darken-blue ">
                            Aceptar
                        </button>
                    </div>

                </div>
                <div v-else class="shadow border p-3 rounded-lg">
                    <p class="text-gray-600 text-xl font-semibold">No hay solicitudes recibidas</p>
                </div>

            </div>

        </div>
        <!-- <div>
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Propiedades recomendadas</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <div v-for="recommendedPropertie in recommendedProperties" :key="recommendedPropertie.id"
                    class="bg-white border border-gray-200 rounded-lg shadow">
                    <a href="#">
                        <img class="rounded-t-lg" src="/house.jpg" :alt="recommendedPropertie.id" />
                    </a>
                    <div class="p-5 space-y-2">
                        <a href="#">
                            <h5 class="text-2xl font-bold tracking-tight text-gray-900 ">{{ recommendedPropertie.title }}
                            </h5>
                        </a>
                        <p class="text-gray-700 ">{{ recommendedPropertie.description }}</p>
                        <a href="#"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-vivid-blue hover:bg-darken-blue">
                            Más información
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>
<script setup>

import recommendedRoomiesData from "~/assets/data/recommended-roomies.json";
import sentRequestsData from "~/assets/data/sent-requests.json";
import receivedRequestsData from "~/assets/data/received-requests.json";
// import recommendedPropertiesData from "~/assets/data/recommended-properties.json"
import { useUserStore } from "~/stores/UserStore";

import { ref } from 'vue';

const userStore = useUserStore();

const recommendedRoomies = ref(recommendedRoomiesData);
const sentRequests = ref(sentRequestsData);
const receivedRequests = ref(receivedRequestsData);
// const recommendedProperties = ref(recommendedPropertiesData);

const removeRecommendedRoomie = (id) => {
    recommendedRoomies.value = recommendedRoomies.value.filter((roomie) => roomie.id !== id);
};

const removeSentRequest = (id) => {
    sentRequests.value = sentRequests.value.filter((sentRequest) => sentRequest.id !== id);
};

const removeReceivedRequest = (id) => {
    receivedRequests.value = receivedRequests.value.filter((receivedRequest) => receivedRequest.id !== id);
};

</script>