import React, { useState } from "react";
import "../Pages/CSS/LoginSignup.css";

const LoginSignup = () => {
  const [state, setState] = useState("login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phonenumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
  
      if (responseData.status === "success") {
        localStorage.setItem('token', responseData.token);
        alert(responseData.message);
        window.location.replace("/");
      }
      else if(responseData.status === "invalidPass"){
        window.alert(responseData.message);
      }
      else if(responseData.status === "failed"){
        window.alert(responseData.message);
      }
      else if(responseData.status === "failedPass"){
        window.alert(responseData.message);
      }
      else if(responseData.status === false){
        window.alert(responseData.message);
      }

    } catch (error) {
      console.error('Error during signup:', error);
      // Handle the error (e.g., display an error message to the user)
    }
  };
  

  const signup = async () => {
    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
  
      if (responseData.status === true) {
        localStorage.setItem('token', responseData.token);
        alert(`Account created successfully!`);
        window.location.replace("/");
      }
      else if(responseData.Status===false){
        alert("Email or phone number already exists")
      }
    } catch (error) {
      console.error('Error during signup:', error);
      // Handle the error (e.g., display an error message to the user)
    }
  };
  

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="signup-field">
          {state === "signup" ? (
            <>
              <input
                type="text"
                placeholder="Enter your username"
                name="username"
                value={formData.username}
                onChange={handleSubmit}
              />
              <br />
              <input
                type="number"
                placeholder="Enter phone number"
                name="phonenumber"
                value={formData.phonenumber}
                onChange={handleSubmit}
              />
              <br />
            </>
          ) : null}
          
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleSubmit}
              />
              <br />
            
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={formData.password}
            onChange={handleSubmit}
          />
          <br />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleSubmit}
          />
        </div>
        <button
          className="signup-btn"
          onClick={() => (state === "login" ? login() : signup())}
        >
          {state === "signup" ? "Sign Up" : "Login"}
        </button>

        {state === "signup" ? (
          <>
            <p className="signup-message">
              Already have an account?{" "}
              <span onClick={() => setState("login")}>Login here</span>
            </p>
          </>
        ) : (
          <>
            <p className="signup-message">
              Create an account?{" "}
              <span onClick={() => setState("signup")}>Click here</span>
            </p>
          </>
        )}
        <div className="agree-checkbox">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
