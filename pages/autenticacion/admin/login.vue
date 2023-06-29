<template>
    <div class="max-w-xl w-10/12 mx-auto h-[75vh]">
        <div class="flex h-full items-center justify-center">
            <form class="space-y-7 flex-grow" @submit.prevent>
                <div>
                    <label class="block mb-2 font-medium" for="email">Correo electrónico</label>
                    <input class="w-full bg-white shadow rounded-xl px-6 py-4 outline-none" type="text" name="email"
                        id="email" placeholder="Ingresa tu correo electrónico" v-model="formData.email"
                        @change="v$.email.$touch" :class="{
                            'border-2 border-red-400': v$.email.$error,
                            'border-blue-400': !v$.email.$invalid,
                        }" />
                    <div v -if=" v$.email.$errors" class="pt-2">
                        <ul class="text-red-500 text-xs">
                            <li v-for=" error  in  v$.email.$errors " :key="error.$uid">
                                {{ error.$message }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <label class="block mb-2 font-medium" for="password">Contraseña</label>
                    <input class="w-full bg-white shadow rounded-xl px-6 py-4 outline-none" type="password" name="password"
                        id="password" placeholder="*  *  *  *  *  *  *  *  *" v-model="formData.password"
                        @change="v$.password.$touch" :class="{
                            'border-2 border-red-400': v$.password.$error,
                            'border-blue-400': !v$.password.$invalid,
                        }" />
                    <div v-if="v$.password.$errors" class="pt-2">
                        <ul class="text-red-500 text-xs">
                            <li v-for=" error  in  v$.password.$errors " :key="error.$uid">
                                {{ error.$message }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex justify-center">
                    <button @click="login"
                        class=" bg-primary-blue text-white rounded-lg px-10 py-2 disabled:cursor-not-allowed disabled:bg-primary-blue/50"
                        type="submit" :disabled="v$.$invalid">Iniciar
                        Sesión</button>
                </div>
                <div v-if="error.login" class="border-2 border-red-400 rounded-lg px-3 py-2 text-sm ">
                    <p class="text-red-600 text-center">{{ error.loginMessage }}</p>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: "admin",
});

import { computed } from 'vue';
import { required, email, minLength, helpers } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { useAdminStore } from '~/stores/AdminStore';

const adminStore = useAdminStore();
const uri = 'http://localhost:3001/login-admin'

const router = useRouter();

const error = reactive({
    login: false,
    loginMessage: "",
});

const formData = reactive({
    email: '',
    password: ''
})

const login = async () => {
    const { data } = await useFetch(uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData,
    });

    const response = data.value;

    if (response.error) {
        error.login = true;
        error.loginMessage = response.message;
        return;
    }

    const name = response.name;
    adminStore.setName(name);
    adminStore.setLoggedIn(true);
    router.push({ path: '/admin' });
}

const rules = computed(() => {
    return {
        email: {
            required: helpers.withMessage('El email es requerido', required),
            email: helpers.withMessage('El formato del correo no es correcto', email),
        },
        password: {
            required: helpers.withMessage('La contraseña es requerida', required),
            minLength: helpers.withMessage('El tamaño de la contraseña debe ser de mínimo 6 caracteres', minLength(6))
        },
    };
});

const v$ = useVuelidate(rules, formData);

</script>