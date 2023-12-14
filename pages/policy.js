// about.js
import '../app/global.css'
import React from 'react';
import style from './pages.module.css'
import Header from '../app/components/Header.js';
import Footer from '../app/components/Footer.js';


const PolicyPage = () => {
  return (
    <>
    <Header/>
      <h1>Policy Page</h1>
      <p>Welcome to our company's About page!</p>
      {/* Add your content here */}
      <Footer/>
    </>
  );
};

export default PolicyPage;
