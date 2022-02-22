import React, {useEffect, useContext, useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import Create from 'views/examples/Create';
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import LogIn from 'views/examples/Login';

/**
 * ?  =====Import Components=====
 */


function App() {
  return (
    <div>
      
        <Router>
          <Route exact path='/index'>
            <Index  /> 
          </Route>
          <Route exact path='/nucleo-icons'>
            <NucleoIcons /> 
          </Route>
          <Route exact path='/landing-page'>
            <LandingPage /> 
          </Route>
          <Route exact path='/Create'>
            <Create /> 
          </Route>
          <Route exact path='/profile-page'>
              <ProfilePage/>
          </Route>
          <Route exact path='/register-page'>
              <RegisterPage/>
          </Route>
          <Route exact path='/login-page'>
              <LogIn/>
          </Route>


        </Router>
    </div>
  );
}

export default App;
