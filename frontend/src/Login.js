import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", { email, password });
      localStorage.setItem("email", response.data.email);
      navigate("/dashboard");
    } catch (error) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="/favicon.ico" alt="Logo" width="50" />
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          {error && <div className="error-message">{error}</div>}
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
