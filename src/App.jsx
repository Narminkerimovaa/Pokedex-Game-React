import styles from './styles/App.module.css';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import Battle from './components/battle/Battle';

const App = () => {
  return (
    <div className={styles.appContainer}>
      <Sidebar />
      <main className={styles.mainContent}>
        <Navbar />
        <Battle />
      </main>
    </div>
  );
};

export default App;