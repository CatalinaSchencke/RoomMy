<template>
    <section class="py-24 sm:py-32 mx-auto max-w-7xl w-11/12 md:w-10/12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 place-items-start">
            <div class="bg-white rounded-t-xl drop-shadow-xl">
                <HomeCommonAccordionElement v-for="element in accordionData" :key="element.id"
                    @toggle-accordion="toggleAccordion" :id="element.id" :title="element.title" :content="element.content"
                    :open="element.open" />
            </div>
            <div>
                <div
                    class="grid grid-cols-2 grid-rows-2 place-items-center gap-x-4 bg-white/[.75] rounded-t-xl px-5  w-auto mb-6">
                    <div class="mr-5">
                        <p class="text-right">
                            {{ currentlyOpenAccordionDescription }}
                        </p>
                    </div>
                    <div class="">
                        <img class="object-cover h-[300px] w-full" src="/home/option-1-1.png" alt="">
                    </div>
                    <div class="">
                        <img src="/home/option-1-2.png" alt="" class="object-cover h-[200px] w-full rounded-[40px]">
                    </div>
                    <div class="ml-5">
                        <p class="text-left">
                            Cuando termines de configurarlo, te haremos recomendaciones de personas que buscan lo
                            mismo que tú y cumplen con tus preferencias.
                            <br> Podrás enviar y recibir solicitudes.
                        </p>
                    </div>
                </div>
                <div class="grid justify-center ">
                    <p class="font-medium text-xl justify-self-center">Si aceptas una solicitud...</p>
                    <img src="/home/RoomMy-match.png" class="h-auto w-full object-contain" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

import { ref } from 'vue';
import data from '../../assets/data/accordion-data.json';

const accordionData = ref(data);
const currentlyOpenAccordionDescription = ref(accordionData.value[0].description);

const toggleAccordion = (id) => {
    accordionData.value = accordionData.value.map(element => {
        if (element.id == id) {
            element = { ...element, open: !element.open };
            if (element.open == true) {
                currentlyOpenAccordionDescription.value = element.description;
            }
        }
        else {
            element = { ...element, open: false };
        }

        return element;
    });
};

</script>