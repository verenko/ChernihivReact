import {authAPI, MeApi} from "../api/api";
import {Redirect} from "react-router-dom";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    username: null,
    firstName: null,
    lastName: null,
    email: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                username: action.payload.username,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                isAuth: action.payload.auth,
            }
        default:
            return state;
    }
}


export const setAuthUserData = (username, firstName, lastName, email, auth) => ({
    type: SET_USER_DATA,
    payload: {username, firstName, lastName, email, auth}
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
    dispatch(setAuthUserData(null, null, null, null, false));
}

export default authReducer;