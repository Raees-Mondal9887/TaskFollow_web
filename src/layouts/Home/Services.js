import React from 'react';
import Image from 'next/image';
import { GoPrimitiveDot } from 'react-icons/go';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import styles from '@/styles/services.module.css';
import { HoursCoded, HoursBrainstormed, ProjectsDelivered } from '@/config';

const Services = () => {
  return (
    <>
      <div className="max-width-[1300px] w-full h-[85px] bg-smoke rounded-b-[100%]"></div>
      <br></br>
      <div className="w-full px-5">
        <div className="h-[23px] w-[184px] border-l-[5px] border-l-secondary">
          <p className="text-center text-base font-semibold text-secondary">Services We Offer</p>
        </div>
        <br></br>
        <p className="font-semibold text-base leading-7 text-gray-500 max-w-[800px] text-xl lg:text-2xl">
          We have stellar experience in working on a project from scratch or a module from extensive
          application.
        </p>
      </div>
      <br></br>
      <br></br>
      <div className="flex min-h-[548px] w-full items-center px-3 flex-col justify-center gap-5 lg:flex-row justify-evenly">
        <div className="h-[552px] bg-white rounded-2xl w-[355px] shadow-2xl">
          <div className="flex justify-center items-center py-4">
            <Image
              src="/full-stack-development.png"
              alt="Full Stack Development"
              height={156}
              width={225}
              priority
            />
          </div>
          <p className="text-2xl text-blk text-center font-semibold">Full Stack Web Development</p>
          <div className="pt-3 px-4">
            <ul className={`${styles.li2}`}>
              <li>
                <GoPrimitiveDot /> Responsive website
              </li>
              <li>
                <GoPrimitiveDot /> MERN (Mongo, Express, Reactjs, Nodejs)
              </li>
              <li>
                <GoPrimitiveDot /> Custom PHP site
              </li>
              <li>
                <GoPrimitiveDot /> Wordpress
              </li>
              <li>
                <GoPrimitiveDot /> Shopify
              </li>
              <li>
                <GoPrimitiveDot /> DB : Mysql, Firebase, MongoDB, Postgress
              </li>
            </ul>
          </div>
          <div className="h-32 w-full pb-4 flex justify-center items-end">
            <BsFillArrowRightCircleFill
              className={`duration-150 cursor-pointer h-[52px] w-[52px] text-secondary ${styles.arrow}`}
            />
          </div>
        </div>
        <div className="h-[548px] bg-white rounded-2xl w-[355px] shadow-2xl">
          <div className="flex justify-center items-center pt-4 pb-3">
            <Image src="/ios-android.png" alt="ios-android" height={161} width={225} priority />
          </div>
          <p className="text-2xl text-blk text-center font-semibold">iOS / Android App</p>
          <div className="pt-3 px-4">
            <ul className={`${styles.li2}`}>
              <li>
                <GoPrimitiveDot /> React Native / Flutter
              </li>
              <li>
                <GoPrimitiveDot />
                Express, Nodejs / PHP
              </li>
              <li>
                <GoPrimitiveDot /> Mongo / Firebase / Mysql / Postgress
              </li>
              <li>
                <GoPrimitiveDot /> Mobile Product Stratergy
              </li>
              <li>
                <GoPrimitiveDot /> Prototyping and Concept Development
              </li>
              <li>
                <GoPrimitiveDot /> Quality Assuarance & Testing
              </li>
              <li>
                <GoPrimitiveDot /> Code / Document Readability
              </li>
            </ul>
          </div>
          <div className="h-32 w-full flex justify-center items-center pt-5">
            <BsFillArrowRightCircleFill
              className={`duration-150 cursor-pointer h-[52px] w-[52px] text-secondary ${styles.arrow}`}
            />
          </div>
        </div>
        <div className="min-h-[500px] bg-white rounded-2xl w-[355px] shadow-2xl">
          <div className="flex justify-center items-center py-4">
            <Image src="/devops.png" alt="Devops / Srver Admin" height={168} width={210} priority />
          </div>
          <p className="text-2xl text-blk text-center font-semibold">DevOps / Server Admin</p>
          <div className="pt-3 px-4">
            <ul className={`${styles.li}`}>
              <li>
                <GoPrimitiveDot /> Installation and Initial Server Setup Assistance
              </li>
              <li>
                <GoPrimitiveDot /> CI/CD Pipeline
              </li>
              <li>
                <GoPrimitiveDot /> Server Hardening
              </li>
              <li>
                <GoPrimitiveDot /> Server Optimization
              </li>
              <li>
                <GoPrimitiveDot /> Migration Assistance
              </li>
              <li>
                <GoPrimitiveDot /> Server Monitoring
              </li>
              <li>
                <GoPrimitiveDot /> Hack & Spamming issue investigation
              </li>
              <li>
                <GoPrimitiveDot /> Automate the server using tools such as Ansible, chef
              </li>
            </ul>
          </div>
          <div className="pt-2.5 pb-4 flex justify-center items-center">
            <BsFillArrowRightCircleFill
              className={`duration-150 cursor-pointer h-[52px] w-[52px] text-secondary ${styles.arrow}`}
            />
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className={`relative min-h-[216px] w-full ${styles.imgOutside}`}>
        <div
          className={`relative flex min-h-[216px] w-full items-center px-2.5 flex-row justify-evenly ${styles.services}`}
        >
          <Image
            className="opacity-10"
            src="/code-image.png"
            alt="Ditinex Buisness main"
            fill={true}
            priority
          />
          <div className={`h-[124px] w-[203px] flex justify-center items-center flex-col gap-1`}>
            <h1 className="text-5xl font-bold text-secondary">{ProjectsDelivered}+</h1>
            <p className="text-2xl font-bold text-center text-white breaks-words opacity-100">
              PROJECTS
            </p>
            <p className="text-2xl font-bold text-center text-white breaks-words opacity-100 -mt-2">
              DELIVERED
            </p>
          </div>
          <div className={`h-[124px] w-[203px] flex justify-center items-center flex-col gap-1`}>
            <h1 className="text-5xl font-bold text-secondary">{HoursCoded}+</h1>
            <p className="text-2xl font-bold text-white text-center breaks-words opacity-100 px-5">
              HOURS
            </p>
            <p className="text-2xl font-bold text-white text-center breaks-words opacity-100 px-5 -mt-2">
              CODED
            </p>
          </div>
          <div className={`h-[124px] w-[203px] flex justify-center items-center flex-col gap-1`}>
            <h1 className="text-5xl font-bold text-secondary">{HoursBrainstormed}+</h1>
            <p className="text-2xl font-bold text-white text-center breaks-words opacity-100">
              HOURS
            </p>
            <p className="text-2xl font-bold text-white text-center breaks-words opacity-100 -mt-2">
              BRAINSTROMED
            </p>
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
};

export default Services;
