import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { Header } from '@/components';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { codedHours, brainstormHours, completedProject } from '@/config';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <>
      <Header />
      <main className="px-10">
        <div className="flex flex-row">
          <div className="flex flex-1 flex-col justify-center">
            <div className="flex flex-row gap-6 text-2xl cursor-pointer w-full justify-start">
              <FaFacebookF className="hover:text-secondary transition-all duration-150 cursor-pointer" />
              <FaInstagram className="hover:text-secondary transition-all duration-150 cursor-pointer" />
              <FaYoutube className="hover:text-secondary transition-all duration-150 cursor-pointer" />
              <FaTwitter className="hover:text-secondary transition-all duration-150 cursor-pointer" />
            </div>
            <h1 className="text-6xl mt-10 w-[600px] leading-tight">
              XXXXXXXX Providing The Best Services & IT{' '}
              <span className="text-secondary relative">Solutions </span>
            </h1>
            <p>
              When it comes to software development, initial success often hinges on a well-executed
              minimum viable product. We build MVPs and prototypes in record time. We handle
              starting form Architecture development to Cloud deployment.
            </p>
          </div>
          <div className="flex flex-1">
            <div className={styles.center}>
              <div className="relative w-[600px] h-[400px]">
                <Image
                  className={styles.logo}
                  src="/main.png"
                  alt="Ditinex Buisness main"
                  fill={true}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/*<div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
  </div>*/}

        <div className="flex flex-1 relative min-h-[200px] rounded-2xl bg-primary-light mt-4 justify-around items-center">
          <div className="flex justify-center items-center flex-col">
            <div className={styles.thirteen}>
              <span className={`font-bold text-3xl ${styles.title_span}`}>{codedHours}+</span>
            </div>
            <p className={`font-bold text-sm uppercase mt-3`}>Hours Coded</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className={styles.thirteen}>
              <span className={`font-bold text-3xl ${styles.title_span}`}>{brainstormHours}+</span>
            </div>
            <p className={`font-bold text-sm uppercase mt-3`}>Hours Brainstormed</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className={styles.thirteen}>
              <span className={`font-bold text-3xl ${styles.title_span}`}>{completedProject}+</span>
            </div>
            <p className={`font-bold text-sm uppercase mt-3`}>Completed Projects</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
