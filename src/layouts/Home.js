import Header from '@/components/Header/Header';
import React from 'react';
import Head from 'next/head';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import Stats from '@/components/Stats/Stats';
import Footer from '@/components/Footer/Footer';
const Home = () => {
  return (
    <>
      <Head>
        <meta name="prism.publicationDate" content="2022-03-29" />
        <title>Home Page</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <div className="bg-bgc">
          <img src="./Curve BG.png" className="min-w-full" />
        </div>
        <Services />
        <Stats />
      </main>
      <Footer />
    </>
  );
};

export default Home;
