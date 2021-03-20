import {authAPI, MeApi} from "../api/api";
import {Redirect} from "react-router-dom";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    username: null,
    tokenTelegram: '',
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                id: action.payload.id,
                username: action.payload.username,
                tokenTelegram: action.payload.tokenTelegram,
                isAuth: action.payload.auth,
            }
        default:
            return state;
    }
}


export const setAuthUserData = (id, username, tokenTelegram, auth) => ({
    type: SET_USER_DATA,
    payload: {id, username, tokenTelegram, auth}
});

export const getAuthUserData = (username, password) => (dispatch) => {
    authAPI.login({username: username, password: password})
        .then(response => {
                if (response.status === 200) {
                    dispatch(setAuthUserData(response.data.username, true));
                    localStorage.setItem('token', response.data.token);
                    window.location = "/users";
                }
            }
        )
        .catch((err) => {
        });
}

export const getAuthMeTimer = () => (dispatch) => {
    dispatch(setAuthUserData(1, 'vovka', 'sfddfsf345345345sdf', true));
}

export const getMeData = () => (dispatch) => {
    const token = localStorage.getItem('token');
    if (token) {
        MeApi.getMe()
            .then(response => {
                    if (response.status === 200) {
                        dispatch(setAuthUserData(response.data.username, response.data.firstName, response.data.lastName, response.data.email, true));
                    }
                }
            )
            .catch((err) => {
            });
    }
}


export const logout = () => (dispatch) => {
    localStorage.removeItem("token")
    dispatch(setAuthUserData(null, null, null, false,));
}

export default authReducer;