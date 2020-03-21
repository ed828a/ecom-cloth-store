import React, { useEffect, lazy, Suspense } from 'react'
// import './App.css';

// import HomePage from './pages/homepage/homepage.component';
import { Route, Switch, Redirect } from 'react-router-dom'
import ErrorPage from './pages/errorpage/ErrorPage';
// import ShopPage from './pages/shoppage/shop.component';
import Header from './component/header/header.component';
// import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
// import CheckoutPage from './pages/checkoutpage/checkout.component';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';
import { checkUserSession } from './redux/user/user.action';
import Spinner from './component/spinner/spinner.component';
import { GlobalStyle } from './global.styles';
import ErrorBoundary from './component/error-boundary/error-boundary.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shoppage/shop.component'));
const CheckoutPage = lazy(() => import('./pages/checkoutpage/checkout.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component'));


export const App = ({ currentUser, checkUserSession }) => {

  useEffect(() => { checkUserSession(); }, [checkUserSession]);

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />} >
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
            <Route component={ErrorPage} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </div>
  )

}

const mapStateToPros = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToPros, mapDispatchToProps)(App);


