import BattleArena from "./BattleArena";
import styles from "./Battle.module.css";

const BattleContainer = () => {
  return (
    <div className={styles.battleContainer}>
      <BattleArena teamName="TEAM 1" totalXP="561" status="WINNER" />
      <BattleArena teamName="TEAM 2" totalXP="311" status="DEFEAT" />
    </div>
  );
};

export default BattleContainer;
