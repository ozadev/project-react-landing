let countTimerId;

export const initOptions = (data) => {
    return {
        type: 'INIT',
        payload: data
    }
};

export const startCount = (time) => {
    return function(dispatch) {
        if (countTimerId !== undefined) {
            return;
        }
        countTimerId = setInterval(() => {
            dispatch({type: 'NEXT_VAL'});
        }, time)
    }
};

export const stopCount = () => {
    return function(dispatch) {
        if (countTimerId) {
            clearInterval(countTimerId);
            countTimerId = undefined;
        }
        dispatch({type: 'FINISHED'});
    }
};

