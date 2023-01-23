import Head from 'next/head';
import Home from '@/layouts/Home';
import TopSection from '@/layouts/Home/TopSection';
import Services from '@/layouts/Home/Services';
import AboutSection from '@/layouts/Home/AboutSection';

export default function Page() {
  return (
    <>
      <Head>
        <title>The Next Digital Tech - Ditinex | IT Solutions</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopSection />
      <Home />
      <Services />
      <AboutSection />
    </>
  );
}
