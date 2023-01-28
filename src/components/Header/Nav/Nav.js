import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../../styles/Nav.module.css';
import Image from 'next/image';
const Nav = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const handlemenu = () => {
    menuVisibility ? setMenuVisibility(false) : setMenuVisibility(true);
    console.log(menuVisibility);
  };
  return (
    <header className="flex items-center justify-between relative p-3 bg-smoke max-w-80">
      <div className="logo">
        <Link href="#">
          <Image src="/Logo.png" alt="ditinex-logo" width={160} height={56} className="h-14" />
        </Link>
      </div>
      <nav>
        <ul
          className={
            menuVisibility
              ? 'mobile gap-4 transition-all rounded'
              : 'hide md:flex nav-links gap-6  absolute md:static'
          }
        >
          <li className="nav-link">
            <Link
              href="#"
              className="active uppercase hover:text-secondary transition-all duration-150"
            >
              Home
            </Link>
          </li>
          <li className="nav-link">
            <Link href="#" className="uppercase hover:text-secondary transition-all duration-150">
              About
            </Link>
          </li>
          <li className="nav-link">
            <Link href="#" className="uppercase hover:text-secondary transition-all duration-150">
              Services
            </Link>
          </li>
          <li className="nav-link">
            <Link href="#" className="uppercase hover:text-secondary transition-all duration-150">
              Portfolio
            </Link>
          </li>
          <li className="nav-link">
            <Link href="#" className="uppercase hover:text-secondary transition-all duration-150">
              Blog
            </Link>
          </li>
          <li className="nav-link">
            <Link href="#" className="uppercase hover:text-secondary transition-all duration-150">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className="bg-secondary text-white block md:hidden rounded-md p-3 shadow-btn-shadow"
        onClick={handlemenu}
      >
        <svg
          className="fill-current h-6 w-6"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </header>
  );
};

export default Nav;
