import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/styles/Header.module.css';

const navigation = {
  Home: '/',
  About: '/about',
  Service: '/service',
  Portfolio: '/portfolio',
  Blog: '/blog',
  Contact: 'contact'
};

const Header = () => {
  return (
    <nav className="nav flex flex-row justify-between items-center py-10 px-10">
      <Image src="/logo-white.png" alt="Ditinex Logo" width={200} height={60} priority />
      <ul className={`flex flex-row justify-end items-center gap-20 ${styles.nav}`}>
        {Object.keys(navigation).map((item, index) => {
          let className = 'hover:text-secondary hover:font-bold transition-all py-4';
          return (
            <li key={index} className={className}>
              {item}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Header;
