import { defineStore } from 'pinia';

export const useUserStore = defineStore("UserStore", {
    state: () => {
        return {
            user: {},
            loggedIn: false
        }
    },
    actions: {
        setUser(userData: Object) {
            this.user = userData;
        },
        setLoggedIn(loggedIn: boolean) {
            this.loggedIn = loggedIn;
        }
    }
}); 