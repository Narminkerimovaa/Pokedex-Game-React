import BattleArena from "./BattleArena";
import styles from "./Battle.module.css";
import { calcXP } from "../../utils/battleUtil";


const BattleContainer = ({team1,team2,winner}) => {
  return (
    <div className={styles.battleContainer}>
      <BattleArena
        teamName="TEAM 1"
        hand={team1}
        totalXP={calcXP(team1)}
        isWinner={winner === "team1"}
      />
      <BattleArena
        teamName="TEAM 2"
        hand={team2}
        totalXP={calcXP(team2)}
        isWinner={winner === "team2"}
      />
    </div>
  );
};

export default BattleContainer;
