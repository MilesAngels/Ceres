import { useEffect, useState } from "react";
import { register } from "../API/auth";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  //Get username, password, first name, last name, email
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");

  // Submit registration form
  const handleRegister = async() => {
    const data = await register(fName, lName, email, userName, password);
    console.log(data);

    // JWT
    if(!data.error) {
      localStorage.setItem('jwt', data.data.jwt);
      navigate()
    }
  } 

  return (
    <div className="form-container">
      <h2>Register to Ceres</h2>
      <form id="registration-form">
        <div className="form-group">
          <label htmlFor="firstname">First Name:</label>
          <input type="text" id="firstname" name="firstname" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name:</label>
          <input type="text" id="lastname" name="lastname" required />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <button type="submit" onClick={() => handleRegister()}>Register</button>
          <p className="align-center">Already have an account? <Link to="/login">Log In</Link></p>
        </div>
      </form>
    </div>
  );
}