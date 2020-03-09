import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';
// import { signInWithGoogle } from '../../firebase/firebase.utils'
import {
    googleProvider,
    auth,
    createUserProfileDocument,
    getCurrentUser
} from '../../firebase/firebase.utils'

import {
    signInSuccess,
    signInFailure,
    signOutSuccess,
    signOutFailure
} from './user.action';

export function* getSnapshotFromUserAuth(userAuth) {
    try {
        // console.log('user', userAuth);
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }));

        // console.log('user: ', {
        //     id: userSnapshot.id, 
        //     ...userSnapshot.data()
        //  });

    } catch (error) {
        // console.error(error);
        yield put(signInFailure(error));
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        // console.error(error);
        yield put(signInFailure(error));
    }
};

// what we want to do: listen to GOOGLE_SIGN_IN_START and trigger our actual sign from the saga.
export function* onGoogleSignInStart() {
    yield takeLatest(
        UserActionTypes.GOOGLE_SIGN_IN_START,
        signInWithGoogle
    );
};

// here input is an action object
export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        console.log('error: ', error.message);
        yield put(signInFailure(error));
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(
        UserActionTypes.EMAIL_SIGN_IN_START,
        signInWithEmail
    )
}


export function* isUserAuthenticated() {
    // console.log('isUserAuthenticated() called');
    try {
        const userAuth = yield getCurrentUser();
        // console.log('userAuth: ', userAuth);
        if(!userAuth) return; 
        else { yield getSnapshotFromUserAuth(userAuth); }

    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* onCheckUserSession() {
    // yield console.log('saga: onCheckUserSession() called');
    yield takeLatest(
        UserActionTypes.CHECK_USER_SESSION,
        isUserAuthenticated
    )
}

export function* signOut(){
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure());
    }
}

export function* onSignOutStart() {
    yield takeLatest(
        UserActionTypes.SIGN_OUT_START,
        signOut 
    )
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart)
    ]);
};