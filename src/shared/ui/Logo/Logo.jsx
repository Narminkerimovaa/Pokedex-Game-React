import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logoWrapper}>
      <svg width="40" height="40" viewBox="0 0 100 100">
        <circle 
          cx="50" cy="50" r="45" 
          fill="none" 
          stroke="var(--primary-green)" 
          strokeWidth="8"
        />
        <line 
          x1="5" y1="50" x2="95" y2="50" 
          stroke="var(--primary-green)" 
          strokeWidth="8"
        />
        <circle cx="50" cy="50" r="15" fill="var(--primary-green)"/>
      </svg>
      <span className={styles.logoText}>POKÉDEX</span>
    </div>
  );
};

export default Logo;