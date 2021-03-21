import {indexPageApi, problemsApi as IndexPageApi, problemsApi} from "../api/api";
import {setProblemData} from "./problem-reducer";

const SET_INDEX_DATA = 'SET_INDEX_DATA';
const SET_INDEX_DATA_MAIN = 'SET_INDEX_DATA_MAIN';

let initialState = {
    mainProblem: null,
    lastProblem: [
        {
            id: 1,
            name: "Яма на рокосовского",
            location: {x: 54.23432, y: 24.6757},
            mainImage: 'http://placehold.it/190x160'
        },
        {
            id: 2,
            name: "Яма на рокосовского",
            location: {x: 54.23432, y: 24.6757},
            mainImage: 'http://placehold.it/190x160'
        },
        {
            id: 3,
            name: "Яма на рокосовского",
            location: {x: 54.23432, y: 24.6757},
            mainImage: 'http://placehold.it/190x160'
        }
    ],
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
        default:
            return state;
    }
}
export const setIndexData = (mainProblem, lastProblem) => ({
    type: SET_INDEX_DATA,
    payload: {mainProblem, lastProblem}
});

export const setIndexDataMain = (mainProblem,load) => ({
    type: SET_INDEX_DATA_MAIN,
    payload: {mainProblem,load}
});


export const indexGetThree = () => {
    return (dispatch) => {
        indexPageApi.getThree().then(response => {
            dispatch(setIndexDataMain(
                response.data,
                true
            ))
            console.log(response.data)
        })
    };
}


export default indexReducer;