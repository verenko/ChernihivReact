import {authAPI, helloTest, MeApi} from "../api/api";
import {Redirect} from "react-router-dom";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    username: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
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
    console.log(data)

    if (data.token !== undefined) {
    } else {
        localStorage.setItem('token', data.body.token)
    }

    dispatch(setAuthUserData(data.id, data.username, true));
}

export const getMeData = () => (dispatch) => {
    const token = localStorage.getItem('token');
    if (token) {
        MeApi.getMe()
            .then(response => {

                    if (response.status === 200) {
                        dispatch(setAuthUserData(null, response.data.username, true));
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