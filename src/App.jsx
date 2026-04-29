import styles from "./styles/App.module.css";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import BattleContainer from "./components/battle/BattleContainer";
import { useEffect, useState } from "react";
import {
  distributePokemon,
  calcXP,
  getWinner,
} from "./utils/battleUtil.js";

const App = () => {
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
    <div className={styles.appContainer}>
      <Sidebar />
      <main className={styles.mainContent}>
        <Navbar startBattle={startBattle}/>
        <BattleContainer team1={team1} team2={team2} winner={winner}/>
      </main>
    </div>
  );
};

export default App;
