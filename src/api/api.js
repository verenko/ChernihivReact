import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8075/api/v1/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
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
    }
}
