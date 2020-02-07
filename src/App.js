import React, { Component } from 'react'
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/shoppage/ShopPage';
import Header from './component/header/Header';
import SignInSignUp from './component/sign-in-sign-up/SignInSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'


export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({ currentUser: userAuth });
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);

        // update currentUser, .data() does't get id propery.
        (await userRef).onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            // console.log('currentUser:', this.state.currentUser);
          });
          // console.log('currentUser:', this.state.currentUser);
        });
        
      } else {
        this.setState({ currentUser: userAuth });
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
        <Header currentUser={this.state.currentUser} />
        <Switch >
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUp} />
        </Switch>
      </div>
    )
  }
}

export default App

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Switch >
//         <Route exact path='/' component={HomePage} />
//         <Route exact path='/shop' component={ShopPage} />
//         <Route path='/signin' component={SignInSignUp} />
//       </Switch>

//     </div>
//   );
// }

// export default App;
