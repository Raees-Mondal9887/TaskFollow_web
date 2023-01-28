import Header from '@/components/Header/Header';
import React from 'react';
import Head from 'next/head';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import Card from '@/components/Card/Card';
import { HoursBrainstormed, HoursCoded, ProjectsDelivered } from '@/config';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube, BsArrowRight } from 'react-icons/bs';
const Home = () => {
  return (
    <>
      <Head>
        <meta name="prism.publicationDate" content="meta data placeholder" />
        <title>Ditinex | The Next Digital Tech</title>
      </Head>
      <Header />
      <main>
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
                When it comes to software development, initial success often hinges on a well-
                executed minimum viable product. We build MVPs and prototypes in record time. We
                handle starting form Architecture development to Cloud deployment.
              </p>
              <div className="flex justify-start">
                <button className="cta inline-flex items-center gap-2 md:gap-3 p-8 text-2xl lg:text-4xl text-white bg-secondary border-0 py-1 lg:py-2 px-4 lg:px-6 focus:outline-none rounded shadow-btn-shadow hover:shadow-lg-shadow transition-shadow">
                  Let's Talk
                  <BsArrowRight className="h-[50px] w-[40px] duration-150 cursor-pointer lg:h-[76px] lg:w-[76px] drop-shadow-2xl" />
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image className="object-cover object-center rounded" alt="hero-background" height="500" width="500" src="/hero_image.png" />
            </div>
          </div>
        </section>
        <div className="bg-body-color">
          <Image src="/curve-bg.png" alt='curve-shape-for-design' height={200} width={1300} className="min-w-full" />
        </div>
        <section className="bg-body-color">
      <div className=" py-11 max-w-80 ">
        <div className="m-3 mb-7 md:m-15 sm:mb-14">
          <h2 className="section-title text-lg text-secondary">Services We Offer</h2>
          <p className="my-5 text-medium text-text-color md:text-2xl">
            We have stellar experience in working on a project from or{' '}
            <br className="hidden md:inline-block" /> a module from extensive application.
          </p>
        </div>
        <div className="m-3 flex justify-center flex-wrap lg:flex-nowrap gap-7 md:gap-6 md:justify-around">
          <Card title="Full Stack Web Developement" img="/full-stack-development.png">
            <ul role="list" className="list text-text-color">
              <li>Responsive Design</li>
              <li>MERN (Mongo, Express, Reactjs, Nodejs)</li>
              <li>Custom PHP site</li>
              <li>Wordpress</li>
              <li>Woocommerce</li>
              <li>Shopify</li>
              <li> DB : Mysql, Firebase, MongoDB, Postgress</li>
            </ul>
          </Card>
          <Card title="iOS/Android App" img="/ios-android.png">
            <ul className="list text-text-color">
              <li>React Native / Flutter</li>
              <li>Express Nodejs / Php</li>
              <li>Mongose / Firebase / Mysql / Postgress</li>
              <li>Media Product Startegy</li>
              <li>Prototyping and Concept </li>
              <li>Developement</li>
              <li>Quality Assurance & Testing</li>
              <li>Code / Document Readibility</li>
            </ul>
          </Card>
          <Card title="DevOps / Server Admin" img="/devops.png">
            <ul className="list text-text-color">
              <li>Installation and Initial Server Setup </li>
              <li>CI/CD Pipeline</li>
              <li>Server Hardening</li>
              <li>Server Optimization</li>
              <li>Migration Assistance</li>
              <li>Server Monitoring</li>
              <li>Hack & Spamming Issue Investigation</li>
              <li>Automate the server using tools such Ansible</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
    <div className="stats flex justify-evenly py-10 md:py-14">
      <div className="flex flex-col items-center text-center">
        <h5 className="text-2xl md:text-5xl font-bold text-secondary">{ProjectsDelivered}+</h5>
        <p className="text-md md:text-lg font-bold text-white uppercase">
          Project <br /> Deleverd
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
        <h5 className="text-2xl  md:text-5xl font-bold text-secondary">{HoursCoded}+</h5>
        <p className="text-md md:text-lg font-bold text-white uppercase">
          Hours <br /> Coded
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
        <h5 className="text-2xl md:text-5xl font-bold text-secondary">{HoursBrainstormed}+</h5>
        <p className="text-md md:text-lg font-bold text-white uppercase">
          Hours <br /> Brainsrormed
        </p>
      </div>
    </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
