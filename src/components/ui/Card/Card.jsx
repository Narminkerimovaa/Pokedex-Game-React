import styles from './Card.module.css';

const Card = () => {
  return (
    <div className={styles.pokeCard} onClick=''>
      <img src='' alt='' />
      <h4></h4>
      <p>XP</p>
    </div>
  );
};

export default Card;