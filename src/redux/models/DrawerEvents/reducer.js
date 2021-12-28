let initialState = {
    drawerStatus: false,
    cardLimits: 6,
};
const drawerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHECK_DRAWER_STATE':
            return state
        case 'OPEN_DRAWER':
            return action.payload
        case 'CLOSE_DRAWER':
            return action.payload
        default:
            return state
    }
}
export default drawerReducer;