
export const put = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const remove = (key) => {
    localStorage.removeItem(key);
}

export const get = (key) => {
    return localStorage.getItem(key);
}


