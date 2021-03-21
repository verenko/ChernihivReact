const SET_PROBLEM_DATA = 'SET_PROBLEM_DATA';

let initialState = {
    id: 1,
    images: 'http://placehold.it/190x160',
    name: 'Яма на рокоссовского',
    location: {x: 54.23432, y: 24.6757},
    coordinates: {
        x: 51.494269,
        y: 31.294254
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis dictum enim rutrum amet. In augue nunc odio cursus malesuada. Tincidunt lectus et platea aliquam dictum sem fringilla. Urna, vitae tristique tellus quis in. Sit scelerisque sed risus mi mauris nibh ac. Ac consequat semper cum sed urna suspendisse condimentum orci. Elit morbi tincidunt dui, sed. Enim sollicitudin tellus amet scelerisque maecenas vel. Accumsan feugiat tincidunt sed quis eu arcu. Morbi vitae porttitor sit et curabitur id amet sit pharetra.',
    peticion: '#',
    countTrue: 60,
    countFalse: 70,

    isVote: true
};

const problemReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROBLEM_DATA:
            return {
                ...state,
                id: action.payload.d,
                images: action.payload.d,
                name: action.payload.d,
                location: action.payload.d,
                coordinates: action.payload.d,
                description: action.payload.d,
                countTrue: action.payload.d,
                countFalse: action.payload.d,
                peticion: action.payload.d,
                isVote: action.payload.d,
            }
        default:
            return state;
    }
}


export const setProblemData = (id, images, name, location, coordinates, description, countTrue, countFalse, peticion, isVote) => ({
    type: SET_PROBLEM_DATA,
    payload: {id, images, name, location, coordinates, description, countTrue, countFalse, peticion, isVote}
});


export default problemReducer;