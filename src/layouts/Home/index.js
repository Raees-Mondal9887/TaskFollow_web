import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { Header } from '@/components';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube, BsArrowRight } from 'react-icons/bs';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <>
      <Header />
      <main className="bg-smoke flex flex-col gap-10 h-full lg:max-h-[497px] py-3">
        <div className="flex justify-center flex-col lg:flex-row px-5 md:pl-8">
          <div
            className={`flex flex-1 flex-col justify-evenly break-words w-full lg:w-[560px] gap-5 ${styles.info}`}
          >
            <div className="flex flex-row gap-4 text-2xl cursor-pointer w-full justify-start py-2 lg:py-0">
              <BsFacebook className="text-slate-600 h-[28px] w-[28px] md:h-[33px] w-[33px] hover:text-secondary transition-all duration-150 cursor-pointer" />
              <BsInstagram className="text-slate-600 h-[28px] w-[28px] md:h-[33px] w-[33px] hover:text-secondary transition-all duration-150 cursor-pointer" />
              <BsTwitter className="text-slate-600 h-[28px] w-[28px] md:h-[33px] w-[33px] hover:text-secondary transition-all duration-150 cursor-pointer" />
              <BsYoutube className="text-slate-600 h-[28px] w-[28px] md:h-[33px] w-[33px] hover:text-secondary transition-all duration-150 cursor-pointer" />
            </div>
            <h1 className="leading-tight font-normal max-w-[700px] lg:max-w-[500px] text-3xl sm:text-4xl">
              We Make Sure We Deliver Best End-To-end Product Design And Development
            </h1>
            <p className="text-gray-600 font-medium text-1xl max-w-[700px] lg:max-w-[560px]">
              When it comes to software development, initial success often hinges on a well-executed
              minimum viable product. We build MVCs and prototypes in record time. We handle
              starting form Architecture development to Cloud deployment.
            </p>
            <div className="h-[104px] w-[370px] flex">
              <button className="shadow-lg shadow-stone-600 h-full w-[324px] bg-secondary rounded-lg flex justify-evenly items-center text-white hover:text-slate-300 hover:bg-red-500">
                <p className="text-4xl font-normal">Let's Talk</p>
                <BsArrowRight className="duration-150 cursor-pointer h-[76px] w-[76px] drop-shadow-2xl" />
              </button>
              <div className="h-full flex justify-center items-center">
                <div className={styles.triangle}></div>
              </div>
            </div>
          </div>
          <div className="flex flex-1">
            <div className={styles.center}>
              <div
                className={`relative w-[580px] h-[450px] md:w-[580px] h-[400px] ${styles.banner}`}
              >
                <Image
                  className={styles.logo}
                  src="/SVG image.png"
                  alt="Ditinex Buisness main"
                  fill={true}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
