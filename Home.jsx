import React from 'react';
import web from 'C:\\Users\\avina\\Desktop\\Website\\mayavi\\src\\images\\16.jpg';
// import {NavLink} from 'react-router-dom';
import Common from './Common';

const Home =() =>{
    return(
        <>
            <Common 
            name="Welcome to NITA ClubHub "
            imgsrc={web}
            visit='/club'
            btname="Get Started"
            />
        </>
    );
};

export default Home;