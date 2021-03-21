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
    baseURL: 'http://194.62.98.10:8075/',
    headers: header
});

//TODO АВТОРИЗАЦИЯ
export const MeApi = {
    getMe() {
        return instance.get('/api/auth/me');
    }
}
export const authAPI = {
    login(data) {
        return axios.post('http://194.62.98.10:8075/api/v1/auth/login', data);
    },
}

export const indexPageApi = {
    getThree() {
        return instance.get(`/api/problems/topthree`);
    }
}


export const problemsApi = {
    getProblem(id) {
        return instance.get(`/api/problems/${id}`);
    }
}

