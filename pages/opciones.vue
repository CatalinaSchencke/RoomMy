<template>
    <div class="w-screen h-screen grid grid-cols-1 place-content-center">
        <!-- Div Bienvenidos -->
        <div class="grid justify-self-center mt-6">
            <div class="flex gap-x-4 justify-center items-center ">
                <img class="w-[20%] h-1 object-cover lg:w-[150px] lg:h-1" src="/rectangle-gray.svg" alt="">
                <p class="text-xl font-semibold text-gray-500 lg:text-lg mb-2">Bienvenido</p>
                <img class="w-[20%] h-1 object-cover lg:w-[150px] lg:h-1" src="/rectangle-gray.svg" alt="">
            </div>
            <p class="text-center font-bold text-xl lg:text-4xl">¿Qué buscas hacer en RoomMy?</p>
        </div>
        <!-- Div Opciones -->
        <div
            class="flex flex-col flex-wrap gap-y-2 lg:flex lg:flex-row lg:justify-center lg:gap-x-8 lg:mx-2 mt-14 lg:mb-8 drop-shadow-xl">
            <div class=" lg:w-[18%] lg:h-auto  lg:relative grid justify-items-center">
                <img src="/home/dorm.jpg" alt="" class="hidden lg:block rounded-[40px]">
                <nuxt-link to="/form/parte1"
                    class="drop-shadow-md flex justify-center lg:absolute lg:top-[82%] bg-white w-[80%] rounded-full  lg:py-2">
                    <button class="text-center text-lg [1024px]-[1390px]:text-[10px] lg:text-base lg:font-medium">
                        Arriendo una <b>habitación</b>
                    </button>
                </nuxt-link>
            </div>
            <div class=" lg:w-[18%] lg:h-auto lg:relative grid justify-items-center">
                <img src="/home/roomie.jpg" alt="" class="hidden lg:block rounded-[40px]">
                <nuxt-link to="/form/parte1"
                    class="drop-shadow-md flex justify-center lg:absolute lg:top-[82%] bg-white w-[80%] rounded-full lg:py-2">
                    <button class="text-center text-lg [1024px]-[1390px]:text-[10px] lg:text-base  lg:font-medium">
                        Busco <b>Roomie</b>
                    </button>
                </nuxt-link>
            </div>
            <div class=" lg:w-[18%] lg:h-auto lg:relative grid justify-items-center">
                <img src="/home/property.jpg" alt="" class="hidden lg:block rounded-[40px]">
                <nuxt-link to="/form/parte1" href="profiles/offer/part1.html"
                    class="drop-shadow-md flex justify-center lg:absolute lg:top-[82%] bg-white w-[80%] rounded-full lg:py-2">
                    <button class="text-center text-lg [1024px]-[1390px]:text-[10px] lg:text-base lg:font-medium">
                        Arriendo una <b>Propiedad</b>
                    </button>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>