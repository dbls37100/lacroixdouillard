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
    // navbar.style.color = "white";
    console.log("index");
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
        <title>Les Caves de la croix Douillard</title>
        <meta
          name="description"
          content="Salle à louer situé à Amboise pour mariage, anniversaire, séminaire ou tout autre évenements"
        />
        <meta name="title" content="Les Caves de la croix Douillard" />
        <meta
          name="google-site-verification"
          content="ca7u7GMXe6n3aqnzsFOyf9iwVOHG6NAMCHPZVeut2bI"
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
            <Image src="/logo.png" alt="Vercel Logo" width={50} height={50} />
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
