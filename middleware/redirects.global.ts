import { useAdminStore } from '~/stores/AdminStore'

export default defineNuxtRouteMiddleware((to, from) => {

    const adminStore = useAdminStore();

    if (to.path === '/admin') {
        if (!adminStore.loggedIn) {
            return navigateTo('/autenticacion/admin/login')
        }
    }
})