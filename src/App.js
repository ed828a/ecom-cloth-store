import React, { Component } from 'react'
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom'
import ErrorPage from './pages/errorpage/ErrorPage';
import ShopPage from './pages/shoppage/shop.component';
import Header from './component/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';



export class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        // store user info in the data base
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          // console.log('snapshot.data():', snapShot.data());
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            },
            () => {
              console.log("currentUser: ", this.state.currentUser)
            });
        });
      } else {
        // set currentUser to null
        this.setState({currentUser: userAuth})
      }

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
          <Route component={ErrorPage} />
        </Switch>

      </div>
    )
  }
}



export default App;

