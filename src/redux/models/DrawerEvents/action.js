export const checkDrawerState = () => {
    return {
        type: 'CHECK_DRAWER_STATE',
    }
}
export const openDrawer = () => {
    return {
        type: 'OPEN_DRAWER',
        payload: {
            drawerStatus: true,
            cardLimits: 5,
        }
    }
}
export const closeDrawer = () => {
    return {
        type: 'CLOSE_DRAWER',
        payload: {
            drawerStatus: false,
            cardLimits: 6,
        }
    }
}