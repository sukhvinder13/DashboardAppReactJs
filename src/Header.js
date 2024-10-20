import React from "react";
import './header.css'; // Import the CSS for the header
import { useAuth } from "./Auth/AuthContext";

function Header() {
  const auth = useAuth();

  return (
    <header className="header">
        <h1>React Project</h1>
        <button onClick={auth.logout} className="logout-btn">
          Logout
        </button> 
      </header>
  );
}

export default Header;
