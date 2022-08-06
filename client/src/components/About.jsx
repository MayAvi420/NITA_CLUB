import React,{useEffect,useState} from 'react';
import { useHistory } from 'react-router-dom';
// import Card from './Card';
// import Adata from '../data/Adata';
import Mypic from '../images/23.jpg';
import BsTabs from './BsTabs';




const About =() =>{

    const[userData, setUserData] = useState({});

    const history = useHistory();

    const callAboutPage = async()=>{
            try {
                const res = await fetch('/about',{
                    method:"GET",
                    headers:{
                        Accept:"application/json",
                        "Content-Type":"application/json"
                    },
                    credentials:"include"
                });
                
                const data = await res.json();
                console.log(data);
                setUserData(data);

                if (!res.status === 200) {
                    const error = new Error(res.error);
                    throw error;
                }

            } catch (err) {
                console.log(err);
                history.push('/login');
            }
    }

    useEffect(() => {
       callAboutPage();
    }, []);


    return(
        <>
        <div className="about my-5">
            <h1 className=" text-center">
                About Me
            </h1>
            <div className="containers-fluid">
            <form method="GET">
                <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4 mb-5 my-3">
                        <div className="col-md-4 col-10 mx-auto" id='card'>
                                <div className="row">
                                    <div className='col-md-4 mx-auto text-center'>
                                    <img src={Mypic} className="cards-img-top" alt="Mypic"/>
                                    <div className='profile-work '>
                                    <p className='my-3'>WORK LINK</p>
                                    <a className="nav-tag1 mt-3 " href="https://www.youtube.com/channel/UCKWbdYGKwBngJ3sKYON3R6A" target="_blank"><i className="fa fa-youtube" aria-hidden="true"/> |Youtube</a><br/>
                                    <a className="nav-tag2 mt-3" href="https://www.youtube.com/channel/UCKWbdYGKwBngJ3sKYON3R6A" target="_blank"><i className="fab fa-facebook-f"/> |Facebook</a><br/>
                                    <a className="nav-tag3 mt-3" href="https://www.youtube.com/channel/UCKWbdYGKwBngJ3sKYON3R6A" target="_blank"><i className="fa fa-instagram" aria-hidden="true"/> |Instagram</a><br/>
                                    <a className="nav-tag4 mt-3" href="https://www.youtube.com/channel/UCKWbdYGKwBngJ3sKYON3R6A" target="_blank"><i className="fab fa-linkedin-in"/> |LinkedIn</a><br/>
                                    <a className="nav-tag5 mt-3" href="https://www.youtube.com/channel/UCKWbdYGKwBngJ3sKYON3R6A" target="_blank"><i className="fa fa-github" aria-hidden="true"/> |Github</a><br/>
                                    <a className="nav-tag6 mt-3" href="https://www.youtube.com/channel/UCKWbdYGKwBngJ3sKYON3R6A" target="_blank"><i className="fa fa-twitter" aria-hidden="true"/> |Twitter</a><br/><br/>
                                    </div>
                                    </div>
                                    
                                    <div className='col-md-6 '>
                                        <div className='profile-head'>
                                            <h4 className='fw-bold '>{userData.name}</h4>
                                            <h6>{userData.name}</h6>
                                            <p className='profile-rating mt-2 mb-5'>RANKINGS :  <span>1/10</span></p>


                                            <BsTabs
                                                name = {userData.name}
                                                email = {userData.email}
                                                phone = {userData.phone}
                                                work = {userData.work}
                                            />



                                        </div>
                                    </div>
                                    <div className='col-md-2'>
                                            <button className='btn btn-primary'>Edit Profile</button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </form>
            </div>
        </div>
        </>
    );
};

export default About;