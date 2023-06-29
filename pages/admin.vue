<template>
    <div class="max-w-7xl w-11/12 mx-auto my-32">
        <div>
            <h2 class="mb-10 font-bold text-3xl">Manejar usuarios</h2>
            <div class="grid grid-cols-3 p-4">
                <p>Nombre</p>
                <p>Correo</p>
                <!-- <p>Editar</p> -->
                <p>Eliminar</p>
            </div>
            <div class="rounded-xl border shadow divide-y-2">
                <div v-for="user in data.users" :key="user.id">
                    <div class="grid grid-cols-3 p-4">
                        <p>{{ user.name }}</p>
                        <p>{{ user.email }}</p>
                        <!-- <div>
                            <button @click="editarNombre" class=" bg-vivid-blue rounded-lg py-1 px-5 text-white">
                                Editar
                            </button>
                        </div> -->
                        <div>
                            <button @click="eliminarUsuario(user.id)"
                                class="bg-red-500 rounded-lg py-1 px-5 text-white">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="deleteResponse.show" class="text-green-600 text-center my-5 text-lg font-medium">
                <p>{{ deleteResponse.message }}</p>
            </div>

        </div>
    </div>
</template>
<script setup>

definePageMeta({
    layout: "admin",
});

import { ref } from 'vue';

const { data, refresh } = await useFetch('http://localhost:3001/users');

const deleteResponse = ref({
    message: '',
    show: false,
});

const eliminarUsuario = async (userId) => {
    useFetch(`http://localhost:3001/delete-user`, {
        method: 'PUT',
        body: {
            id: userId,
        },
        onResponse: (response) => {
            const data = response.response._data;
            refresh();
            deleteResponse.value.message = data.message;
            deleteResponse.value.show = true;
        },
    });
}

</script>