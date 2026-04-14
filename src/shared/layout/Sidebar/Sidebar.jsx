import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.title}>🕒 HISTORY</div>
      <div className={styles.list}>
        <div className={styles.historyCard}>
          <b>Team 1 Won</b>
          <small>14:42:33</small>
        </div>
        <div className={styles.historyCard}>
          <b>Team 2 Won</b>
          <small>14:35:10</small>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;