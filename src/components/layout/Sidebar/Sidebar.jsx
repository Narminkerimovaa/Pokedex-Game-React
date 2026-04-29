import styles from './Sidebar.module.css';

const Sidebar = ({history}) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.historyTitle}>🕒 HISTORY</div>
      <div className={styles.historyList}>
        {history.map((hisCard)=>(
          <div key={hisCard.time} className={styles.historyCard}>
          <b>{hisCard.winner=="team1" ? "Team1": "Team2"} Won</b>
          <small>{hisCard.time}</small>
        </div>
        ))}
        
      </div>
    </aside>
  );
};

export default Sidebar;
