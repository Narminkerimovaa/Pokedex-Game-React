import Card from "../ui/Card";
import styles from "./Battle.module.css";

const BattleArena = ({ teamName, totalXP, status }) => {
  return (
    <Card variant="teamBox" className={styles.battleArena}>
      <div className={styles.teamHeader}>{teamName}</div>
      <div className={styles.scoreText}>{totalXP} XP</div>
      <div className={styles.statusText}>{status}</div>
    </Card>
  );
};

export default BattleArena;
