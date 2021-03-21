import {indexPageApi, problemsApi as IndexPageApi, problemsApi} from "../api/api";
import {setProblemData} from "./problem-reducer";

const SET_INDEX_DATA = 'SET_INDEX_DATA';
const SET_INDEX_DATA_MAIN = 'SET_INDEX_DATA_MAIN';
const SET_INDEX_DATA_LAST = 'SET_INDEX_DATA_LAST';

let initialState = {
    mainProblem: null,
    lastProblem: null,
    load: true

};

const indexReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INDEX_DATA:
            return {
                ...state,
                mainProblem: action.payload.d,
                lastProblem: action.payload.d,
            }
        case SET_INDEX_DATA_MAIN:
            return {
                ...state,
                mainProblem: action.payload.mainProblem,
                load: action.payload.load,
            }
        case SET_INDEX_DATA_LAST:
            return {
                ...state,
                lastProblem: action.payload.lastProblem,
                load: action.payload.load,
            }
        default:
            return state;
    }
}
export const setIndexData = (mainProblem, lastProblem) => ({
    type: SET_INDEX_DATA,
    payload: {mainProblem, lastProblem}
});

export const setIndexDataMain = (mainProblem, load) => ({
    type: SET_INDEX_DATA_MAIN,
    payload: {mainProblem, load}
});

export const setIndexDataLast = (lastProblem, load) => ({
    type: SET_INDEX_DATA_LAST,
    payload: {lastProblem, load}
});


export const indexGetThree = () => {
    return (dispatch) => {
        indexPageApi.getThree().then(response => {
            dispatch(setIndexDataMain(
                response.data,
                false
            ))
        })
    };
}

export const indexGetLast = () => {
    return (dispatch) => {
        indexPageApi.getThree().then(response => {
            dispatch(setIndexDataMain(
                response.data,
                false
            ))
        })
    };
}


export default indexReducer;