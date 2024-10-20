import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import './sidenav.css'; // Import the CSS file for styling

function Sidenav() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Get user info from localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    // If user exists, set the user's name (you can also display email if stored)
    if (user) {
      setUserName(user); // Assuming you have stored email or name
    }
  }, []);
  return (
    <div className="sidenav">
      <h2>{userName}</h2>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/registration">Registration</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/customer">Customer</Link></li>
      </ul>
    </div>
  );
}

export default Sidenav;
