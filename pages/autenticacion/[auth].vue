<template>
    <div class="contenedor" ref="container">
        <div class="forms-container">
            <div class="signin-signup">
                <form class="sign-in-form" @submit.prevent>
                    <h2 class="title">Ingresar</h2>
                    <div class="space-y-3">
                        <div>
                            <AuthInputContainer class="grid grid-cols-10" :class="{
                                'border-red-400': v$login.email.$error,
                                'border-blue-400': !v$login.email.$invalid,
                            }">
                                <div class="col-span-1">
                                    <i class="fas fa-user text-gray-400" :class="{
                                        'text-red-400': v$login.email.$error,
                                        'text-blue-400': !v$login.email.$invalid,
                                    }"></i>
                                </div>
                                <div class="col-span-9">
                                    <input class="focus:outline-none text-sm bg-[#f0f0f0] w-full" :class="{
                                    }" type="email" placeholder="Correo electrónico" v-model="loginData.email"
                                        @change="v$login.email.$touch" />
                                </div>
                            </AuthInputContainer>
                            <div v-if="v$login.email.$errors" class="pt-2">
                                <ul class="text-red-500 text-xs">
                                    <li v-for="error in v$login.email.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <AuthInputContainer class="grid grid-cols-10" :class="{
                                'border-red-400': v$login.password.$error,
                                'border-blue-400': !v$login.password.$invalid,
                            }">
                                <div class="col-span-1">
                                    <i class="fas fa-lock text-gray-400" :class="{
                                        'text-red-400': v$login.password.$error,
                                        'text-blue-400': !v$login.password.$invalid,
                                    }"></i>
                                </div>
                                <div>
                                    <input class="focus:outline-none text-sm bg-[#f0f0f0]" type="password" name="password"
                                        placeholder="Contraseña" v-model="loginData.password"
                                        @change="v$login.password.$touch" />
                                </div>
                            </AuthInputContainer>
                            <div v-if="v$login.password.$errors" class="pt-2">
                                <ul class="text-red-500 text-xs">
                                    <li v-for="error in v$login.password.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <CommonButton text="Ingresar" type="submit" @click="login" :disabled="v$login.$invalid" />
                    <div v-if="error.login" class="pt-3">
                        <p class="text-red-500 text-sm">{{ error.loginMessage }}</p>
                    </div>
                    <p class="social-text">O ingresa con alguna de las siguientes plataformas</p>
                    <div class="social-media">
                        <a href="#" class="social-icon">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fab fa-google"></i>
                        </a>

                    </div>
                </form>
                <form class="sign-up-form" novalidate @submit.prevent>
                    <h2 class="title" id="registrarse-title">Registrarse</h2>
                    <div class="space-y-3 campos">
                        <div>
                            <AuthInputContainer class="grid grid-cols-10" :class="{
                                'border-red-400': v$register.name.$error,
                                'border-blue-400': !v$register.name.$invalid,
                            }">
                                <div class="col-span-1">
                                    <i class="fas fa-user text-gray-400" :class="{
                                        'text-red-400': v$register.name.$error,
                                        'text-blue-400': !v$register.name.$invalid,
                                    }"></i>
                                </div>
                                <div class="col-span-9">
                                    <input class="focus:outline-none text-sm bg-[#f0f0f0] w-full" :class="{
                                    }" type="text" placeholder="Nombre de usuario" v-model="registerData.name"
                                        @change="v$register.name.$touch" />
                                </div>
                            </AuthInputContainer>
                            <div v-if="v$register.email.$errors" class="pt-2">
                                <ul class="text-red-500 text-xs">
                                    <li v-for="error in v$register.name.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <AuthInputContainer class="grid grid-cols-10" :class="{
                                'border-red-400': v$register.email.$error,
                                'border-blue-400': !v$register.email.$invalid,
                            }">
                                <div class="col-span-1">
                                    <i class="fas fa-envelope text-gray-400" :class="{
                                        'text-red-400': v$register.email.$error,
                                        'text-blue-400': !v$register.email.$invalid,
                                    }"></i>
                                </div>
                                <div class="col-span-9">
                                    <input class="focus:outline-none text-sm bg-[#f0f0f0] w-full" :class="{
                                    }" type="email" placeholder="Correo electrónico" v-model="registerData.email"
                                        @change="v$register.email.$touch" />
                                </div>
                            </AuthInputContainer>
                            <div v-if="v$register.email.$errors" class="pt-2">
                                <ul class="text-red-500 text-xs">
                                    <li v-for="error in v$register.email.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <AuthInputContainer class="grid grid-cols-10" :class="{
                                'border-red-400': v$register.password.$error,
                                'border-blue-400': !v$register.password.$invalid,
                            }">
                                <div class="col-span-1">
                                    <i class="fas fa-lock text-gray-400" :class="{
                                        'text-red-400': v$register.password.$error,
                                        'text-blue-400': !v$register.password.$invalid,
                                    }"></i>
                                </div>
                                <div>
                                    <input class="focus:outline-none text-sm bg-[#f0f0f0]" type="password" name="password"
                                        placeholder="Contraseña" v-model="registerData.password"
                                        @change="v$register.password.$touch" />
                                </div>
                            </AuthInputContainer>
                            <div v-if="v$register.password.$errors" class="pt-2">
                                <ul class="text-red-500 text-xs">
                                    <li v-for="error in v$register.password.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <CommonButton text="Registrarse" type="submit" :disabled="v$register.$invalid" @click="register" />
                    <div v-if="error.register" class="pt-3">
                        <p class="text-red-500 text-sm">{{ error.registerMessage }}</p>
                    </div>
                    <p class="social-text">O registrate con alguna de las siguientes plataformas</p>
                    <div class="social-media">
                        <a href="#" class="social-icon">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fab fa-google"></i>
                        </a>
                    </div>
                </form>
            </div>
        </div>

        <div class="panels-container">
            <div class="panel left-panel">
                <div class="content content-register">
                    <h3>¿Nuevo aqui?</h3>
                    <p>
                        ¡Empieza por registrarte para comenzar buscando a tu compañero ideal!
                    </p>
                    <button class="btn transparent" id="sign-up-btn" ref="signUpBtn" @click="addSignUpMode">
                        Registrarse
                    </button>
                </div>
                <img src="/auth/houses.png" class="image img-register" alt="" />
            </div>
            <div class="panel right-panel">
                <div class="content content-login">
                    <h3>¿Ya estás registrado?</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        laboriosam ad deleniti.
                    </p>
                    <button class="btn transparent" id="sign-in-btn" ref="signInBtn" @click="removeSignUpMode">
                        Ingresar
                    </button>
                </div>
                <img src="/auth/girl-desk.png" class="image" alt="" />
            </div>
        </div>
    </div>
