import React from "react";
import "./Login.css";
import { Link, useNavigate  } from "react-router-dom";
//import { auth } from "../config/firebase";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate ();

  const logIn = (e) => {
    e.preventDefault(); // Because we don't want to refrech
    // auth
    //   .signInWithEmailAndPassword(email, password)
    //   .then((res) => {
    //     history.push("/");
    //   })
    //   .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();
    // auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((res) => {
    //     history.push("/");
    //   })
    //   .catch((e) => alert(e.message));
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          alt="logo"
          src='images/amazon-dark-logo.png'
        />
      </Link>
      <div className='login__container'>
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button  onClick={logIn} type='submit' className='login__signInButton'>
            Sign In
          </button>
          <button  onClick={register} className='login__registerButton'>
            Create a new account
          </button> 
        </form>
      </div>
    </div>
  );
}

export default Login;
