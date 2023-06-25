<template>
  <header class="[&+*]:mt-20">
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
                <nuxt-link to="/como-funciona"
                  class="block  pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-blue md:p-0">
                  ¿Cómo funciona?
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/nosotros"
                  class="block pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-blue md:p-0">
                  Sobre Nosotros
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/contacto"
                  class="block pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-blue md:p-0">
                  Contacto
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex md:order-2 items-center">
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
      </div>
    </nav>
  </header>
</template>