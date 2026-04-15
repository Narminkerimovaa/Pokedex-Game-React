import styles from "./styles/App.module.css";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import BattleContainer from "./components/battle/BattleContainer";

const App = () => {
  return (
    <div className={styles.appContainer}>
      <Sidebar />
      <main className={styles.mainContent}>
        <Navbar />
        <BattleContainer />
      </main>
    </div>
  );
};

export default App;
