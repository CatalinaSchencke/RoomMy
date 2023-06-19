<template>
    <header class="[&+*]:mt-32">
        <!-- Definimos un navbar sticky con el mismo background en gradiente que el fondo de la página  -->
        <nav class="bg-[url('/nav-bg.png')] w-full fixed top-0 z-10 border-gray-200 px-2  sm:px-6 py-2 rounded ">
            <div class="flex flex-wrap items-center justify-between mx-auto px-6 sm:py-2.5 rounded ">
                <!-- Separamos los items de la izquierda (Logo, Links de interes) con los botones (Registro e Inicio Sesión) -->
                <div class="flex items-center flex-shrink-0 text-gray-800 mr-6 ">
                    <nuxt-link to="/" class="flex items-center">
                        <img src="/logo.png" class="h-6 mr-5 sm:h-9" alt="RoomMy Logo" />
                    </nuxt-link>
                    <div class="items-center  hidden w-full lg:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul
                            class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0 ">
                            <li>
                                <a href="#how-it-works"
                                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-blue md:p-0">
                                    ¿Cómo funciona?
                                </a>
                            </li>
                            <li>
                                <a href="#about"
                                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-blue md:p-0">
                                    Sobre Nosotros
                                </a>
                            </li>
                            <li>
                                <a href="#contact"
                                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-blue md:p-0">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex items-center md:order-2 gap-x-3">
                    <p class=" text-gray-500 font-semibold">Jane Doe</p>
                    <img src="/rectangle-vertical-gray.svg" class="h-auto" alt="">
                    <p class=" text-gray-600 font-semibold">Roomie</p>
                    <div
                        class="border-4 w-[65px] h-[65px] overflow-hidden border-gray-200 rounded-full inline-block bg-[#F1D6A0]">
                        <img class="h-[70px] object-cover" src="/girl.png" alt="" />
                    </div>
                    <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <button data-collapse-toggle="navbar-cta" type="button"
                        class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg ml-3 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-cta" aria-expanded="false">
                        <span class="sr-only">Open options</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    </header>
</template>