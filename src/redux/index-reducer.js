

const SET_INDEX_DATA = 'SET_INDEX_DATA';

let initialState = {
    mainProblem: [
        {
            id: 1,
            name: "Яма на рокосовского",
            location: 'ул. Рокосовского 116а',
            mainImage: 'http://placehold.it/190x160'
        },
        {
            id: 2,
            name: "Яма на рокосовского",
            location: 'ул. Рокосовского 116а',
            mainImage: 'http://placehold.it/190x160'
        },
        {
            id: 3,
            name: "Яма на рокосовского",
            location: 'ул. Рокосовского 116а',
            mainImage: 'http://placehold.it/190x160'
        }
    ],
    lastProblem: [
        {
            id: 1,
            name: "Яма на рокосовского",
            location: 'ул. Рокосовского 116а',
            mainImage: 'http://placehold.it/190x160'
        },
        {
            id: 2,
            name: "Яма на рокосовского",
            location: 'ул. Рокосовского 116а',
            mainImage: 'http://placehold.it/190x160'
        },
        {
            id: 3,
            name: "Яма на рокосовского",
            location: 'ул. Рокосовского 116а',
            mainImage: 'http://placehold.it/190x160'
        }
    ]

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


export const setIndexData = (mainProblem, lastProblem) => ({
    type: SET_INDEX_DATA,
    payload: {mainProblem, lastProblem}
});


export default indexReducer;