import { takeLatest, put, all, call } from 'redux-saga/effects';
import { clearCart } from './cart.actions';
import UserActionTypes from '../user/user.types';

// action
export function* clearCartOnSingOut(){
    yield put(clearCart());
}

// listener
export function* onSignOutSuccess(){
    yield takeLatest(
        UserActionTypes.SIGN_OUT_SUCCESS,
        clearCartOnSingOut
    )
}

// module root sagas
export function* cartSagas() {
    yield all([
        call(onSignOutSuccess)
    ]);
}