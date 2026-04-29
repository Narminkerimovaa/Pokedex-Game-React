import styles from "./Battle.module.css";
import PokeTeam from "./PokeTeam";

const BattleArena = ({ teamName, totalXP, status }) => {
  return (
    <div className={styles.battleArena}>
      <div className={styles.headText}>
        <h3 className={styles.teamHeader}>{teamName}</h3>
        <div className={styles.scoreText}>{totalXP} XP</div>
        <div className={styles.winLabel}>{status}</div>
      </div>
      <div className={styles.cardGrid}>
        <PokeTeam />
        <PokeTeam />
        <PokeTeam />
        <PokeTeam />
      </div>
    </div>
  );
};

export default BattleArena;
