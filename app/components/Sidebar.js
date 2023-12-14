// Header.js
import React from 'react';
import Link from 'next/link'
import style from './style.module.css'
import colors from '../style/colors.module.scss'
import align from '../style/alignment.module.scss'
const Sidebar = () => {
  return (
    <div className={style.sidebar} style={{display: align.dflex, flexDirection: align.fCol,gap: align.gp20,alignItems: align.alC, justifyContent: align.jcC,marginTop: align.m20}}> 
      <li><Link href="/" className={style.menuItem}>MenuItem</Link></li>
      <li><Link href="/" className={style.menuItem}>MenuItem</Link></li>
      <li><Link href="/" className={style.menuItem}>MenuItem</Link></li>
      <li><Link href="/" className={style.menuItem}>MenuItem</Link></li>
      <li><Link href="/" className={style.menuItem}>MenuItem</Link></li>
      <li><Link href="/" className={style.menuItem}>MenuItem</Link></li>
      <li><Link href="/" className={style.menuItem}>MenuItem</Link></li>
      <li><Link href="/" className={style.menuItem}>MenuItem</Link></li>
      <li><Link href="/" className={style.menuItem}>MenuItem</Link></li>
      <li><Link href="/" className={style.menuItem}>MenuItem</Link></li>
    </div>
  );
};

export default Sidebar;
