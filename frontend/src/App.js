import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
import MainPage from "./components/mainPage/main";
import NotPageFound from "./components/errorPage/404";
import LoginPage from "./components/loginPage/login";
import SignupPage from "./components/signupPage/signup";
import ForgotPassword from "./components/forgotPassword/forgotPassword";

// import Profile from "./components/profile/profile";
import ResponsiveDrawer from './components/Sidebar/ResponsiveDrawer';
import 'bootstrap/dist/css/bootstrap.min.css';

import Payment from "./components/payment/payment";
import Issues from "./components/issues/SideDrawer";
import MySearches from "./components/mySearches/mySearches";
import Dashboard  from "./components/Dashboard/dashboard";
import newadd from "./components/newadd/newadd"
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
      <div>
hello {JSON.stringify(this.state.user)}

     
      <Router>
        <Switch>
        <Route exact path="/" render={() =>
            <MainPage
              
            />} />
          <Route exact path="/login" render={() =>
            <LoginPage
              updateUser={this.updateUser}
            />} />
            <Route exact path="/dashboard" render={() =>
            <Dashboard
              
            />} />
            
            <Route exact path="/newadd" component={newadd} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/404" component={NotPageFound} />
          <Route exact path="/forgotPassword" component={ForgotPassword} />
          <Route exact path="/profile" component={ResponsiveDrawer} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/issues" component={Issues} />
          <Route exact path="/mySearches" component={MySearches} />
          <Redirect to="/404" />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
