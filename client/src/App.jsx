import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Clubs from './components/Clubs';
import Contact from './components/Contact';
import {Route,Switch} from "react-router-dom";
import Nopage from './components/Nopage'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './components/Navbar'
import Footer from './Footer';
import Login from './components/Login';
import Signup from './components/Signup';
// import FirstClubMembers from './Club Members/FirstClubMembers';


const App =() =>{
    return(
        <>
        <Navbar/> 
        <Switch>
            <Route exact path = "/"  component={Home}/>
            <Route exact path = "/about"  component={About}/>
            <Route exact path = "/club"  component={Clubs}/>
            <Route exact path = "/contact"  component={Contact}/>
            <Route exact path = "/login"  component={Login}/>
            <Route exact path = "/signup"  component={Signup}/>
            {/* <Route exact path = "/FirstClubMembers"  component={FirstClubMembers}/>  */}
            <Route exact path="*"  component={Nopage} /> 
              
        </Switch>
        <Footer/>
        </>
    );
};

export default App;