import React from 'react';
import './layout.css';
import Sidenav from './../Sidenav';
import { useAuth } from '../Auth/AuthContext';
import Header from '../Header';
import Footer from './footer/footer';


const Layout = ({ children }) => {
  const auth = useAuth();
  
  return (
    <div className="layout-container">
      {/* Header */}
     <Header/>
      <div className="content-container">
        <Sidenav />
        <main className="main-content">
          {children}
        </main>
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
