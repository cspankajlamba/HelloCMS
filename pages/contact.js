// about.js
import '../app/global.css'
import React from 'react';
import style from './pages.module.css'
import Header from '../app/components/Header.js';
import Footer from '../app/components/Footer.js';

const ContactPage = () => {
  return (
    <>
      <Header />
      <div className={style.Page}>
        <h1>Contact Page</h1>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;