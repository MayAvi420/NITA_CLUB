import React,{useState}from 'react';
import {NavLink,useHistory} from 'react-router-dom';
import register from '../images/register.svg'
import './style.css';

const Signup = () => {
const history = useHistory();

const [user,setUser] = useState({
  name:"" ,email:"",phone:"",work:"",password:"",cpassword:"" 
})


let name,value;
const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user,[name]:value})
}

const PostData = async(e) => {
    e.preventDefault();

    // Object destructuring
    const {name, email, phone, work, password, cpassword} = user;

    const res = await fetch("/register",{
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({name,email,phone,work,password,cpassword})
  });

  const data = await res.json();

  if (data.status===422 || !data) {
      window.alert("Invalid registration");
      console.log("Invalid registration")
  }
  else{
    window.alert("Registration Successfully");
    console.log("Registration Successfully");

    history.push("/login");
  }
}


  return (
    <>

<div className="containers">
      <div className="forms-containers">
        <div className="signin-signup">
      <form  method="POST" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" name="name" value={user.name} onChange={handleInputs} required autoComplete='off'
              id='name' placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" name="email" value={user.email} onChange={handleInputs}  autoComplete="off"
              id='email' placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-phone"></i>
              <input type="number" name="phone" value={user.phone} onChange={handleInputs}  autoComplete='off'
              id='phone' placeholder="PhoneNumber" />
            </div>
           
            
            <div className="input-field">
            
              <i className="fas fa-lock"></i>
              <input type="password" name="password" value={user.password} onChange={handleInputs}   autoComplete="new-password"
              id='password' placeholder="Password" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" name="cpassword" value={user.cpassword} onChange={handleInputs}  autoComplete='off'
              id='cpassword' placeholder="Confirm Password" />
            </div>
            <input type="submit" className="btn2" name="signup" value="register" onClick={PostData} />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="https://www.facebook.com" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.twitter.com" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.google.com" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="https://www.linkedin.com" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          </div>
          </div>

          <div className="panels-containers">
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <NavLink to="/login"><button className="btn2 transparent" id="sign-in-btn2">
              Sign in
            </button></NavLink>
          </div>
          <img src={register} className="image" alt="" />
        </div>
      </div>
    </div>






    {/* <div className='signup-modal'>
    <div className=" signup my-5">
                <h1 className='text-center'>Sign up</h1>
                </div>
        <div className="containers signup-div">
            <div className="row">
                <div className="col-md-6 col-6 mx-auto">
                   <form>
                            <div className="signup-box row mb-3">
                            <label for="validationDefault01" class="form-label">
                                                <i class="bi bi-person-fill"></i>
                            </label>
                            <input type='text' name='name' class="form-control" id="validationDefault01" required autoComplete = 'off' required autoComplete='off' placeholder='Your Name' />
                                </div>
                                <div className="signup-box row mb-3">
                                    <label for="validationDefault01" class="form-label">
                                                        <i class="bi bi-envelope-fill"></i>
                                    </label>
                                    <input type='email' name='email' class="form-control" id="validationDefault01" required autoComplete = 'off' required autoComplete='off' placeholder='Your email' />
                                    </div>
                                    <div className="signup-box row mb-3">
                                    <label for="validationDefault01" class="form-label">
                                                    <i class="bi bi-telephone-fill"></i>
                                    </label>
                                    <input type='number' name='phone' class="form-control" id="validationDefault01" required autoComplete = 'off' required autoComplete='off' placeholder='Your phone' />
                                </div>
                                <div className="signup-box row mb-3">
                                <label for="validationDefault01" class="form-label">
                                                        <i class="bi bi-file-slides"></i>
                                    </label>
                                    <input type='text' name='work' class="form-control" id="validationDefault01" required autoComplete = 'off' required autoComplete='off' placeholder='Your Profession' />
                                </div>
                                <div className="signup-box row mb-3">
                                <label for="validationDefault01" class="form-label">
                                                        <i class="bi bi-file-lock2-fill"></i>
                                    </label>
                                    <input type='password' name='password' class="form-control" id="validationDefault01" required autoComplete = 'off' required autoComplete='off' placeholder='Your password' />
                                </div>
                                <div className="signup-box row mb-3">
                                <label for="validationDefault01" class="form-label">
                                                        <i class="bi bi-file-lock2-fill"></i>
                                    </label>
                                    <input type='password' name='cpassword' class="form-control" id="validationDefault01" required autoComplete = 'off' required autoComplete='off' placeholder='Confirm Your cpassword' />
                                </div>
                        
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </form>
                </div>
           </div>
         */}
            {/* <div className='for-login'>
            Already Register then,  <NavLink to='/login' id="login" required><strong>login</strong></NavLink>
            </div>
    
        </div>
    </div> */}
    
    </>
  )
}

export default Signup;
