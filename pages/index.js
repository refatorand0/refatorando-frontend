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
import MouseArrowDown from '../components/MouseArrowDown';
import { useMediaQuery } from 'react-responsive';

import ModalComponent from '../components/ModalComponent';

export default function Home() {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <div>
      <Head>
        <title>Refatorando | Entre para a era digital!</title>
        <meta name="description" content="Refatorando - o seu site de tecnologia, desenvolvimento e design." />
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Header />
      <Main />
      <MouseArrowDown />

      <WaveProvider>
        <Advantages />
        <QuemSomos />
      </WaveProvider>
      
      <Partners isMobile={isMobile}/>
      <Plans isMobile={isMobile}/>
      <Footer />
      <PosFooter />

      <ModalComponent isMobile={isMobile}/>

    </div>
  )
}
