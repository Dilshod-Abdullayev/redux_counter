const initalState = false
const theme = (state = initalState, action) => {
    switch (action.type) {
        case 'dark':
            return !state;
        default:
            return state
    }
}
export default theme