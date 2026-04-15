import styles from './Navbar.module.css';
import Logo from "@/assets/logo.svg?react";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoArea}>
          <div className={styles.dot}>
          <Logo/>
          </div>
        <h1>POKÉDEX</h1>
      </div>
      <button className={styles.navBtn}>NEW BATTLE</button>
    </nav>
  );
};

export default Navbar;