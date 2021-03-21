import {authAPI, helloTest, MeApi} from "../api/api";
import {Redirect} from "react-router-dom";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    username: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                id: action.payload.id,
                username: action.payload.username,
                isAuth: action.payload.auth,
            }
        default:
            return state;
    }
}


export const setAuthUserData = (id, username, auth) => ({
    type: SET_USER_DATA,
    payload: {id, username, auth}
});

export const setUser = (data) => (dispatch) => {
    localStorage.setItem('token', data.token)
    dispatch(setAuthUserData(data.id, data.username, true));
}

export const getMeData = () => (dispatch) => {
    const token = localStorage.getItem('token');
    if (token) {
        MeApi.getMe()
            .then(response => {
                console.log(response)
                    if (response.status === 200) {
                        dispatch(setAuthUserData(response.data.username, true));
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

export const hellow = () => () => {
    authAPI.hellow().then(response => {
            console.log(response.data)
        }
    )
        .catch((err) => {
        });
}

export default authReducer;