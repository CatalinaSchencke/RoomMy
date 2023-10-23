<template>
    <div class="grid grid-cols-1 lg:grid-cols-2">
        <div>
            <CommonPill class="inline-flex py-1 px-4 mb-4 bg-secondary">
                <p>En construcción</p>
            </CommonPill>
            <h2 class="text-[min(10vw,70px)]  text-primary-700 font-bold leading-tight">¡Nos pillaste
                desprevenidos!</h2>
            <div class="my-4 leading-loose text-tertiary">
                <p>Aún estamos trabajando para brindar la mejor solución del sector de vivienda.</p>
                <p>Mientras tanto, ¿quieres conocer más de nosotros?</p>
            </div>
            <div class="flex flex-col">
                <a href="#">
                    <CommonPill class="mt-4 bg-primary py-3 px-4">
                        <p>Ver prototipo de RoomMy</p>
                    </CommonPill>
                </a>
                <nuxt-link to="/funcionamiento">
                    <CommonPill class="mt-4 bg-primary py-3 px-4">
                        <p>Conoce como funcionaremos</p>
                    </CommonPill>
                </nuxt-link>
            </div>
            <div>
                <div class="mt-14 font-bold text-primary-700 text-center">
                    <h3 class="text-xl">¿Nos quieres ayudar a brindar la mejor solución?</h3>
                    <p>Te invitamos a responder alguna de las siguientes encuestas:</p>
                </div>
                <div class="flex flex-col items-center gap-y-3 mt-5">
                    <a href="#">
                        <CommonPill class="inline-flex bg-secondary py-2 px-10">
                            <p>
                                Busco compañeros
                                <br />
                                de vivienda
                            </p>
                        </CommonPill>
                    </a>
                    <a href="#">
                        <CommonPill class="inline-flex bg-secondary py-2 px-10">
                            <p>
                                Busco arrendar
                                <br />
                                una vivienda
                            </p>
                        </CommonPill>
                    </a>
                </div>
            </div>
        </div>
        <div class="mt-14 lg:mt-0">
            <img src="/girl-standing-questioning-2.png" class="w-full md:w-7/12 lg:w-9/12 mx-auto lg:mr-0"
                alt="girl standing" />
            <form class="mt-7 w-full sm:w-10/12 lg:w-9/12 mx-auto" @submit.prevent>
                <div class="flex flex-col md:flex-row gap-2">
                    <input class="col-span-3 w-full border border-gray-400 px-4 py-3 rounded-md placeholder:text-tertiary"
                        type="text" placeholder="Correo electrónico" />
                    <CommonButton class="py-3" text="Suscribirse" />
                </div>
                <p class="text-sm mt-3 text-tertiary leading-relaxed">Registra tu correo si quieres ser notificado en cuanto
                    estemos listos.
                    <br />
                    ¡Sé de los primeros en probar esta tecnología revolucionaria!
                </p>
            </form>
        </div>
    </div>
</template>