
export const addComment = (data) => {
    return {
        type: 'ADD_COMMENT',
        payload: data
    }
};

export const removeComment = (id) => {
    return {
        type: 'REMOVE_COMMENT',
        payload: id
    }
};

export const initComments = (data) => {
    return {
        type: 'INIT_COMMENTS',
        payload: data
    }
};

