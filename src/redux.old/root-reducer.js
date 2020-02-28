import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';  // actual local storage object on our window browser
// so this tell redux-persist to use local storage as the default storage.

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer'
import shopReducer from './shop/shop.reducer';
import directoryReducer from './directory/directory.reducer';

const persistConfig = {
    key: 'root', // the point start storing everything. we want to start from the root
    storage, // which storage we use.
    whitelist: [ 'cart' ]  // elements in the array are reducers that we want to store.
} ;
 
const rootReducer = combineReducers ({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer); // return the persist version of the rootReducer with persistConfig on top of it. 