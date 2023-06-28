<template>
  <header class="[&+*]:mt-32">
    <!-- Definimos un navbar sticky con el mismo background en gradiente que el fondo de la página  -->
    <nav class="bg-[url('/nav-bg.png')] w-full fixed top-0 z-10 border-gray-200  py-2 px-4 sm:px-6  ">
      <div class="flex flex-wrap items-center justify-between mx-auto  px-6 sm:py-1 lg:py-0 rounded ">
        <!-- Separamos los items de la izquierda (Logo, Links de interes) con los botones (Registro e Inicio Sesión) -->
        <div class="flex items-center flex-shrink-0 text-gray-800 mr-6 ">
          <nuxt-link to="/" class="flex items-center">
            <img src="/logo.png" class="h-4 mr-5 sm:h-10" alt="RoomMy Logo" />
          </nuxt-link>
          <div class="items-center  hidden w-full lg:flex md:w-auto md:order-1" id="navbar-cta">
            <ul
              class="flex flex-col p-4 mt-4 border text-sm border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0 ">
              <li>
                <nuxt-link to="#comoFunciona" class="block pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent
                  md:hover:text-primary-blue md:p-0">
                  ¿Cómo funciona?
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="#nosotros"
                  class="block pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-blue md:p-0">
                  Sobre Nosotros
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="#contacto"
                  class="block pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-blue md:p-0">
                  Contacto
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="!userStore.loggedIn" class="flex md:order-2 items-center">
          <nuxt-link to="/autenticacion/registrarse">
            <button type="button"
              class="hidden md:block mr-3 text-gray-500 hover:text-primary-blue focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2 text-center px-5   ">
              Registrarse
            </button>
          </nuxt-link>
          <nuxt-link to="/autenticacion/login">
            <button type="button"
              class=" rounded-full  text-white bg-darken-blue hover:bg-primary-blue  focus:outline-none font-medium  text-sm px-5 py-2 text-center mr-3 md:mr-0">
              Iniciar Sesión
            </button>
          </nuxt-link>
          <button data-collapse-toggle="navbar-cta" type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg ml-3 lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-cta" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div v-else class="flex items-center md:order-2 gap-x-3">
          <p class=" text-gray-500 font-semibold">{{ userStore.user.name }}</p>
          <img src="/rectangle-vertical-gray.svg" class="h-auto" alt="">
          <p class=" text-gray-600 font-semibold">Roomie</p>
          <div class="border-4 w-[65px] h-[65px] overflow-hidden border-gray-200 rounded-full inline-block bg-[#F1D6A0]">
            <img class="h-[70px] object-cover" src="/girl.png" alt="" />
          </div>
          <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
          <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
            class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto">Dropdown
            <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg></button>
          <!-- Dropdown menu -->
          <!-- <div id="dropdownNavbar"
            class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
            <ul class="py-2 text-sm text-gray-700 " aria-labelledby="dropdownLargeButton">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Dashboard</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Settings</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Earnings</a>
              </li>
            </ul>
            <div class="py-1">
              <a href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign
                out</a>
            </div>
          </div> -->
          <button data-collapse-toggle="navbar-cta" type="button"
            class="hidden md:inline-flex items-center p-2 text-sm text-gray-500 rounded-lg ml-3 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
  <!-- <header v-else class="[&+*]:mt-32">
    <nav class="bg-[url('/nav-bg.png')] w-full fixed top-0 z-10 border-gray-200 px-2  sm:px-6 py-2 rounded ">
      <div class="flex flex-wrap items-center justify-between mx-auto px-6 sm:py-2.5 rounded ">
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
          <p class=" text-gray-500 font-semibold">{{ userStore.user.name }}</p>
          <img src="/rectangle-vertical-gray.svg" class="h-auto" alt="">
          <p class=" text-gray-600 font-semibold">Roomie</p>
          <div class="border-4 w-[65px] h-[65px] overflow-hidden border-gray-200 rounded-full inline-block bg-[#F1D6A0]">
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
  </header> -->
</template>
<script setup>
import { useUserStore } from '~/stores/UserStore';

const userStore = useUserStore();
</script>