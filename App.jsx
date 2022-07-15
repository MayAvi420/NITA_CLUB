import React from 'react';
import Home from './Home';
import About from './About';
import Clubs from './Clubs';
import Contact from './Contact';
import {Route,Switch} from "react-router-dom";
import Nopage from './Nopage'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar'
import Footer from './Footer';


const App =() =>{
    return(
        <>
        <Navbar/> 
        <Switch>
            <Route  path = "/" exact component={Home}/>
            <Route  path = "/about" exact component={About}/>
            <Route  path = "/club" exact component={Clubs}/>
            <Route  path = "/contact" exact component={Contact}/>
            <Route  path="*" exact component={Nopage} />        
        </Switch>
        <Footer/>
        </>
    );
};

export default App;