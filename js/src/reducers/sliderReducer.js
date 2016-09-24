const slidesCount = 3;
const transitionTime = 1000;

let stateInitial = {
    currSlide: 1,
    transitionDuration: transitionTime,
    sliderWidth: document.documentElement.clientWidth,
    hiddenChange: false
};


const sliderReducer = (state = stateInitial, action) => {

    switch (action.type) {
        case 'CHANGE_SLIDE': {
            let hiddenChange = false;
            let nextSlide = action.payload;

            if (nextSlide == 0 || nextSlide == slidesCount + 1) {
                hiddenChange = true;
            }

            return {...state, ...{hiddenChange}, currSlide: nextSlide, transitionDuration: transitionTime};
            break;
        }
        case 'CHANGE_SLIDE_HIDDEN': {
            let nextSlide = 1;
            if (state.currSlide == 0) {
                nextSlide = slidesCount;
            }
            return {...state, hiddenChange: false, currSlide: nextSlide, transitionDuration: 0};
            break;
        }
        default: {
            return state;
        }
    }
};

export default sliderReducer;