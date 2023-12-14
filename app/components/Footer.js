// Footer.js
import React from 'react';
import Link from 'next/link'
import style from './style.module.css'
import colors from '../style/colors.module.scss'
import align from '../style/alignment.module.scss'

const Footer = () => {
  return (
    <footer className={style.footer} style={{display: align.dflex, justifyContent: align.jcSB,alignItems: align.alC,}} >
      {/* Your footer content */}
      <p className={style.textCenter}>&copy; {new Date().getFullYear()} Piotech INDIA</p>
      <div className={style.buttons}> 
          <div style={{display: align.dflex}} className={style.socials}>
            <div className="btn"><Link href="#">Top ^</Link></div>
            <div className="btn"><Link href="#">Li</Link></div>
            <div className="btn"><Link href="#">Yt</Link></div>
            <div className="btn"><Link href="#">Fb</Link></div>
            <div className="btn"><Link href="#">In</Link></div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
