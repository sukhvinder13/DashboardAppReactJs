import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

// Component to guard protected routes
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  // If user is not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // If authenticated, render the children (protected content)
  return children;
};

export default ProtectedRoute;
