import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/styles/Header.module.css';

const Header = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);

  const handlemenu = () => {
    menuVisibility ? setMenuVisibility(false) : setMenuVisibility(true);
  };

  return (
    <>
      <nav class="flex items-center justify-between flex-wrap bg-smoke p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <Image src="/Logo.png" alt="Ditinex Logo" width={236} height={80} priority />
        </div>
        <div class="bg-sky-700 rounded-md block lg:hidden" onClick={handlemenu}>
          <button class="flex items-center px-3 py-2 border-2 rounded-md border-slate-200 text-teal-200 hover:text-white">
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={
            menuVisibility
              ? 'bg-slate-300 rounded-md mt-2 font-bold text-base w-full flex-grow block lg:flex lg:items-center lg:justify-end lg:w-auto lg:bg-smoke'
              : 'text-base text-blk font-bold w-full flex-grow hidden lg:flex lg:items-center lg:justify-end lg:w-auto'
          }
        >
          <div class="text-sm lg:flex justify-end items-center">
            <a
              href="#responsive-header"
              class="block my-3 lg:inline-block lg:mt-0 text-secondary pl-10 hover:text-secondary"
            >
              HOME
            </a>
            <a
              href="#responsive-header"
              class="block my-3 lg:inline-block lg:mt-0 hover:text-secondary pl-10"
            >
              ABOUT
            </a>
            <a
              href="#responsive-header"
              class="block my-3 lg:inline-block lg:mt-0 hover:text-secondary pl-10"
            >
              SERVICES
            </a>
            <a
              href="#responsive-header"
              class="block my-3 lg:inline-block lg:mt-0 hover:text-secondary pl-10"
            >
              PORTFOLIO
            </a>
            <a
              href="#responsive-header"
              class="block my-3 lg:inline-block lg:mt-0 hover:text-secondary pl-10"
            >
              BLOG
            </a>
            <a
              href="#responsive-header"
              class="block my-3 lg:inline-block lg:mt-0 lg:mb-3 hover:text-secondary pl-10 pr-14"
            >
              CONTACT
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
