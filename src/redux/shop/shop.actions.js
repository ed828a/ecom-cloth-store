import ShopActionTypes from './shop.types';

import {
    firestore,
    convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collections) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections
});

export const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});

// above functions return objects
// so now, anything related to this asynchronous code is handled by redux inside of a reusable action here.
// When redux-thunk middleware is enabled, any time you attempt to dispatch a function instead of an object, the middleware will call that function with dispatch method itself as the first argument.
// this function returns a function that match thunk middleware requirement.
export const fetchCollectionsStartAsync = () => {
    return dispatch => {

        const collectionsRef = firestore.collection("collections");
        dispatch(fetchCollectionsStart()); // switch isFetching value

        collectionsRef
            .get()
            .then(snapshot => {
                // console.log('snapshot: ', snapshot);
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
                // console.log('collectionsMap: ', collectionsMap);
                dispatch(fetchCollectionsSuccess(collectionsMap)); // toggle isFetching again
            })
            .catch(error => {
                dispatch(fetchCollectionsFailure(error.message))
            });
    };
}

