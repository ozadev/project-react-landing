
export const requestUsers = () => {
    return {
        type: 'FETCH_USERS_START',
    }
};

export const fetchError = () => {
    return {
        type: 'FETCH_USERS_ERROR',
    }
};

export const receiveUsers = (users) => {
    return {
        type: 'RECEIVE_USERS', 
        payload: users
    }
};

export function fetchUsers(path) {
    return function(dispatch) {
        dispatch(requestUsers());

        return (
            fetch(path)
            .then(response => response.json())
            .then(json => dispatch(receiveUsers(json)))
            .catch(() => dispatch(fetchError()))
        )
    }
}
