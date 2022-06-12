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
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

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
      className={
        colorAfter
          ? styles.Navbar_nav
          : isOpen
          ? styles.Navbar_nav
          : styles.Navbar_nav2
      }
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
                <NavLink
                  className={colorAfter ? styles.different : styles.different2}
                  id="different"
                  href="/"
                >
                  Acceuil
                </NavLink>
                {/* <NavLink  href="/">
              Acceuil
            </NavLink> */}
              </li>
              <li className={styles.Navbar_li_menu}>
                <div
                  className={colorAfter ? styles.different : styles.different2}
                  id="different"
                  onClick={() => distance("navbar", "OurRoom")}
                >
                  Nos salles
                </div>
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
          <div
            className={
              isOpen
                ? styles.Navbar_div_menu_mobile
                : styles.Navbar_div_menu_mobile
            }
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image
              src={
                !colorAfter
                  ? isOpen
                    ? "/close.png"
                    : "/burgerMenu.png"
                  : isOpen
                  ? "/close.png"
                  : "/darkBurgerMenu.png"
              }
              id="logo"
              alt="logo"
              width={!isOpen ? 45 : 30}
              height={!isOpen ? 50 : 30}
              className={styles.Navbar_logo_mobile_menu}
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={styles.Navbar_div_menu_mobile_content}>
          <ul className={styles.Navbar_ul_menu_mobile}>
            <li
              className={styles.Navbar_li_menu_mobile}
              onClick={() => setIsOpen(false)}
            >
              <NavLink
                // className={colorAfter ? styles.different : styles.different2}
                id="different"
                href="/"
              >
                Accueil
              </NavLink>
            </li>
            <li
              className={styles.Navbar_li_menu_mobile}
              onClick={() => setIsOpen(false)}
            >
              <div
                // className={colorAfter ? styles.different : styles.different2}
                id="different"
                onClick={() => distance("navbar", "Description")}
              >
                Qui sommes nous
              </div>
            </li>
            <li
              className={styles.Navbar_li_menu_mobile}
              onClick={() => setIsOpen(false)}
            >
              <div
                // className={colorAfter ? styles.different : styles.different2}
                id="different"
                onClick={() => distance("navbar", "Photos")}
              >
                Nos photos
              </div>
            </li>
            <li
              className={styles.Navbar_li_menu_mobile}
              onClick={() => setIsOpen(false)}
            >
              <div
                className={colorAfter ? styles.different : styles.different2}
                id="different"
                onClick={() => distance("navbar", "OurRoom")}
              >
                Nos salles
              </div>
            </li>
            <li
              className={styles.Navbar_li_menu_mobile}
              onClick={() => setIsOpen(false)}
            >
              <NavLink
                // className={colorAfter ? styles.different : styles.different2}
                id="different"
                href="/contact"
              >
                Nous contacter
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
