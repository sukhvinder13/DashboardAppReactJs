import React, { useState } from "react";
import axios from 'axios';
import { useAuth } from "./Auth/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const auth = useAuth();


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make a POST request to the login API
      const response = await axios.post('https://nodejsstartup-qqdt.onrender.com/login', {
        email
            });

      // Store the token and user info (you could store it in localStorage as well)
      const { token, user } = response.data;
            console.log(response);
            // localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(response.data.token.name)); // Store user data
      
      // Save token in auth context (or localStorage/sessionStorage)
      auth.login(token, user);

      // Redirect user to menu page or any protected page
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage('Invalid email or password');
      } else {
        setErrorMessage('Server error, please try again');
      }
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "2rem" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Login
        </button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

    </div>
  );
}

export default Login;
