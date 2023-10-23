<template>
    <div class="grid grid-cols-2">
        <div>
            <CommonPill class="inline-flex py-1 px-4 mb-4 bg-secondary">
                <p>En construcción</p>
            </CommonPill>
            <h2 class="text-6xl text-primary-700 font-bold leading-tight">¡Nos pillaste desprevenidos!</h2>
            <div class="my-4 leading-loose text-tertiary">
                <p>Aún estamos trabajando para brindar la mejor solución del sector de vivienda.</p>
                <p>Mientras tanto, ¿quieres conocer más de nosotros?</p>
            </div>
            <div class="flex flex-col">
                <a href="#">
                    <CommonPill class="mt-4 bg-primary py-3">
                        <p>Ver prototipo de RoomMy</p>
                    </CommonPill>
                </a>
                <nuxt-link to="/funcionamiento">
                    <CommonPill class="mt-4 bg-primary py-3">
                        <p>Conoce como funcionaremos</p>
                    </CommonPill>
                </nuxt-link>
            </div>
            <div class="mt-16 font-bold text-primary-700 text-center">
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
        <div>
            <img src="/girl-standing-questioning-2.png" class="w-9/12 ml-auto" alt="girl standing" />
            <form class="mt-7 w-9/12 mx-auto" @submit.prevent>
                <div class="flex space-x-2">
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