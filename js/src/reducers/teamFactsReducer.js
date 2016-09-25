let time = 3000;
let steps = 30;

let stateInitial = {
    currNumber: [0, 0, 0, 0],
    finishNumber: [0, 0, 0, 0],
    incValues: [0, 0, 0, 0],
    finished: false
};


const teamFactsReducer = (state = stateInitial, action) => {

    switch (action.type) {
        case 'INIT': {
            let finishNumber = action.payload;
            let incValues = finishNumber.map((item) => {
                return ~~(item / steps);
            });
            return {...state, ...{finishNumber, incValues}};
            break;
        }

        case 'NEXT_VAL': {
            let finished = false;

            let nextNumber = state.currNumber.map((item, index) => {
                let nextVal = item + state.incValues[index];
                if (nextVal >= state.finishNumber[index]) {
                    finished = true;
                }
                return nextVal;
            });

            if (finished) {
                nextNumber = state.finishNumber;
            }

            return {...state, currNumber: nextNumber, ...{finished}};
            break;
        }

        default: {
            return state;
        }
    }
};

export default teamFactsReducer;