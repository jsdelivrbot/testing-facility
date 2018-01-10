import { FETCH_AUTHORS_SUCCESS, FETCH_AUTHORS_ERROR, FETCH_AUTHORS } from '../actions/authors';

const initState = {
    data: [],
    isLoaded: false,
    isLoading: false,
    error: ''
}

export default function (state = initState, action) {
    switch (action.type) {
        case FETCH_AUTHORS:
            return {
                ...state,
                isLoading: true,
                isLoaded: false,
                error: ''
            }
        case FETCH_AUTHORS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                isLoaded: true,
                error: ''
            }
        case FETCH_AUTHORS_ERROR:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                error: action.payload
            }
    }

    return state;
}