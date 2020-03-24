import UserActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }

        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }

        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
        case UserActionTypes.UPDATE_CURRENT_USER_CART_ITEMS_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            }

        case UserActionTypes.UPDATE_CURRENT_USER_CART_ITEMS:
            return {
                ...state,
                currentUser: { ...state.currentUser, cartItems: action.payload }
            }

        default:
            return state;
    }
}

export default userReducer;