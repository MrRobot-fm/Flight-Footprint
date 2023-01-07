import React from 'react';
import styles from '../styled/style';
import { Hero, Stats } from '../components';
import { Features, SearchPage, ContactMe } from '../pages';

const Home = () => {
  return (
    <div
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} ${styles.flexCenter} relative`}
    >
      <div className={`${styles.boxWidth} overflow-hidden `}>
        <Hero />
        <Stats />
        <Features />
        <SearchPage />
        <ContactMe />
      </div>
    </div>
  );
};

export default Home;
