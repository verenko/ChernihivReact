import * as axios from "axios";

let header;

if (localStorage.getItem("token") !== null) {
    header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
} else {
    header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
}

const instance = axios.create({
    baseURL: 'http://localhost:8075/',
    headers: header
});

//TODO АВТОРИЗАЦИЯ
export const MeApi = {
    getMe() {
        return instance.get('admin/me');
    }
}
export const authAPI = {
    login(data) {
        return axios.post('http://localhost:8075/api/v1/auth/login', data);
    },
    hellow() {
        return axios.get('http://localhost:8075/hello');
    }
}

