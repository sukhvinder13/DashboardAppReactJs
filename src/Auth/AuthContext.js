import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Create a context to store authentication data
const AuthContext = createContext();

// Hook to use AuthContext in components
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component to wrap around the app
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setIsAuthenticated(true);
    navigate('/home'); // Redirect to home after login
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate('/'); // Redirect to login page after logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
