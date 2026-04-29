import styles from "./Battle.module.css";
import PokeTeam from "./PokeTeam";

const BattleArena = ({ teamName, hand, totalXP, isWinner }) => {
  return (
    <div className={`${styles.battleArena} ${isWinner ? styles.isWinner : ''}`}>
      <div className={styles.headText}>
        <h3 className={styles.teamHeader}>{teamName}</h3>
        <div className={styles.scoreText}>{totalXP} XP</div>
        <div
          className={`${styles.statusLabel} ${
            isWinner ? styles.winLabel : styles.statusLabel
          }`}
        >
          {isWinner ? "WINNER" : "DEFEAT"}
        </div>
      </div>
      <div className={styles.cardGrid}>
        {hand.map((pokemon) => (
          <PokeTeam key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default BattleArena;
