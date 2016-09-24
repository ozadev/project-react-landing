
export const switchToSlide = (number) => {
    return {
        type: 'CHANGE_SLIDE',
        payload: number
    }
};

export const switchTimeoutHidden = (time) => {
    return function(dispatch) {
        setTimeout(() => {
            dispatch({type: 'CHANGE_SLIDE_HIDDEN'});
        }, time)
    }
};


//
// export function fetchUsers(path) {
//     return function(dispatch) {
//         dispatch(requestUsers());
//
//         return (
//             fetch(path)
//                 .then(response => response.json())
//                 .then(json => dispatch(receiveUsers(json)))
//                 .catch(() => dispatch(fetchError()))
//         )
//     }
// }

