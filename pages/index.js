import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Description from "../components/Description";
import Photos from "../components/Photos";
import OurRoom from "../components/OurRoom";
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
    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("navbar");
      if (router.pathname !== "/contact" && window.scrollY > 500) {
        // navbar.style.backgroundColor = "white";
        // navbar.style.color = "black";
        // navbar.style.height = "15vh";
        setColorAfter(true);
      } else if (router.pathname !== "/contact" && window.scrollY < 500) {
        setColorAfter(false);
        // navbar.style.backgroundColor = "rgba(0,0,0,0)";
        // navbar.style.height = "20vh";
        // navbar.style.color = "white";
      }
    });
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
        <meta name="description" content="Votre lieux de fetes à amboise" />
        <meta
          name="google-site-verification"
          content="ca7u7GMXe6n3aqnzsFOyf9iwVOHG6NAMCHPZVeut2bI"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="robots"
          content="index,follow,nosnippet,max-snippet:-1,max-image-preview:none,noarchive,noimageindex,max-video-preview:-1,notranslate"
        />
      </Head>

      <main className={styles.main} style={{ scrollBehavior: "smooth" }}>
        <NextSeo
          robotsProps={{
            nosnippet: true,
            notranslate: true,
            noimageindex: true,
            noarchive: true,
            maxSnippet: -1,
            maxImagePreview: "none",
            maxVideoPreview: -1,
          }}
        />
        <Navbar colorAfter={colorAfter} setColorAfter={setColorAfter} />
        <Banner />
        <Description />
        <Photos />
        <OurRoom />
      </main>

      <footer className={styles.footer}>
        <div className={styles.footer_div_description}>
          <p>Les Caves de la Croix Douillard</p>
          <span className={styles.logo}>
            <Image src="/logo.png" alt="Vercel Logo" width={25} height={25} />
          </span>
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
