// import Image from "next/image";
import About from './components/About/About';
import Header from './components/Header/Header';
import HowToBuy from './components/HowToBuy/HowToBuy';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import styles from './page.module.css';
// Import the styles provided by the react-pdf-viewer packages
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <WelcomeSection />
      <About />
      <HowToBuy />
      {/* <Tokenomics/> */}
    </div>
  );
}
