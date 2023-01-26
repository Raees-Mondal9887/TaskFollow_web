import React from 'react';
import { useState, useEffect } from 'react';
const Nav = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const handlemenu = () => {
    menuVisibility ? setMenuVisibility(false) : setMenuVisibility(true);
    console.log(menuVisibility);
  };
  return (
    <header className="flex items-center justify-between relative p-3 bg-smoke max-w-80">
      <div className="logo">
        <a href="#">
          <img src="/Logo.png" className="h-14" alt="logo" />
        </a>
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
            <a href="#" className="active uppercase">
              Home
            </a>
          </li>
          <li className="nav-link">
            <a href="#" className="uppercase">
              About
            </a>
          </li>
          <li className="nav-link">
            <a href="#" className="uppercase">
              Services
            </a>
          </li>
          <li className="nav-link">
            <a href="#" className="uppercase">
              Portfolio
            </a>
          </li>
          <li className="nav-link">
            <a href="#" className="uppercase">
              Blog
            </a>
          </li>
          <li className="nav-link">
            <a href="#" className="uppercase">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <button
        className="bg-secondary text-white block md:hidden rounded-md p-3"
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
