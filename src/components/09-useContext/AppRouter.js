import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate
} from "react-router-dom";
import { NavBar } from './NavBar';  
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';


export const AppRouter = () => {
    return (
      <Router>
        <NavBar />
        <div className='container'>
          
          <Switch>
            <Route path="/about" element={ <AboutScreen/> }/>
            <Route path="/login" element={ <LoginScreen/> }/>
            <Route path="/" element={ <HomeScreen/> }/>
          </Switch>
        </div>
      </Router>        
    )
}
