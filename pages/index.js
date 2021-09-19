import Head from 'next/head';

import Header from '../components/Header';
import Main from '../components/Main';

import WaveProvider from '../components/WaveProvider';
import Advantages from '../components/Advantages';
import QuemSomos from '../components/QuemSomos';
import Partners from '../components/Partners';
import Plans from '../components/Plans';
import Footer from '../components/Footer';
import PosFooter from '../components/PosFooter';

import ModalComponent from '../components/ModalComponent';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Refatorando | Entre para a era digital!</title>
        <meta name="description" content="Refatorando - o seu site de tecnologia, desenvolvimento e design." />
        <link 
          rel="icon" 
          href={
            process.browser && window && window.matchMedia('(prefers-color-scheme: dark)')
              ? '/favicon.ico'
              : '/favicon-black.ico'
          } 
        />
      </Head>

      <Header />
      <Main />

      <WaveProvider>
        <Advantages />
        <QuemSomos />
      </WaveProvider>

      <Partners />
      <Plans />
      <Footer />
      <PosFooter />

      <ModalComponent />

    </div>
  )
}
