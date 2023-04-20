const initalState = 0
const counter = (state = initalState, action) => {
    switch (action.type) {
        case 'incr':
            return state + 1;
        case 'decr':
            return state - 1
        default:
            return state
    }
};

export default counter;
