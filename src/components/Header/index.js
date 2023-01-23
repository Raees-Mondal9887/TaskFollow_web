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
  const [menuVisibility, setMenuVisibility] = useState(false);

  const handlemenu = () => {
    menuVisibility ? setMenuVisibility(false) : setMenuVisibility(true);
  };

  return (
    // <nav class="flex items-center justify-around pt-6 pb-6 flex-wrap min-h-[111px] bg-smoke px-4">
    //   <div class="flex items-center flex-shrink-0 text-white mr-6">
    //     <Image src="/Logo.png" alt="Ditinex Logo" width={236} height={80} priority />
    //   </div>
    //   <div class="block lg:hidden">
    //     <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
    //       <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    //         <title>Menu</title>
    //         <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    //       </svg>
    //     </button>
    //   </div>
    //   {/* <div class="w-2/5 block lg:flex flex-wrap lg:justify-center items-center lg:h-12 w-2/5 bg-white"> */}
    //   <div class="w-full hidden pb-5 flex-grow lg:flex pb-0 lg:items-center lg:w-auto block justify-end">
    //     <div class="text-base font-bold text-blk flex-grow lg:flex justify-evenly h-59 max-w-[618px]">
    //       <a
    //         href="#responsive-header"
    //         class="block mt-4 lg:inline-block lg:mt-0 text-black-200 text-secondary hover:text-secondary px-3"
    //       >
    //         HOME
    //       </a>
    //       <a
    //         href="#responsive-header"
    //         class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-secondary px-4"
    //       >
    //         ABOUT
    //       </a>
    //       <a
    //         href="#responsive-header"
    //         class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-secondary px-4"
    //       >
    //         SERVICES
    //       </a>
    //       <a
    //         href="#responsive-header"
    //         class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-secondary px-4"
    //       >
    //         PORTFOLIO
    //       </a>
    //       <a
    //         href="#responsive-header"
    //         class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-secondary px-4"
    //       >
    //         BLOG
    //       </a>
    //       <a
    //         href="#responsive-header"
    //         class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-secondary px-4"
    //       >
    //         CONTACT
    //       </a>
    //     </div>
    //   </div>
    // </nav>

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
              : // : ' bg-white text-base text-blk font-bold w-full flex-grow hidden lg:flex lg:items-center lg:justify-end lg:w-auto'
                'text-base text-blk font-bold w-full flex-grow hidden lg:flex lg:items-center lg:justify-end lg:w-auto'
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
