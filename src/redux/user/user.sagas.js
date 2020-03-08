import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';
// import { signInWithGoogle } from '../../firebase/firebase.utils'
import { googleProvider, auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import {
    googleSignInStart,
    googleSignInSuccess,
    googleSignInfailure,
    emailSignInStart,
    emailSignInSuccess,
    emailSignInfailure
} from './user.action';

export function* signInWithGoogle () {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        // console.log('user', user);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        console.log('user: ', {
            id: userSnapshot.id, 
            ...userSnapshot.data()
         });
        yield put(googleSignInSuccess({
            id: userSnapshot.id, 
            ...userSnapshot.data()
         }));
         
    } catch (error) {
        console.error(error);
        yield put(googleSignInfailure(error));        
    }
};

// what we want to do: listen to GOOGLE_SIGN_IN_START and trigger our actual sign from the saga.
export function* onGoogleSignInStart(){
    yield takeLatest(
        UserActionTypes.GOOGLE_SIGN_IN_START,
        signInWithGoogle
    );
};

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart)
    ]);
};