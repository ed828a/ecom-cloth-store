import { UserActionTypes } from './user.types';

// pure function, just return an action object with two properties.
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})