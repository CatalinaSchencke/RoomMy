<template>
    <section id="contact">
        <div class="mt-20 mb-14">
            <div class="bg-white">
                <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 class="mb-4 text-[50px] text-center font-extrabold leading-none text-darken-blue sm:text-[60px]">
                        Contáctanos
                    </h2>
                    <p class="mb-8 lg:mb-12 font-light text-center text-gray-500 text-xl sm:text-2xl">¿Necesitas ayuda para
                        encontrar un roommate? ¡Háznoslo saber!</p>
                    <form action="#" class="space-y-8 needs-validation">
                        <div>
                            <label for="email" class="block mb-2 font-medium text-gray-900">Tu email</label>
                            <input type="email" id="email" name="email"
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                placeholder="ejemplo@gmail.com" required>

                        </div>
                        <div>
                            <label for="subject" class="block mb-2 font-medium text-gray-900">Asunto</label>
                            <input type="text" name="subject" id="subject"
                                class="block p-3 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                                placeholder="¡Déjanos saber como te podemos ayudar!" required>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block mb-2 font-medium text-gray-900">Tu mensaje</label>
                            <textarea id="message" name="message" rows="6"
                                class="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                                placeholder="Deja un comentario..."></textarea>

                        </div>
                        <input type="submit"
                            class="py-3 px-5 font-medium text-center text-white rounded-lg sm:w-fit bg-darken-blue hover:bg-primary-blue focus:ring-4 focus:ring-primary-300"
                            value="Enviar Mensaje">
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>