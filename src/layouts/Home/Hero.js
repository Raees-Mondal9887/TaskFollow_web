import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Hero.module.css';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube, BsArrowRight } from 'react-icons/bs';
const Hero = () => {
  return (
    <section className="bg-smoke max-w-80">
      <div className="mx-auto md:mx-5 flex px-2 py-11 md:py-16 md:flex-row flex-col-reverse gap-7 md:gap-0 items-center relative">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-10 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="mb-5 flex flex-col gap-4 text-2xl p-3 top-10 left-0 w-fit cursor-pointer justify-start py-2 lg:py-0 absolute sm:static sm:flex-row">
            <BsFacebook className="text-primary h-[28px] w-[28px] md:h-[33px] md:w-[33px] hover:text-secondary transition-all duration-150 cursor-pointer" />
            <BsInstagram className="text-primary h-[28px] w-[28px] md:h-[33px] md:w-[33px] hover:text-secondary transition-all duration-150 cursor-pointer" />
            <BsTwitter className="text-primary h-[28px] w-[28px] md:h-[33px] md:w-[33px] hover:text-secondary transition-all duration-150 cursor-pointer" />
            <BsYoutube className="text-primary h-[28px] w-[28px] md:h-[33px] md:w-[33px] hover:text-secondary transition-all duration-150 cursor-pointer" />
          </div>
          <h1 className="title-font lg:text-3xl text-2xl md:text-2xl mb-4 font-medium text-black">
            We Make Sure We Deliver Best
            <br className="hidden md:inline-block" />
            End-To-End Product Design
            <br className="hidden md:inline-block" />
            And Development
          </h1>
          <p className="mb-8 leading-relaxed text-text-color">
            When it comes to software development, initial success often hinges on a well- executed
            minimum viable product. We build MVPs and prototypes in record time. We handle starting
            form Architecture development to Cloud deployment.
          </p>
          <div className="flex justify-start">
            <button className={`${styles.cta} relative inline-flex items-center gap-2 md:gap-3 p-8 text-2xl lg:text-4xl text-white bg-secondary border-0 py-1 lg:py-2 px-4 lg:px-6 focus:outline-none rounded shadow-btn-shadow hover:shadow-lg-shadow transition-shadow`}>
              Let's Talk
              <BsArrowRight className="h-[50px] w-[40px] duration-150 cursor-pointer lg:h-[76px] lg:w-[76px] drop-shadow-2xl" />
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero-background"
            height="500"
            width="500"
            src="/hero_image.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
