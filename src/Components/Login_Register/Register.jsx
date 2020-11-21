import React,{useState} from "react";
import { Link } from "react-router-dom";

import {withRouter} from 'react-router-dom';

import {register} from './../../Services/LoginRegister'
const Register = ({history}) => {
    const [userName, setUserName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
   
    const reset=()=>{
        setUserName("");
        setemail("");
        setpassword("");
    }

    const handleSubmit= async (event)=>{
        event.preventDefault();

    const user={
        userName,
        email,
        password
    }
    try{
     const {status}=await register(user);
     if(status===201){
         console.log("login");
         history.replace("/");
         reset();
     }

    }catch (e){
        console.log(e);
    }


    }

  return (
    <section class="sign-in-page">
      <div class="container">
        <div class="row justify-content-center align-items-center height-self-center">
          <div class="col-lg-5 col-md-12 align-self-center">
            <div class="sign-user_card ">
              <div class="sign-in-page-data">
                <div class="sign-in-from w-100 m-auto">
                  <h3 class="mb-3 text-center">Sign Up</h3>
                  <form class="mt-4" onSubmit={handleSubmit}>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control mb-0"
                        id="exampleInputEmail2"
                        placeholder="Enter Full Name"
                        autocomplete="off"
                        required
                        value={userName}
                        onChange={e=> setUserName(e.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control mb-0"
                        id="exampleInputEmail3"
                        placeholder="Enter email"
                        autocomplete="off"
                        required
                        value={email}
                        onChange={e=> setemail(e.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control mb-0"
                        id="exampleInputPassword2"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={e=> setpassword(e.target.value)}
                      />
                    </div>
                    <div class="custom-control custom-checkbox mb-3">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck"
                        
                      />
                      <label class="custom-control-label" for="customCheck">
                        I accept{" "}
                        <Link to="#" class="text-primary">
                          {" "}
                          Terms and Conditions
                        </Link>
                      </label>
                    </div>

                    <button type="submit" class="btn btn-hover">
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
              <div class="mt-3">
                <div class="d-flex justify-content-center links">
                  Already have an account?{" "}
                  <Link to="login.html" class="text-primary ml-2">
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(Register);
