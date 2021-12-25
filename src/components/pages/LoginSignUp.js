
import React from 'react';
import './LoginSignUp.css';


function LoginSignUp() {

  
    return (

<>
<div className='d-flex justify-content-center mt-3'>
<div className="border border-secondary rounded-3 w-50 px-5 text-left py-4 mt-3 mx-4 bg-dark">
<form action="#">
    <div className  ="form-group">
        <label for="fname" className="control-label">First Name</label>
        <input type="text" className="form-control" id="fname" placeholder="First name"/>
    </div>
    <div className="form-group">
        <label for="lname" className="control-label">Last Name</label>
        <input type="text" className="form-control" id="lname" placeholder="Last name"/>
    </div>
    <div className="form-group">
        <label for="email" className="control-label">Email</label>
        <input type="email" className="form-control" id="email" placeholder="Your email"/>
    </div>
    <div className="form-group">
        <label for="password" className="control-label">Password</label>
        <input type="email" className="form-control" id="password" placeholder="Your password" />
    </div>
    <button type="submit" className="btn btn-primary">Sign up</button>
</form>
</div>
</div>
</>


         
    )
}



export default LoginSignUp;

