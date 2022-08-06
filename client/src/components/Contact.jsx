import React, { useState } from 'react';


const Contact =() =>{
  const [data,setData] = useState({
    fullname:'',
    phone:'',
    email:'',
    msg:'',
  })

  const InputEvent =(event) =>{
    const {name,value} = event.target;

    setData((preVal)=>{
        return{
            ...preVal,
            [name]:value,
        }
    })
  }

  const formSubmit =(e) =>{
    e.preventDefault();
    alert(`My name is ${data.fullname}.My Mobile number is ${data.phone} and email is ${data.email}, Here is what i want to say ${data.msg}`);
  }
    return(
        <>
            <div className="my-5">
                <h1 className='text-center'>Contact Us</h1>
            </div>
            <div className="container contact-div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                        <div className="md-3">
                                <label for="validationDefault01" className="form-label">FullName</label>
                                <input type="text" className="form-control" id="validationDefault01" required
                                name="fullname"
                                value={data.fullname}
                                onChange={InputEvent}
                                placeholder="enter your name"
                                />
                                
                            </div>
                           
                            
                            <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                            <input type="number" className="form-control" 
                            name="phone"
                            value={data.phone}
                            onChange={InputEvent}id="exampleFormControlInput1" 
                            placeholder="Enter Mobile Number"/>
                            </div>
                            <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" 
                            name="email"
                            value={data.email}
                            onChange={InputEvent}id="exampleFormControlInput1" 
                            placeholder="name@example.com"/>
                            </div>
                            <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                            name="msg"
                            value={data.msg}
                            onChange={InputEvent}></textarea>
                           </div>
                           <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;