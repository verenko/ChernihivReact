import {problemsApi} from "../api/api";

const SET_PROBLEM_DATA = 'SET_PROBLEM_DATA';

let initialState = {
    id: null,
    images: null,
    name: null,
    location: null,
    coordinates: null,
    description: null,
    peticion: null,
    countTrue: null,
    countFalse: null,
    isVote: true,
    load: true
};

const problemReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROBLEM_DATA:
            return {
                ...state,
                id: action.payload.d,
                images: action.payload.images,
                name: action.payload.name,
                location: action.payload.location,
                coordinates: action.payload.coordinates,
                description: action.payload.description,
                countTrue: action.payload.countTrue,
                countFalse: action.payload.countFalse,
                peticion: action.payload.peticion,
                isVote: action.payload.isVote,
                load: action.payload.load,
            }
        default:
            return state;
    }
}


export const setProblemData = (id, images, name, location, coordinates, description, countTrue, countFalse, peticion, isVote, load) => ({
    type: SET_PROBLEM_DATA,
    payload: {id, images, name, location, coordinates, description, countTrue, countFalse, peticion, isVote, load}
});


export const getProblemRed = (id) => {
    return (dispatch) => {
        problemsApi.getProblem(id).then(response => {
            dispatch(setProblemData(
                response.data.id,
                response.data.images,
                response.data.title,
                response.data.location,
                response.data.location,
                response.data.description,
                response.data.positiveVotes,
                response.data.negativeVotes,
                '#',
                false,
                false
            ))
        });

    }
}


export default problemReducer;