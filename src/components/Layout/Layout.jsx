import React from 'react';
// import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import '../../styles/global.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      { children }
      <Footer/>
    </div>
  )
}

export default Layout;
