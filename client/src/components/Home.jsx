import React from 'react';
import web from 'C:\\Users\\avina\\Desktop\\Website\\mayavi\\client\\src\\images\\1.png';
import Common from './Common';

const Home =() =>{
    return(
        <>
            <Common 
            name="Welcome to NITA ClubHub "
            imgsrc={web}
            visit='/signup'
            btname="Get Started"
            />
        </>
    );
};

export default Home;