// pure function, just return an action object with two properties.
export const setCurrentUser = (user) => ({
    type: 'SET_CURRENT_USER',
    payload: user
}) 