import React from "react";
import { Link } from "react-router-dom";
import SignUp from "./Signup";
const Login=()=>{
return(
  <div id="bg">
    <div style={{margin:"10% 35% 3% 35%"}}>
        <h2 style={{margin:"5% 10% 15% 50%"}}>Login</h2>
    <form>
  <div class="form-outline mb-3">
    <input type="email" id="form2Example1"className="form-control" placeholder="Email Address" />
    {/* <label className="form-label" for="form2Example1">Email address</label> */}
  </div>

  <div className="form-outline mb-4">
    <input type="password" id="form2Example2" className="form-control" placeholder="Password"/>
    {/* <label className="form-label" for="form2Example2">Password</label> */}
  </div>

  <div className="row mb-4">
    <div className="col d-flex justify-content-center">

      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="form2Example34" />
        <label className="form-check-label" for="form2Example34"> Remember me </label>
      </div>
    </div>

    <div className="col">

      <a href="#!">Forgot password?</a>
    </div>
  </div>

  <button type="submit" className="btn btn-danger btn-block mb-2">Sign in</button>

  <div className="text-center">
    <p>Not a member? <Link to="/signup">Register</Link></p>
  </div>
</form>
    </div>
    </div>

);
};
export default Login;