<template>
    <div class="  ml-20 lg:my-48">
        <div class="flex flex-col justify-start items-start  h-full">
            <h2 class="max-w-2xl  text-[45px]  text-start font-bold tracking-tight leading-none text-darken-blue">
                Para comenzar, <br>
                coméntanos tu nombre
            </h2>
            <form class="flex flex-col lg:flex-row gap-x-4  mt-6">
                <!-- Nombre -->
                <div class="flex flex-col">
                    <label class="font-bold  text-gray-500 mb-2" for="name">Nombre</label>
                    <input
                        class="text-base text-gray-800 p-3 w-[300px] h-10 outline outline-2 outline-gray-200 rounded-md mb-4"
                        type="text" id="name" name="name" placeholder="Jane" required>
                </div>
                <!-- Apellido -->
                <div class="flex flex-col">
                    <label class="font-bold text-gray-500 mb-2" for="password-1">Apellido</label>
                    <input
                        class="text-base text-gray-800 p-3 w-[300px] h-10 outline outline-2 outline-gray-200 rounded-md mb-4"
                        type="text" id="lastname" name="lastname" placeholder="Doe" required>
                </div>
            </form>
        </div>
    </div>
</template>