</template>
<style scoped>
.contenedor {
    width: 100%;
    background-color: #fff;
    height: 100vh;
    position: absolute;
    overflow: hidden;
}

#registrarse-title {
    margin-bottom: 15px;
}

.forms-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.signin-signup {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 75%;
    width: 50%;
    transition: 1s 0.7s ease-in-out;
    display: grid;
    grid-template-columns: 1fr;
    z-index: 5;
}

form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0rem 5rem;
    transition: all 0.2s 0.7s;
    overflow: hidden;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
}

form.sign-up-form {
    opacity: 0;
    z-index: 1;
}

form.sign-in-form {
    z-index: 2;
}

.title {
    font-size: 1.5rem;
    color: #444;
    margin-bottom: 10px;
}

.social-text {
    padding: 0.7rem 0;
    font-size: 0.6rem;
}

.social-media {
    display: flex;
    justify-content: center;
}

.social-icon {
    height: 46px;
    width: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.45rem;
    color: #333;
    border-radius: 50%;
    border: 1px solid #333;
    text-decoration: none;
    font-size: 1.1rem;
    transition: 0.3s;
}

.social-icon:hover {
    color: #4A758E;
    border-color: #4A758E;
}

.btn {
    width: 150px;
    background-color: #4A758E;
    border: none;
    outline: none;
    height: 49px;
    border-radius: 49px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    margin: 10px auto;
    cursor: pointer;
    transition: 0.5s;

}

