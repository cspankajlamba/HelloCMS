// Header.js
import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import style from './style.module.css'
import colors from '../style/colors.module.scss'
import align from '../style/alignment.module.scss'
import SearchBox from './SearchBox.js';

const Header = () => {
  const headerStyles = {
    display: align.dflex,
    flexDirection: align.fRow,
    justifyContent: align.jcSB,
    padding: align.p10,
    padding: '0 1rem',
    height: '5rem',
    borderBottom: '.1rem solid #e4e3e1',
    alignItems : align.alC,
  };
  const menuStyles ={
    display: align.dflex,
    flexDirection: align.fRow,
    gap: '.1rem'
  };
  const menuItemStyle = {
    textDecoration: 'none',
    padding: '.8rem',
  }
return <header id='header' className={style.header} style={{backgroundColor: colors.bgLight}}>
  <div style={headerStyles}>
    <div className={style.logo} style={{display: align.dflex, alignItems: align.alC, gap : align.gp10}}>
      <Image src="/icons/favicon.png" alt="favicon" width={30} height={30}/>
      <a>Piotech INDIA</a>
    </div>
    <SearchBox/>
    <div className="buttons" style={{display: align.dflex, gap: align.gp10, padding: align.p10, border: '.1rem solid #e4e3e1', borderRadius: align.b_rad}}>
      <div className="btn">Mode</div>
      <div className="btn">
      <Image src='/icons/bookmark.svg' alt='search icon' width={18} height={18}></Image>
      </div>
    </div>
  </div>
  </header>;
};

export default Header;