import BattleArena from "./BattleArena";
import styles from "./Battle.module.css";
import {
  distributePokemon,
  calcXP,
  getWinner,
} from "./../../utils/battleUtil.js";
import { useEffect, useState } from "react";

const BattleContainer = () => {
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);
  const [winner, setWinner] = useState("");

  function startBattle() {
    const teams = distributePokemon();
    const { team1, team2 } = teams;
    const xp1 = calcXP(team1);
    const xp2 = calcXP(team2);
    const winner = getWinner(xp1, xp2);
    setTeam1(team1);
    setTeam2(team2);
    setWinner(winner);
  }

useEffect(() => {
  startBattle();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

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
