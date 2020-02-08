import React, { Component } from 'react'
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/shoppage/ShopPage';
import Header from './component/header/Header';
import SignInSignUp from './component/sign-in-sign-up/SignInSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action'


export class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {

      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);

        // update currentUser, .data() does't get id propery.
        (await userRef).onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });

      } else {
        setCurrentUser(userAuth);
      }

      console.log("user: ", userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch >
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUp} />
        </Switch>
      </div>
    )
  }
}

// dispatch function is a way for redux to know that whatever object passing in is going to be an action object that redux will passing to every reducer.
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);

