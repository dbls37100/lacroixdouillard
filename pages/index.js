import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Description from "../components/Description";
import Photos from "../components/Photos";
import OurRoom from "../components/OurRoom";
import Restoration from "../components/Restoration";
import Location from "../components/Location";
import AdditionalBenefit from "../components/AdditionalBenefit";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

export default function Home() {
  const [colorAfter, setColorAfter] = useState(false);
  const router = useRouter();
  // const [scrollChange, setScrollChange] = useState(false);
  // const scrollListener = window.addEventListener("scroll", () => {
  //   setScrollChange(true);
  // });

  // function for detect scroll changement and change color

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        const navbar = document.getElementById("navbar");
        if (router.pathname !== "/contact" && window.scrollY > 500) {
          setColorAfter(true);
        } else if (router.pathname !== "/contact" && window.scrollY < 500) {
          setColorAfter(false);
        }
      },
      { passive: true }
    );
  }, [router.pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Accueil | Les Caves de la Croix Douillard</title>
        <meta
          name="description"
          content="Découvrez les Caves de la Croix Douillard, sa description, ses photos et sa localisation, nous serrons tres heureux de vous acceuillir pour toutes vos réception, mariage, fetes privées ou séminaires."
        />
        <meta
          name="title"
          content="Accueil | Les Caves de la croix Douillard"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} style={{ scrollBehavior: "smooth" }}>
        <Navbar colorAfter={colorAfter} setColorAfter={setColorAfter} />
        <Banner />
        <Description />
        <Photos />
        <OurRoom />
        <AdditionalBenefit />
        <Restoration />
        <Location />
      </main>

      <footer className={styles.footer}>
        <div className={styles.footer_div_description}>
          <span className={styles.logo}>
            <Image
              src="/logo.png"
              className={styles.footer_logo_description}
              alt="Vercel Logo"
              width={50}
              height={50}
            />
          </span>
          <p>Les Caves de la Croix Douillard</p>
        </div>
        <div className={styles.footer_div_footer}>
          <p>
            Copyright © 2022 Les Caves de la Croix Douillard. Tout droit
            réservé.
          </p>
        </div>
      </footer>
    </div>
  );
}
