import React from 'react';
import styles from './Header.module.css';
import Roadmap from '../Roadmap/Roadmap';

// import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <div className={styles.headerContainer}>

        <img
          src='assets/images/GeckoPng.png'
          alt='mainLogo'
          width={70}
          height={70}
        />
      <div className={styles.navContainer}>
        <p>ABOUT GECKO</p>

        {/* <p>ROADMAP</p> */}
        <p>HOW TO BUY</p>
        {/* <p>TOKENOMICS</p> */}
        {/* <p>FAQ</p> */}
        <Roadmap />
      </div>
      <div className={styles.buyButtonContainer}>
        <button className={styles.buyButton}>BUY NOW</button>
      </div>
    </div>
  );
};

export default Header;
