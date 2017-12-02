export const form = (state = {}, action) => {
    switch (action.type) {
        case 'SUBMIT_FORM':
            return Object.assign({}, ...state, {
                id: action.id,
                username: action.username,
                password: action.password
            });
        default:
            return state;
    }
}

