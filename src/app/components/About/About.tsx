import Divider from '@/app/Shared/Divider';
import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Gecko</h1>
      <div style={{ width: '70%' }}>
        <p style={{ fontSize: '20px' }}>
          Introduction In the dynamic landscape of cryptocurrency, where
          innovation meets culture, Gecko in Hoodie ($Gecko) was born as a meme
          token. However, what started as a playful experiment has evolved into
          a promising project with real-world applications and ambitious goals.
          Gecko aims to build a thriving community, deliver meaningful utility,
          and revolutionize decentralized finance and blockchain ecosystems.
          This whitepaper outlines the roadmap, vision, and strategies that will
          guide $Gecko toward becoming a global digital asset.
        </p>
      </div>
      <Divider />
    </div>
  );
};

export default About;
