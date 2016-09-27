
export const showMore = () => {
    return {
        type: 'SHOW_MORE'
    }
};

export const requestUsers = () => {
    return {
        type: 'FETCH_DATA_START',
    }
};

export const fetchError = () => {
    return {
        type: 'FETCH_DATA_ERROR',
    }
};

export const receiveUsers = (users) => {
    return {
        type: 'RECEIVE_DATA',
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

