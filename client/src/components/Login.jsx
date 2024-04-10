import { useEffect, useState } from "react";
import { register } from "../API/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  //Get username, password, first name, last name, email
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");

  // Submit registration form
  const handleRegister = async () => {
    const data = await register(fName, lName, email, userName, password);
    console.log(data);

    // JWT
    if (!data.error) {
      localStorage.setItem("jwt", data.data.jwt);
      navigate();
    }
  };

  return (
    <div className="form-container">
      <h2>User Login</h2>
      <form id="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
