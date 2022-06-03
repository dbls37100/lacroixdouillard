import React, { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/dist/client/image";
import { Header } from "next/dist/lib/load-custom-routes";
import Link from "next/link";
import { NavLink } from "./NavLink";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Navbar = ({ colorAfter, setColorAfter }) => {
  const [height, setHeight] = useState(65);
  const [width, setWidth] = useState(65);
  const router = useRouter();

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     const navbar = document.getElementById("navbar");
  //     const logo = document.getElementById("logo");
  //     const Navbar_ul = document.getElementById("Navbar_ul");
  //     console.log(window.scrollY, navbar);
  //     if (window.location.pathname === "/contact") {
  //       navbar.style.color = "black";
  //     }
  //     if (window.scrollY > 500) {
  //       navbar.classList.add("navbar_scrolled");
  //       navbar.style.backgroundColor = "white";
  //       navbar.style.color = "black";
  //       navbar.style.height = "15vh";
  //       // navbar.style.animation =
  //       //   "scale-up-ver-top 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both";
  //       setHeight(50);
  //       setWidth(50);
  //       // Navbar_ul.style.alignItems = "top";
  //     } else {
  //       if (window.location.pathname !== "/contact") {
  //         navbar.style.color = "white";
  //       }
  //       navbar.style.backgroundColor = "rgba(0,0,0,0)";
  //       navbar.style.height = "20vh";
  //       setHeight(55);
  //       setWidth(55);
  //     }
  //   });
  // }, []);

  function getPositionAtCenter(element) {
    const { top, left, width, height } = element.getBoundingClientRect();
    return {
      x: left + width / 2,
      y: top + height / 2,
    };
  }

  async function getDistanceBetweenElements(a, b) {
    const aPosition = getPositionAtCenter(a);
    const bPosition = getPositionAtCenter(b);
    const distanceResult = Math.hypot(
      aPosition.x - bPosition.x,
      aPosition.y - bPosition.y
    );

    return window.scrollTo({
      top: distanceResult - window.innerHeight / 2,
      behavior: "smooth",
    });
  }

  async function distance(a, b) {
    await router.push("/");
    // construct a 2 second timer
    const timer = new Promise((resolve) => setTimeout(resolve, 500));
    // wait for the timer to finish
    await timer;

    getDistanceBetweenElements(
      document.getElementById(a),
      document.getElementById(b)
    );
  }
  return (
    <nav
      className={colorAfter ? styles.Navbar_nav : styles.Navbar_nav2}
      id="navbar"
    >
      <div className={styles.Navbar_div_Test}>
        <div className={styles.Navbar_div_invisible}></div>
        <div className={styles.Navbar_general_display}>
          <NavLink
            className={!colorAfter ? styles.Navbar_logo : styles.Navbar_logo2}
            href="/"
          >
            <motion.div
              className={styles.Navbar_motion_div_logo}
              style={{ backgroundColor: "transparent" }}
              whileHover={{
                rotate: 360,
                transition: {
                  duration: 0.5,
                  ease: "easeInOut",
                },
              }}
            >
              <Image
                src="/logo.png"
                id="logo"
                alt="logo"
                width={width}
                height={height}
                className={
                  !colorAfter ? styles.Navbar_logo : styles.Navbar_logo2
                }
              />
            </motion.div>
          </NavLink>
          <div id="wrapper" className={styles.Navbar_div_menu}>
            <ul className={styles.Navbar_ul_menu} id="Navbar_ul">
              <li className={styles.Navbar_li_menu}>
                <div
                  className={colorAfter ? styles.different : styles.different2}
                  id="different"
                  onClick={() => distance("navbar", "first-section")}
                >
                  Acceuil
                </div>
                {/* <NavLink  href="/">
              Acceuil
            </NavLink> */}
              </li>
              <li className={styles.Navbar_li_menu}>
                <NavLink
                  className={colorAfter ? styles.different : styles.different2}
                  id="different"
                  href="/#first-section"
                >
                  Nos services
                </NavLink>
              </li>
              <li className={styles.Navbar_li_menu}>
                <div
                  className={colorAfter ? styles.different : styles.different2}
                  id="different"
                  onClick={() => distance("navbar", "Photos")}
                >
                  Nos photos
                </div>
              </li>
              <li className={styles.Navbar_li_menu}>
                <NavLink
                  className={colorAfter ? styles.different : styles.different2}
                  id="different"
                  href="/contact"
                >
                  Nous contacter
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
