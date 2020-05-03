import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
import MainPage from "./components/mainPage/main";
import NotPageFound from "./components/errorPage/404";
import LoginPage from "./components/loginPage/login";
import SignupPage from "./components/signupPage/signup";
import ForgotPassword from "./components/forgotPassword/forgotPassword";
import Profile from "./components/profile/profile";
import Payment from "./components/payment/payment";
import Issues from "./components/issues/issues";
import MySearches from "./components/mySearches/mySearches";

class App extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/404" component={NotPageFound} />
          <Route exact path="/forgotPassword" component={ForgotPassword} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/issues" component={Issues} />
          <Route exact path="/mySearches" component={MySearches} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
