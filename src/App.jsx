import styles from "./styles/App.module.css";

const App = () => {
  return (
    <div className={styles.appContainer}>
      
      <aside className={styles.sidebar}>
        {/* Sidebar (History) bura gələcək */}
      </aside>

      <main className={styles.mainContent}>
        
        <nav className={styles.navbar}>
          {/* Navbar (Logo və Button) bura gələcək */}
        </nav>

        <div className={styles.arenaPlaceholder}>
          {/* Arena (Teams) bura gələcək */}
        </div>

      </main>

    </div>
  );
};

export default App;