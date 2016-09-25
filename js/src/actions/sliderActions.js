let switchAutoTimerId;
let switchAutoEnableTimerId;


export const switchToSlide = (direction) => {
    if (switchAutoTimerId) {
        clearInterval(switchAutoTimerId);
        switchAutoTimerId = undefined;
    }
    if (switchAutoEnableTimerId) {
        clearTimeout(switchAutoEnableTimerId);
        switchAutoEnableTimerId = undefined;
    }

    return {
        type: 'CHANGE_SLIDE',
        payload: direction
    }
};

export const switchTimeoutHidden = (time) => {
    return function(dispatch) {
        setTimeout(() => {
            dispatch({type: 'CHANGE_SLIDE_HIDDEN'});
        }, time)
    }
};

export const switchAuto = () => {
    return function(dispatch) {
        if (switchAutoTimerId !== undefined) {
            return;
        }
        switchAutoTimerId = setInterval(() => {
            dispatch({type: 'CHANGE_SLIDE', payload: 'next'});
        }, 3000)
    }
};

export const switchAutoEnable = () => {
    return function(dispatch) {
        if (switchAutoEnableTimerId !== undefined) {
            return;
        }
        switchAutoEnableTimerId = setTimeout(() => {
            dispatch(switchAuto());
        }, 2000);
        // 2s + 3s (for slide change) ==> 5s delay
    }
};


