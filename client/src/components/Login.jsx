import React, { useState } from 'react';
import {NavLink,useHistory} from 'react-router-dom';
import './style.css';
import log from "../images/log.svg";



const Login = () => {
  const history = useHistory();

const [email,setEmail] = useState('');
const [password,setPassword] = useState('');

const loginUser= async(e)=>{
    e.preventDefault();

    const res = await fetch("/signin",{
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({email,password})
  });

  const data = res.json();

  if (data.status===400 || !data) {
    window.alert("Invalid Credentials");
    console.log("Invalid Credentials")
}
else{
  window.alert("Login Successfully");
  console.log("Login Successfully");

  history.push("/");
}

}

  return (
    <>
     <div className="containers">
      <div className="forms-containers">
        <div className="signin-signup">
      <form method='POST' className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete="off" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} autoComplete="off" placeholder="Password" />
            </div>
            <input type="submit" name='signin' value="Log in" className="btn2 solid" onClick={loginUser}/>
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="facebook.com" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="twitter.com" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="google.com" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="linkedin.com" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          </div>
        </div>

       
        <div className="panels-containers">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <NavLink to="/signup"><button className="btn2 transparent" id="sign-up-btn2">
              Sign up
            </button></NavLink>
          </div>
          <img src={log} className="image" alt="" />
        </div>
        
      </div>
    </div>
    

    {/* <div classNameName='signup-modal'>
    <div classNameName=" signup my-5">
                <h1 classNameName='text-center'>Sign In</h1>
                </div>
        <div classNameName="containers signup-div">
            <div classNameName="row">
                <div classNameName="col-md-6 col-6 mx-auto">
                   <form>
                            
                                <div classNameName="signup-box row mb-3">
                                    <label for="validationDefault01" className="form-label">
                                                        <i className="bi bi-envelope-fill"></i>
                                    </label>
                                    <input type='email' name='email' className="form-control" id="validationDefault01" required autoComplete = 'off' name='email' placeholder='Your email' />
                                    </div>
                                    
                               
                                <div classNameName="signup-box row mb-3">
                                <label for="validationDefault01" className="form-label">
                                                        <i className="bi bi-file-lock2-fill"></i>
                                    </label>
                                    <input type='password' name='password' className="form-control" id="validationDefault01" required autoComplete = 'off' name='email' placeholder='Your password' />
                                </div>
                                
                        
                                <button type="submit" classNameName="login-btn"><img src={login} alt="login img"/></button>
                    </form>
                </div>
                <div>
           <NavLink to='/signup' id="create" required><strong>Create Account</strong></NavLink>           </div>
           </div>
           
        </div>
    </div> */}
    	</>
  )
}

export default Login
