import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router components

import './App.css';
import Login from './LoginForm';
import RegisterForm from './RegisterForm';
import About from "./About";
import Contact from "./contact";
import Layout from "./layout/Layout";
import Landing from "./components/landingpage/Landing"
import Customer from "./components/customer/Customer";
import ProtectedRoute from "./Auth/ProtectedRoutes";
import { AuthProvider } from "./Auth/AuthContext";

function App() {
  return (
    // <div style={{ marginLeft: "260px", padding: "20px", flex: 1 }}>
    <Router>
       <AuthProvider>
      <Routes>
        {/* Route for the Login Page (No Layout) */}
        <Route path="/" element={<Login />} />
        
        {/* Routes for Sidenav and other pages, with Layout */}
        {/* <Route path="/menu" element={<Layout><Sidenav /></Layout>} /> */}
        
        {/* Example of other pages */}
        <Route path="/home" element={<Layout><Landing/></Layout>} />
        <Route path="/registration" element={<ProtectedRoute><Layout><RegisterForm/></Layout></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><Layout><About/></Layout></ProtectedRoute>} />
        <Route path="/contact" element={<ProtectedRoute><Layout><Contact/></Layout></ProtectedRoute>} />
        <Route path="/customer" element={<ProtectedRoute><Layout><Customer/></Layout></ProtectedRoute>} />
      </Routes>
      </AuthProvider>
    </Router>
    // </div>

  );
}

export default App;
