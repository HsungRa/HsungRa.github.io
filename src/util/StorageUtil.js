import {defineStore} from "pinia";

export const put = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const remove = (key) => {
    localStorage.removeItem(key);
}

export const get = (key) => {
    return localStorage.getItem(key);
}


const authStorage = defineStore('auth', {
    state: () =>{
        return {user: this.user==null ? null : JSON.parse(this.user)}
    },
    actions: {
        setAuthUser(user) {
            this.user = user;
        }
    }
});

export const authInfo = authStorage()
