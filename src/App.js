import React, { Component } from 'react'
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import { Route, Switch, Redirect } from 'react-router-dom'
import ErrorPage from './pages/errorpage/ErrorPage';
import ShopPage from './pages/shoppage/shop.component';
import Header from './component/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component';
// import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';
import { connect } from 'react-redux';
// import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkoutpage/checkout.component';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';
import { checkUserSession } from './redux/user/user.action';


export class App extends Component {

  // unsubscribeFromAuth = null;

  componentDidMount() {

    // const { setCurrentUser, collectionsArray } = this.props;

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

    //   if (userAuth) {
    //     // store user info in the data base
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot(snapShot => {
    //       // console.log('snapshot.data():', snapShot.data());
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       });
    //     });
    //   } else {
    //     // set currentUser to null
    //     setCurrentUser(userAuth);
    //   }

    //   if (!collectionsArray.length) {
    //     addCollectionAndDocuments('collections', collectionsArray.map(({ title, items }) => ({ title, items })));
    //   }

    // }, error => console.error(error));  // the first function is onNext function, the second function is onError function

    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    // this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
          <Route component={ErrorPage} />
        </Switch>

      </div>
    )
  }
}

const mapStateToPros = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToPros, mapDispatchToProps)(App);


