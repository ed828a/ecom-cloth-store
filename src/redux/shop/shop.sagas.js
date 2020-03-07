import { takeEvery, call, put } from 'redux-saga/effects';
// takeEvery: listening to every action of a specific type that we apss to it.
// call: what call does is that call is the effect code inside of our generate function that invokes the method. the first parameter is the method name, the second parameter is the input arguments of the method
// put: is saga effect for creating action, like dispatch, we also need yield on it.
import {
    firestore,
    convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions'

import ShopActionTypes from './shop.types';

// first saga code. 
export function* generatorFetchCollectionsAsync() {
    try {
        const collectionsRef = firestore.collection("collections");
        const snapshot = yield collectionsRef.get();
        const collectionsMap = yield call(
            convertCollectionsSnapshotToMap,
            snapshot
        );

        yield put(fetchCollectionsSuccess(collectionsMap));
        // like dispatch(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}


//What this saga does with the effect is it's going to pause whenever a specific action type that we want comes in.
export function* fetchCollectionsStart() {
    // takeEvery takes 2 parameters: first one is the action type, the second one that takes every guess is another generator function name that will run in response to this takeEvery listener. in other words, the second one is the action on the action type.
    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        generatorFetchCollectionsAsync
    );
}