import React from 'react';
import styles from './WelcomeSection.module.css';

const WelcomeSection: React.FC = () => {
  return (
    <div className={styles.welcomeContainer}>
      {/* <p style={{ fontSize: '30px' }}>
        In the world of beasts be a gecko, just chill 🦎
      </p> */}
      <img
        src='assets/images/GeckoAndGod.jpeg'
        alt='GeckoAndGod'
        width='100%'
      />
    </div>
  );
};

export default WelcomeSection;
