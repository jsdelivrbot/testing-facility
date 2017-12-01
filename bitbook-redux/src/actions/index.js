export const submitForm = ({id, username, password}) => {
    return {
        type: 'SUBMIT_FORM',
        id,
        username,
        password
    }
}
