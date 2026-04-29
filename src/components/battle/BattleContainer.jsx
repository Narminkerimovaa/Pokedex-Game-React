import BattleArena from "./BattleArena";
import styles from "./Battle.module.css";
import { calcXP } from "../../utils/battleUtil";
import Confetti from "../ui/Confetti";


const BattleContainer = ({team1,team2,winner,animKey,onPokiClick}) => {
  return (
    <div className={styles.battleContainer}>
      <Confetti animKey={animKey} />
      <BattleArena
        teamName="TEAM 1"
        hand={team1}
        totalXP={calcXP(team1)}
        isWinner={winner === "team1"}
        onPokiClick={onPokiClick}
      />
      <BattleArena
        teamName="TEAM 2"
        hand={team2}
        totalXP={calcXP(team2)}
        isWinner={winner === "team2"}
        onPokiClick={onPokiClick}
      />
    </div>
  );
};

export default BattleContainer;
