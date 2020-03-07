import { takeEvery } from 'redux-saga/effects'; // takeEvery: listening to every action of a specific type that we apss to it.

import ShopActionTypes from './shop.types';

// first saga code. 
export function* generatorFetchCollectionsAsync() {
    yield console.log('I am fired.');
}


//What this saga does with the effect is it's going to pause whenever a specific action type that we want comes in.
export function* fetchCollectionsStart() {
    // takeEvery takes 2 parameters: first one is the action type, the second one that takes every guess is another generator function that will run in response to this takeEvery listener. in other words, the second one is the action on the action type.
    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        generatorFetchCollectionsAsync()
    );
}