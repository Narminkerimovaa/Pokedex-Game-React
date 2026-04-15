import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logoArea}>
      <svg  width="40" height="40" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="#4ade80" strokeWidth="8" />
        <line x1="5" y1="50" x2="95" y2="50" stroke="#4ade80" strokeWidth="8" />
        <circle className={styles.dot} cx="50" cy="50" r="15" fill="#4ade80" />
      </svg>
      <h1>POKÉDEX</h1>
    </div>
  );
};

export default Logo;