<template>
  <section class="flex flex-col flex-wrap gap-y-2 lg:flex lg:flex-row lg:justify-center lg:gap-x-8 lg:mx-2 lg:mb-8">
    <div class=" lg:w-[25%] lg:h-auto  lg:relative grid justify-items-center">
      <img src="/home/dorm.jpg" alt="" class="hidden lg:block rounded-[40px]">
      <nuxt-link href="form/parte1"
        class="drop-shadow-md flex justify-center lg:absolute lg:top-[82%] bg-white w-[80%] rounded-full lg:py-2">
        <button class="text-center  lg:font-medium">
          Arriendo una <b>habitación</b>
        </button>
      </nuxt-link>
    </div>
    <div class=" lg:w-[25%] lg:h-auto lg:relative grid justify-items-center">
      <img src="/home/roomie.jpg" alt="" class="hidden lg:block rounded-[40px]">
      <nuxt-link to="/form/parte1"
        class="drop-shadow-md flex justify-center lg:absolute lg:top-[82%] bg-white w-[80%] rounded-full lg:py-2">
        <button class="text-center lg:font-medium">
          Busco <b>Roomie</b>
        </button>
      </nuxt-link>
    </div>
    <div class=" lg:w-[25%] lg:h-auto lg:relative grid justify-items-center">
      <img src="home/property.jpg" alt="" class="hidden lg:block rounded-[40px]">
      <nuxt-link to="/form/parte1"
        class="drop-shadow-md flex justify-center lg:absolute lg:top-[82%] bg-white w-[80%] rounded-full lg:py-2">
        <button class="text-center lg:font-medium">
          Arriendo una <b>Propiedad</b>
        </button>
      </nuxt-link>
    </div>
  </section>
</template>