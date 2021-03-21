import {problemsApi as IndexPageApi, problemsApi} from "../api/api";
import {setProblemData} from "./problem-reducer";
import IndexPage from "../components/Index/IndexPage";

const SET_INDEX_DATA = 'SET_INDEX_DATA';

let initialState = {
    mainProblem: [
        {
            id: 12,
            name: "Яма на рокосовского",
            location: {x: 54.23432.toFixed(2), y: 24.6757.toFixed(2)},
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
    load: false

};

const indexReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INDEX_DATA:
            return {
                ...state,
                mainProblem: action.payload.d,
                lastProblem: action.payload.d,
            }
        default:
            return state;
    }
}


export const indexGetThree = () => {
    return () => {
        IndexPageApi.getThree().then(response => {
            console.log(response)
        });
    }
}

export const setIndexData = (mainProblem, lastProblem) => ({
    type: SET_INDEX_DATA,
    payload: {mainProblem, lastProblem}
});


export default indexReducer;