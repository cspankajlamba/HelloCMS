"use client"
import { useState } from 'react';
import Image from 'next/image';
import style from '../global.css'
import styles from './style.module.css'
import align from '../style/alignment.module.scss'


const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    alert(`You Searched for: ${searchTerm}`);
  };

  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="Enter your search term"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className={styles.searchBtn} onClick={handleSearch}>
        <Image src='/icons/search.svg' alt='search icon' width={18} height={18}></Image>
      </button>
    </div>
  );
};

export default SearchBox;
