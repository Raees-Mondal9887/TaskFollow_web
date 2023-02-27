import Header from '@/components/Header/Header';
import React from 'react';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import Hero from './Hero';
import Services from './Services';
import Stats from './Stats';
const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="bg-body-color">
          <Image
            src="/curve-bg.png"
            alt="curve-shape-for-design"
            height={200}
            width={1300}
            className="min-w-full"
          />
        </div>

        <Services />
        <Stats/>
      </main>
      <Footer />
    </>
  );
};

export default Home;
