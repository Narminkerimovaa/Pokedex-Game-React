import styles from './Card.module.css';

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png" alt="Charmander" />
      </div>
      <h3>Charmander</h3>
      <p>62 XP</p>
    </div>
  );
};

export default Card;