import Button from '../../ui/Button';
import styles from './Navbar.module.css';
import Logo from "./../../../assets/logo.svg?react";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoArea}>
          <div className={styles.dot}>
          <Logo/>
          </div>
        <h1>POKÉDEX</h1>
      </div>
      <Button
      onClick={() => console.log("Göndərildi!")}
      variant="play"
      >
        NEW BATTLE
      </Button>
    </nav>
  );
};

export default Navbar;