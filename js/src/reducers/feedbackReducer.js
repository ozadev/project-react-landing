
let stateInitial = {
    messages: [],
    nextId: 1

};

const portfolioReducer = (state = stateInitial, action) => {

    switch (action.type) {
        case 'INIT_COMMENTS': {
            let messages = action.payload.map((item, index) => {
                return {id: index, title: item.title, text: item.text}
            });
            return {...state, messages: messages, nextId: messages.length};
        }
        case 'ADD_COMMENT': {
            let newMessage = {
                id: state.nextId,
                title: action.payload.title,
                text: action.payload.message
            };

            return {...state, messages: [...state.messages, newMessage], nextId: state.nextId + 1};
        }
        case 'REMOVE_COMMENT': {
            let messages = state.messages.filter((item) => {
                return item.id != action.payload;
            });
            return {...state, messages: messages};
        }
        default: {
            return state;
        }
    }
};

export default portfolioReducer;