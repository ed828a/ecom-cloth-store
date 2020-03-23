import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import * as serviceWorker from './serviceWorker'; // import everything from serviceWorker.js


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor} >
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

serviceWorker.register(); // register serviceWorker inside of our app for PWA
// because we're using an express server, whenever the application load the serviceWorker, it's going to be looking for a serviceWorker.js file.
// in our server, whenever the app makes a GET request for serviceWorker, we give them the serviceWorker.js file
// inside server.js
