import styles from "./Confetti.module.css";

function Confetti({animKey}) {
  return (
    <div key={animKey} className={styles.confettiContainer}>
      {[...Array(60)].map((_, i) => (
        <div
          key={i}
          className={styles.particle}
          style={{
            "--angle": `${Math.random() * 360}deg`,
            "--dist": `${200 + Math.random() * 300}px`,
            "--color": ["#4ade80", "#fbbf24", "#f87171", "#38bdf8"][i % 4],
          }}
        />
      ))}
    </div>
  );
}

export default Confetti;
