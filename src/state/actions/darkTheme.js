import actionTypes from "../actionTypes";

export default function darkTheme() {
    return {
        type: actionTypes.DARK_THEME,
        payload: false
    };
}
