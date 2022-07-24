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

export default function Home() {
  const [colorAfter, setColorAfter] = useState(false);
  const router = useRouter();

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
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
        <title>
          Les Caves de la croix Douillard - Salle de reception à Amboise
        </title>
        <meta
          name="description"
          content="Les Caves de la Croix Douillard, location de salle à Amboise, vous vous demandez ou sont les caves ? Vous les avez trouvé nous serrons tres heureux de vous acceuillir pour toutes vos réception, mariage, fetes privées ou séminaires. la plus atypique des salles d'Amboise"
        />
        {/* <meta
          name="title"
          content="Les Caves de la croix Douillard - Salle de reception à Amboise"
        /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} style={{ scrollBehavior: "smooth" }}>
        <Navbar colorAfter={colorAfter} setColorAfter={setColorAfter} />
        <Banner />
        <Description setColorAfter={setColorAfter} />
        <Photos setColorAfter={setColorAfter} />
        <OurRoom setColorAfter={setColorAfter} />
        <AdditionalBenefit setColorAfter={setColorAfter} />
        <Restoration setColorAfter={setColorAfter} />
        <Location setColorAfter={setColorAfter} />
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
