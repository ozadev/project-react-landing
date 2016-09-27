const slidesCount = 3;
const transitionTime = 1000;

let stateInitial = {
    currSlide: 1,
    transitionDuration: transitionTime,
    sliderWidth: document.documentElement.clientWidth,
    hiddenChange: false
};


const sliderReducer = (state = stateInitial, action) => {

    let width = document.documentElement.clientWidth;

    switch (action.type) {
        case 'CHANGE_SLIDE': {
            let hiddenChange = false;

            if (action.payload !== 'prev' && action.payload !== 'next') {
                console.error("Slider error: invalid direction, default slider direction is 'next'.");
            }
            // Next slide by default
            let nextSlide = state.currSlide + 1;
            if (action.payload === 'prev') {
                nextSlide = state.currSlide - 1;
            }

            if (nextSlide == 0 || nextSlide == slidesCount + 1) {
                hiddenChange = true;
            }

            return {...state, ...{hiddenChange}, currSlide: nextSlide, transitionDuration: transitionTime, sliderWidth: width};
            break;
        }
        case 'CHANGE_SLIDE_HIDDEN': {
            let nextSlide = 1;
            if (state.currSlide == 0) {
                nextSlide = slidesCount;
            }
            return {...state, hiddenChange: false, currSlide: nextSlide, transitionDuration: 0, sliderWidth: width};
            break;
        }
        default: {
            return state;
        }
    }
};

export default sliderReducer;