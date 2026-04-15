import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.historyTitle}>🕒 HISTORY</div>
      <div className={styles.historyList}>
        {/* history.map() buraya gəlir */}
        <div className={styles.historyCard}>
          <b>Team 1 Won</b>
          <small>12:00:00</small>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
