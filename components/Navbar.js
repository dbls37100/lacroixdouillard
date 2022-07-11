import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/dist/client/image";
import { NavLink } from "./NavLink";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Navbar = ({ colorAfter }) => {
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
                layout="fixed"
                width={65}
                height={65}
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
            className={isOpen ? styles.opened : styles.menu}
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* <button
              className={!isOpen ? styles.opened : styles.menu}
              onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))"
              aria-label="Main Menu"
            > */}
            <svg width="100" height="100" viewBox="0 0 100 100">
              <path
                className={colorAfter ? styles.line1Black : styles.line1}
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path
                className={colorAfter ? styles.line1Black : styles.line2}
                d="M 20,50 H 80"
              />
              <path
                className={colorAfter ? styles.line1Black : styles.line3}
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
            {/* </button> */}
            {/* <Image
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
            /> */}
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
