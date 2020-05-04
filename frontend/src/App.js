import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
import MainPage from "./components/mainPage/main";
import NotPageFound from "./components/errorPage/404";
import LoginPage from "./components/loginPage/login";
import SignupPage from "./components/signupPage/signup";
import ForgotPassword from "./components/forgotPassword/forgotPassword";
import Dashboard  from "./components/Dashboard/dashboard";
import axios from 'axios'

class App extends Component {


  constructor() {
    super()
    this.state = {
      loggedIn: false,
      user: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          user: response.data.user
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          user: null
        })
      }
    })
  }

  render() {
    return(
      <Router>
        <Switch>
        <Route exact path="/" render={() =>
            <MainPage
              
            />} />
          <Route exact path="/login" render={() =>
            <LoginPage
              updateUser={this.updateUser}
            />} />
            <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/404" component={NotPageFound} />
          <Route exact path="/forgotPassword" component={ForgotPassword} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
