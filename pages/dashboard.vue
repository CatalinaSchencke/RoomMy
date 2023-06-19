<template>
    <div class="flex flex-col mx-14 gap-x-0 gap-y-10 my-20">
        <!-- Titulo bienvenida -->
        <h1 class="text-4xl font-bold text-gray-800 ">¡Bienvenida de vuelta, Jane Doe!</h1>
        <!-- Sección de recomendaciones de roomies-->
        <div>
            <p class="text-2xl font-bold text-gray-800 mb-4">Roomies recomendados</p>
            <div class="grid grid-flow-row gap-y-4 lg:grid-cols-4">
                <div class="w-full lg:max-w-sm p-6 grid grid-cols-1 bg-white border border-gray-200 rounded-lg shadow ">
                    <button type="button"
                        class="inline-flex font-medium  justify-end text-gray-500 hover:text-primary-blue  rounded-lg text-md mr-0  ">
                        Descartar
                    </button>
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Alan Doe</h5>
                    </a>
                    <ul class="list-image-[url('/checkmark.png')] list-inside ml-0 mb-6">
                        <li>Hombre</li>
                        <li>Acepta mascotas</li>
                        <li>Presupuesto similar</li>
                        <li>Misma búsqueda de localización</li>
                    </ul>
                    <div class="inline-flex justify-end">
                        <a href="#"
                            class=" inline-flex items-center px-3 w-[45%] py-2 text-sm font-medium text-center text-white  rounded-lg bg-vivid-blue hover:bg-darken-blue ">
                            Enviar solicitud
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="w-full lg:max-w-sm p-6 grid grid-cols-1 bg-white border border-gray-200 rounded-lg shadow ">
                    <button type="button"
                        class="inline-flex justify-end text-gray-500 hover:text-primary-blue font-medium  rounded-lg text-md mr-0  ">
                        Descartar
                    </button>
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Jamie Doe</h5>
                    </a>
                    <ul class="list-image-[url('/checkmark.png')] list-inside ml-0 mb-6">
                        <li>No binario</li>
                        <li>Tiene una mascota</li>
                        <li>Presupuesto similar</li>
                        <li>2/3 localidades similares</li>
                    </ul>
                    <div class="inline-flex justify-end">
                        <a href="#"
                            class=" inline-flex items-center px-3 w-[45%] py-2 text-sm font-medium text-center text-white rounded-lg bg-vivid-blue hover:bg-darken-blue">
                            Enviar solicitud
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="w-full lg:max-w-sm p-6 grid grid-cols-1 bg-white border border-gray-200 rounded-lg shadow ">
                    <button type="button"
                        class="inline-flex justify-end text-gray-500 hover:text-primary-blue  font-medium rounded-lg text-md mr-0  ">
                        Descartar
                    </button>
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Mary Doe</h5>
                    </a>
                    <ul class="list-image-[url('/checkmark.png')] list-inside ml-0 mb-6">
                        <li>Mujer</li>
                        <li>Estudiante</li>
                        <li>Presupuesto similar</li>
                        <li>Misma búsqueda de localización</li>
                    </ul>
                    <div class="inline-flex justify-end">
                        <a href="#"
                            class=" inline-flex items-center px-3 w-[45%] py-2 text-sm font-medium text-center text-white  rounded-lg bg-vivid-blue hover:bg-darken-blue">
                            Enviar solicitud
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="w-full lg:max-w-sm p-6 grid grid-cols-1 bg-white border border-gray-200 rounded-lg shadow ">
                    <button type="button"
                        class="inline-flex justify-end text-gray-500 hover:text-primary-blue font-medium rounded-lg text-md mr-0  ">
                        Descartar
                    </button>
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Elizabeth Doe</h5>
                    </a>
                    <ul class="list-image-[url('/checkmark.png')] list-inside ml-0 mb-6">
                        <li>Mujer</li>
                        <li>Busca con 2 personas más</li>
                        <li>Presupuesto similar</li>
                        <li>2/3 localidades similares</li>
                    </ul>
                    <div class="inline-flex justify-end">
                        <a href="#"
                            class=" inline-flex items-center px-3 w-[45%] py-2 text-sm font-medium text-center text-white rounded-lg bg-vivid-blue hover:bg-darken-blue">
                            Enviar solicitud
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-flow-row lg:grid-cols-2 gap-4">
            <!-- Sección de Solicitudes de roomies enviadas -->
            <div>
                <p class="text-2xl font-bold text-gray-800 mb-4">Solicitudes enviadas</p>
                <div class="grid grid-flow-row lg:grid-cols-2 gap-y-2">
                    <div
                        class="w-[100%] lg:max-w-sm  p-2 bg-white border border-gray-200 rounded-lg flex flex-row items-center gap-x-2 shadow ">
                        <div
                            class="border-4 w-[75px] h-[75px] overflow-hidden border-gray-200 rounded-full inline-block bg-[#F1D6A0]">
                            <img class="h-[80px] object-cover" src="/girl.png" alt="" />
                        </div>
                        <p class=" text-gray-500 text-2xl font-semibold">Jane Doe</p>
                    </div>
                    <div
                        class="w-[100%] lg:max-w-sm  p-2 bg-white border border-gray-200 rounded-lg flex flex-row items-center gap-x-2 shadow ">
                        <div
                            class="border-4 w-[75px] h-[75px] overflow-hidden border-gray-200 rounded-full inline-block bg-[#F1D6A0]">
                            <img class="h-[80px] object-cover" src="/girl.png" alt="" />
                        </div>
                        <p class=" text-gray-500 text-2xl font-semibold">Jane Doe</p>
                    </div>

                </div>
            </div>
            <!-- Sección de Solicitudes de roomies recibidas -->
            <div>
                <p class="text-2xl font-bold text-gray-800 mb-4">Solicitudes recibidas</p>
                <div class="grid grid-flow-row lg:grid-cols-2 gap-y-2">
                    <div
                        class="w-[100%] lg:max-w-sm  p-2  justify-between bg-white border border-gray-200 rounded-lg flex flex-row items-center gap-x-2 shadow ">
                        <div class="inline-flex items-center gap-x-4">
                            <div
                                class="border-4 w-[75px] h-[75px] overflow-hidden border-gray-200 rounded-full inline-block bg-[#F1D6A0]">
                                <img class="h-[80px] object-cover" src="/girl.png" alt="" />
                            </div>
                            <p class=" text-gray-500 text-2xl font-semibold">Jane Doe</p>
                        </div>
                        <a href="#"
                            class="inline-flex px-3 mr-4 py-2 text-sm font-medium text-center text-white  rounded-lg bg-vivid-blue hover:bg-darken-blue ">
                            Aceptar
                        </a>
                    </div>
                    <div
                        class="w-[100%] lg:max-w-sm  p-2  justify-between bg-white border border-gray-200 rounded-lg flex flex-row items-center gap-x-2 shadow ">
                        <div class="inline-flex items-center gap-x-4">
                            <div
                                class="border-4 w-[75px] h-[75px] overflow-hidden border-gray-200 rounded-full inline-block bg-[#F1D6A0]">
                                <img class="h-[80px] object-cover" src="/girl.png" alt="" />
                            </div>
                            <p class=" text-gray-500 text-2xl font-semibold">Jane Doe</p>
                        </div>
                        <a href="#"
                            class="inline-flex px-3 mr-4 py-2 text-sm font-medium text-center text-white  rounded-lg bg-vivid-blue hover:bg-darken-blue ">
                            Aceptar
                        </a>
                    </div>
                </div>

            </div>

        </div>
        <div>
            <!-- Sección de propiedades recomendadas -->
            <p class="text-2xl font-bold text-gray-800 mb-4">Propiedades recomendadas</p>
            <!-- Card de propiedades -->
            <div class="grid grid-flow-row gap-y-4 lg:grid-cols-4 ">
                <div class="w-full lg:max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                    <a href="#">
                        <img class="rounded-t-lg" src="/house.jpg" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Propiedad 1</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Neque magni ut adipisci laboriosam vitae quae ex iure amet pariatur sunt, optio perferendis
                            doloremque molestias magnam. Qui odit doloribus soluta iste!</p>
                        <a href="#"
                            class=" inline-flex items-center px-3 w-[45%] py-2 text-sm font-medium text-center text-white  rounded-lg bg-vivid-blue hover:bg-darken-blue ">
                            Más información
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="w-full lg:max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                    <a href="#">
                        <img class="rounded-t-lg" src="/house.jpg" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Propiedad 1</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Neque magni ut adipisci laboriosam vitae quae ex iure amet pariatur sunt, optio perferendis
                            doloremque molestias magnam. Qui odit doloribus soluta iste!</p>
                        <a href="#"
                            class=" inline-flex items-center px-3 w-[45%] py-2 text-sm font-medium text-center text-white  rounded-lg bg-vivid-blue hover:bg-darken-blue ">
                            Más información
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="w-full lg:max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                    <a href="#">
                        <img class="rounded-t-lg" src="/house.jpg" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Propiedad 1</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Neque magni ut adipisci laboriosam vitae quae ex iure amet pariatur sunt, optio perferendis
                            doloremque molestias magnam. Qui odit doloribus soluta iste!</p>
                        <a href="#"
                            class=" inline-flex items-center px-3 w-[45%] py-2 text-sm font-medium text-center text-white  rounded-lg bg-vivid-blue hover:bg-darken-blue ">
                            Más información
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="w-full lg:max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                    <a href="#">
                        <img class="rounded-t-lg" src="/house.jpg" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Propiedad 1</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Neque magni ut adipisci laboriosam vitae quae ex iure amet pariatur sunt, optio perferendis
                            doloremque molestias magnam. Qui odit doloribus soluta iste!</p>
                        <a href="#"
                            class=" inline-flex items-center px-3 w-[45%] py-2 text-sm font-medium text-center text-white  rounded-lg bg-vivid-blue hover:bg-darken-blue ">
                            Más información
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: "dash",
});
</script>