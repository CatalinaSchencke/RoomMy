import { defineStore } from 'pinia';

export const useAdminStore = defineStore("AdminStore", {
    state: () => {
        return {
            name: '',
            loggedIn: false
        }
    },
    actions: {
        setName(name: string) {
            this.name = name;
        },
        setLoggedIn(loggedIn: boolean) {
            this.loggedIn = loggedIn;
        }
    }
}); 