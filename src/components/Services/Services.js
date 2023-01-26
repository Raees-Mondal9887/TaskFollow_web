import React from 'react';
import Card from '../Card/Card';
const Services = () => {
  return (
    <section className='bg-bgc'>
      <div className=" py-11 max-w-80 ">
        <div className="m-3 mb-7 md:m-15 sm:mb-14">
          <h2 className="section-title text-lg text-secondary">Services We Offer</h2>
          <p className="my-5 text-medium text-textc md:text-2xl">
            We have stellar experience in working on a project from or <br className='hidden md:inline-block'/> a module from
            extensive application.
          </p>
        </div>
        <div className="m-3 flex justify-center flex-wrap gap-7 md:justify-around">
          <Card title="Full Stack Web Developement" img="./full-stack-development.png">
            <ul className="list text-textc">
              <li>Responsive Design</li>
              <li>MERN (Mongo, Express, Reactjs, Nodejs)</li>
              <li>Custom PHP site</li>
              <li>Wordpress</li>
              <li>Woocommerce</li>
              <li>Shopify</li>
              <li> DB : Mysql, Firebase, MongoDB, Postgress</li>
            </ul>
          </Card>
          <Card title="iOS/Android App" img="./ios-android.png">
            <ul className="list text-textc">
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
          <Card title="DevOps / Server Admin" img="./devops.png">
            <ul className="list text-textc">
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
  );
};

export default Services;
