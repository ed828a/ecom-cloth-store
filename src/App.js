import React, { Component } from 'react'
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/shoppage/ShopPage';
import Header from './component/header/Header';
import SignInSignUp from './component/sign-in-sign-up/SignInSignUp';
import { auth } from './firebase/firebase.utils'


export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({currentUser: user});
      console.log("user: ", user);
    })
  }

  componentWillUnmount(){
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
