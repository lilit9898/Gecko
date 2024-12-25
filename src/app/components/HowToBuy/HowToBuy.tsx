import Divider from '@/app/Shared/Divider';
import Link from 'next/link';
import React from 'react';
import styles from './HowToBuy.module.css';

const HowToBuy: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>How to buy GECKO</h1>
      <div
        style={{
          width: '100px',
          height: '45px',
          backgroundColor: 'rgb(34,34,34)',
          textAlign: 'center',
          border: '2px solid white',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Link
          href='https://app.ston.fi/swap?chartVisible=false&chartInterval=1w&ft=TON&tt=EQA42um-pf3bJ6KH08Fv8-ALGOt0a4-460etgeaydJjYRu-O'
          passHref
          legacyBehavior
        >
          <a
            target='_blank'
            rel='noopener noreferrer'
            style={{ fontSize: '20px', color: 'White' }}
          >
            Sron.fi
          </a>
        </Link>
      </div>
      <Divider />
    </div>
  );
};

export default HowToBuy;
