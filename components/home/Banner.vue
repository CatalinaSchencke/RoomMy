<template>
  <section
    class="bg-none lg:bg-[url('/home/girl-sitting.png')] w-full  bg-center bg-no-repeat bg-contain h-[80vh] lg:h-[85vh]">
    <div class="grid h-full my-auto max-w-screen-xl w-full px-10 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="flex flex-col my-5 mx-auto self-items-center md:mr-auto place-self-center lg:col-span-7">
        <h1 class="max-w-2xl mb-4 text-[50px] text-center font-extrabold tracking-tight leading-none text-darken-blue">
          ¡Encuentra tu hogar compartido ideal!
        </h1>
        <p class="text-center font-medium max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl">
          Desde encontrar a un compañero para compartir hasta arriendar una habitación o propiedad completa.
        </p>
        <div class="flex justify-center">
          <nuxt-link to="/autenticacion/registrarse"
            class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg  bg-darken-blue hover:bg-primary-blue focus:ring-4 focus:ring-primary-300">
            Comienza Aquí
            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>