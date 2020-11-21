import http from './httpService';

import URL from './URL.json';

export const login = userInfo => {
    return http.post(`${URL.login}`, JSON.stringify(userInfo));
}


export const register = userInfo => {
    return http.post(`${URL.register}`, JSON.stringify(userInfo));
}