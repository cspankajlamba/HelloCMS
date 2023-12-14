// about.js
import '../app/global.css'
import React from 'react';
import style from './pages.module.css'
import Header from '../app/components/Header.js';
import Footer from '../app/components/Footer.js';

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className={style.Page}>
        <h1>About Page</h1>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;