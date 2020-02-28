import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'; // allow our browser to actually cache our store.
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];  // middlewares scalable

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store); // persist version of above store

export default { store, persistor };
