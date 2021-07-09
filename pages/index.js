import Head from 'next/head';
import cn from "classnames";
import { ParallaxProvider } from 'react-scroll-parallax';
import OwnTheFuture from '../components/OwnTheFuture';
import EcommerceBusiness from '../components/EcommerceBusiness';
import WhatWeDo from "../components/WhatWeDo";
import GetInTouch from "../components/GetInTouch";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <ParallaxProvider>
      <div className={styles.container}>
        <Head>
          <title>Birdhaus</title>
          <meta name="description" content="Birdhaus Landing page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={cn("col-12",styles.main)}>
          <div className={cn("row pt-4")}><OwnTheFuture /></div>
          <div className="row"><EcommerceBusiness /></div>
          <div className="row"><WhatWeDo /></div>
          <div className="row"><GetInTouch /></div>
        </div>
      </div>
    </ParallaxProvider>
  )
}