.btn-submit {
    width: 150px;
    background-color: #3b86b1;
    border: none;
    outline: none;
    height: 49px;
    border-radius: 49px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    margin: 10px auto;
    cursor: pointer;
    font-size: 12px;
    transition: 0.5s;
    display: flex;
    justify-content: center;
}

.btn-submit:hover {
    background-color: #59b9d4;
}

.btn:hover {
    background-color: #59b9d4;
}

.panels-container {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 20px;
    left: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.contenedor:before {
    content: "";
    position: absolute;
    height: 2000px;
    width: 2000px;
    top: -10%;
    right: 48%;
    transform: translateY(-50%);
    background-image: linear-gradient(-45deg, #5DA8BD 0%, #327399 100%);
    transition: 1.8s ease-in-out;
    border-radius: 50%;
    z-index: 6;
}

.image {
    width: 80%;
    transition: transform 1.1s ease-in-out;
    transition-delay: 0.4s;
}


.panel {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    text-align: center;
    z-index: 6;
}

.left-panel {
    pointer-events: all;
    padding: 3rem 17% 2rem 12%;
}

.right-panel {
    pointer-events: none;
    padding: 3rem 12% 2rem 17%;
}

.panel .content {
    color: #fff;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.6s;
}

header {
    position: fixed;
    width: 100%;
    height: 3rem;

    z-index: 100;

}

.navbar {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.95);
    display: flex;
    justify-content: center;
}

.logo {
    top: 0%;
    height: 100%;
    width: auto;
    padding: 10px 0;

}

.panel h3 {
    font-weight: 600;
    line-height: 1;
    font-size: 1.5rem;
    margin-top: 10px;
}

.panel p {
    font-size: 0.8rem;
    padding: 0.7rem 0;
    width: 70%;
    margin: 0 auto;
    margin-bottom: 10px;
}

.btn.transparent {
    margin: 0;
    background: none;
    border: 2px solid #fff;
    width: 130px;
    height: 41px;
    font-weight: 600;
    font-size: 0.8rem;
}

.btn.transparent:hover {

    background-color: #5e9ec4;
}

.img-register {
    width: 110%;
}

.right-panel .image,
.right-panel .content {
    transform: translateX(800px);
}

/* ANIMATION */

.contenedor.sign-up-mode:before {
    transform: translate(100%, -50%);
    right: 52%;
}

.contenedor.sign-up-mode .left-panel .image,
.contenedor.sign-up-mode .left-panel .content {
    transform: translateX(-800px);
}

.contenedor.sign-up-mode .signin-signup {
    left: 25%;
}

.contenedor.sign-up-mode form.sign-up-form {
    opacity: 1;
    z-index: 2;
}

.contenedor.sign-up-mode form.sign-in-form {
    opacity: 0;
    z-index: 1;
}


.contenedor.sign-up-mode .right-panel .image,
.contenedor.sign-up-mode .right-panel .content {
    transform: translateX(0%);
}

.contenedor.sign-up-mode .left-panel {
    pointer-events: none;
}

.contenedor.sign-up-mode .right-panel {
    pointer-events: all;
}

@media (max-width: 870px) {

    .signin-signup {
        width: 100%;
        margin-top: 5rem;
        transform: translate(-50%, -100%);
        transition: 1s 0.8s ease-in-out;
    }

    .signin-signup,
    .contenedor.sign-up-mode .signin-signup {
        left: 50%;
    }

    .signin-signup {
        top: 85%;
    }

    .contenedor.sign-up-mode .signin-signup {
        top: 50%;
    }

    .panels-container {
        grid-template-columns: 1fr;
    }

    .panel {
        flex-direction: row;
        justify-content: center;
        padding: 2.5rem 8%;
        grid-column: 1 / 2;
    }

    .right-panel {
        align-self: end;
        padding-top: 3.2rem;
        padding-bottom: 2rem;
    }

    .left-panel {
        align-self: start;
        padding-top: 20px;
    }

    .image {
        display: none;
    }


    .panel .content {
        padding: 0.5rem 1rem;
        transition: transform 0.9s ease-in-out;
        transition-delay: 0.8s;
    }

    .content-login {
        padding-top: 60px;

    }

    .panel h3 {
        font-size: 1rem;
        margin-bottom: 10px;
    }

    .panel p {
        font-size: 0.7rem;
        width: 85%;
        margin: 0 auto;
    }

    .btn.transparent {
        width: 110px;
        height: 35px;
        font-size: 0.7rem;
    }

    .contenedor {
        padding: 1.5rem;
    }

    .contenedor:before {
        width: 1500px;
        height: 800px;
        transform: translateX(-50%);
        bottom: 70%;
        left: 50%;
        right: initial;
        top: initial;
        transition: 2s ease-in-out;

    }

    .contenedor.sign-up-mode:before {
        transform: translate(-50%, 100%);
        bottom: 16%;
        left: 50%;
    }

    .contenedor .panels-container {
        margin-top: 2rem;
    }

    .contenedor.sign-up-mode .signin-signup .sign-up-form {
        top: 0%;
        transform: translate(0, 25%);
    }

    .content-register {
        margin-bottom: 40%;
    }

    .contenedor.sign-up-mode .panels-container .panel.left-panel {
        opacity: 0%;
    }

    .contenedor.sign-up-mode .panels-container .panel.right-panel {
        opacity: 100%;
        margin-bottom: 30px;
        display: flex;
        justify-self: center;
    }

    .contenedor.sign-up-mode .panels-container .panel.right-panel .content-login p {
        display: none;
    }

    .contenedor .panels-container .panel.left-panel .content-register p {
        display: none;
    }

    .contenedor .panels-container .panel.right-panel {
        opacity: 0%;
    }

    .contenedor .panels-container .panel.left-panel {
        opacity: 100%;
    }

}
</style>
<script setup>

import { ref, onMounted, computed } from 'vue';
import { required, email, minLength, helpers } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { useUserStore } from '~/stores/UserStore';

const userStore = useUserStore();
const loginUri = 'http://localhost:3001/login'
const registerUri = 'http://localhost:3001/register'

const route = useRoute();
const router = useRouter();
const container = ref(null);

const error = reactive({
    login: false,
    register: false,
    loginMessage: "",
    registerMessage: ""
});

const loginData = reactive({
    email: '',
    password: ''
})

const registerData = reactive({
    name: '',
    email: '',
    password: ''
})

onMounted(() => {

    const currentPage = route.params.auth;

    if (currentPage === "registrarse") {
        addSignUpMode();
    }
    else {
        removeSignUpMode();
    }
});


const login = async () => {
    const { data } = await useFetch(loginUri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: loginData,
    });

    const response = data.value;

    if (response.error) {
        error.login = true;
        error.loginMessage = response.message;
        return;
    }

    let user = response.user;
    userStore.setUser(user);
    userStore.setLoggedIn(true);
    router.push({ path: '/dashboard' });
}

const register = async () => {
    const { data } = await useFetch(registerUri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: registerData,
    });

    const response = data.value;

    console.log("registered");
    console.log(response);

    if (response.error) {
        error.register = true;
        error.registerMessage = response.message;
        return;
    }

    let user = response.user;
    userStore.setUser(user);
    userStore.setLoggedIn(true);
    router.push({ path: '/opciones' });

}


const addSignUpMode = () => {
    container.value.classList.add("sign-up-mode");
}

const removeSignUpMode = () => {
    container.value.classList.remove("sign-up-mode");
}

const loginRules = computed(() => {
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

const registerRules = computed(() => {
    return {
        name: {
            required: helpers.withMessage('El nombre de usuario es requerido', required),
            minLength: helpers.withMessage('El nombre de usuario debe contener al menos 6 caracteres', minLength(6)),
        },
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

const v$login = useVuelidate(loginRules, loginData);
const v$register = useVuelidate(registerRules, registerData);

definePageMeta({
    layout: "auth",
});
</script>