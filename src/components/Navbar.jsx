import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from '../styled/style';
import menu from '../assets/img/menu.svg';
import close from '../assets/img/close.svg';
import Translate from '../services/Translate/Translate';

import { DarkModeBtn, NavList } from '../components';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const location = useLocation();

  const handleToggle = () => {
    setToggle(prev => !prev);
  };

  return (
    <motion.div
      id="start"
      className={`${styles.paddingX} ${styles.flexCenter} sm:mb-0 mb-2 relative`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, zIndex: 10 }}
      transition={{ type: 'tween', duration: 1.5 }}
    >
      <nav
        className={`${styles.boxWidth} flex sm:py-7 py-5 sm:mb-0 mb-2 justify-between items-center text-secondary dark:text-white relative`}
      >
        <DarkModeBtn toggle={toggle} />

        <ul className="list-none md:flex hidden justify-between items-center flex-[0.5]  font-medium">
          <li className="cursor-pointer text-[2rem] md:text-[1.2rem] hover:text-tertiary hover:-translate-y-1 active:translate-y-0  transition ease-in-out duration-500">
            {location.pathname === '/features' ? (
              <Link to="/">Home</Link>
            ) : (
              <Link to="/features">Features</Link>
            )}
          </li>
          <li className="cursor-pointer  text-[2rem] md:text-[1.2rem] hover:text-tertiary hover:-translate-y-1 active:translate-y-0  transition ease-in-out duration-500 ">
            {location.pathname === '/search-footprint' ? (
              <Link to="/">Home</Link>
            ) : (
              <Link to="/search-footprint">Footprint</Link>
            )}
          </li>
          <li className="cursor-pointer  text-[2rem] md:text-[1.2rem] hover:text-tertiary hover:-translate-y-1 active:translate-y-0  transition ease-in-out duration-500">
            {location.pathname === '/contact-me' ? (
              <Link to="/">Home</Link>
            ) : (
              <Link to="/contact-me">Contact me</Link>
            )}
          </li>
        </ul>

        <Translate toggle={toggle} />

        {/* Hamburger menu */}

        <div className="md:hidden flex flex-1 justify-between items-center ">
          <button
            className="md:hidden w-[3.2rem] h-[3.2rem]  fixed ss:top-[1.8rem] top-[1.5rem] right-[1rem] bg-white mr-[1rem] rounded-full z-[1550] cursor-pointer shadow-md"
            onClick={handleToggle}
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[1.7rem] h-[1.7rem] object-contain z-[2000] ml-4 xxs:ml-3"
            />
          </button>

          <div
            className={
              toggle
                ? ' h-[3.2rem] w-[3.2rem] rounded-[50%] fixed  ss:top-[1.8rem]  top-[1.5rem] right-[2rem] z-[1000] radial-gradient dark:bg-radialModalGradient scale-[70]  ease-in-out duration-[1s] '
                : 'h-[3.2rem] w-[3.2rem] rounded-[50%] fixed  ss:top-[1.8rem]  top-[1.5rem] right-[2rem]  radial-gradient ease-in-out duration-[1s]  z-[1000]  radial-gradient dark:bg-radialModalGradient'
            }
          >
            &nbsp;
          </div>
          <nav
            className={
              toggle
                ? 'w-full h-[100vh] fixed top-0 left-0 z-[1500] visible translate-x-0 ease-in-out duration-[0.8s]'
                : 'w-full h-[100vh] fixed top-0 left-0 invisible translate-x-[100%] '
            }
          >
            <NavList toggle={toggle} setToggle={setToggle} />
          </nav>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
