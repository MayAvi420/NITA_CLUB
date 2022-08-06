import React from 'react';
import Card from './Card';
import Sdata from '../data/Sdata';
const Clubs =() =>{
    return(
        <>
        <div className="my-5">
            <h1 className="text-center">
                Our Clubs
            </h1>
            <div className="container-fluid mb-5">
                <div className="row">
                <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                Sdata.map((val,ind)=>{
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

export default Clubs;