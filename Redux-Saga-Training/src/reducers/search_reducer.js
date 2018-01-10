import { UPDATE_SEARCH, RECORD_SEARCH, RESET_SEARCH } from '../actions/authors';

const initState = {
    isUpdating: false,
    isUpdated: false,
    search: ''
}

export default function(state = initState, action) {
    switch(action.type) {
        case UPDATE_SEARCH:
            return {
                ...state,
                isUpdating: true,
            }
        case RECORD_SEARCH:
            return {
                ...state,
                search: action.payload,
                isUpdating: false,
                isUpdated:  true
            }
        case RESET_SEARCH:
            return initState;
    }

    return state;
}