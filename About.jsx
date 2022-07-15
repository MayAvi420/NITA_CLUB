import React from 'react';
import Card from './Card';
import Adata from './Adata';


const About =() =>{
    return(
        <>
        <div className="my-5">
            <h1 className="text-center text-decoration-underline">
                About Us
            </h1>
            <h4 className='text-center my-3'>We are the team of talented developer making websites</h4>
            <h1 className="text-center text-decoration-underline my-4">
                Our Teams
            </h1>
            <div className="container-fluid mb-5">
                <div className="row">
                <div className="col-10 mx-auto">
                        <div className="row gy-4 mb-5 my-3">
                            {
                                Adata.map((val,ind)=>{
                                    return <Card
                                        key={ind}
                                        imgsrc={val.imgsrc}
                                        title ={val.title}
                                        go={val.go}
                                        text={val.text}
                                        visit={val.visit}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default About;