import Head from 'next/head';

import Header from '../components/Header';
import Main from '../components/Main';

import WaveProvider from '../components/WaveProvider';
import Advantages from '../components/Advantages';
import QuemSomos from '../components/QuemSomos';
import ModalComponent from '../components/ModalComponent';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Refatorando | Entre para a era digital!</title>
        <meta name="description" content="Refatorando - o seu site de tecnologia, desenvolvimento e design." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main />

      <WaveProvider>
        <Advantages />
        <QuemSomos />
      </WaveProvider>

      <ModalComponent />

    </div>
  )
}
