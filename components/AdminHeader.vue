<template>
    <header class="[&+*]:mt-32">
        <!-- Definimos un navbar sticky con el mismo background en gradiente que el fondo de la página  -->
        <nav class="bg-[url('/nav-bg.png')] w-full border-gray-200 py-2 px-4 sm:px-6">
            <div class="flex items-center justify-center px-6 py-2">
                <nuxt-link to="/" class="flex flex-col items-center">
                    <img src="/logo.png" class="h-10 mb-1" alt="RoomMy Logo" />
                    <p class="tracking-widest text-sm">Administrador</p>
                </nuxt-link>
            </div>
        </nav>
    </header>
</template>