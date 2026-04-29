import styles from './Modal.module.css';
import { pad } from '../../../utils/battleUtil';
import Button from './../Button';

const Modal = ({ pokemon, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pad(pokemon.id)}.png`} />
        <h2>{pokemon.name}</h2>
        <p className={styles.desc}>{pokemon.desc}</p>
        <div className={styles.stats}>
          <span>TYPE: {pokemon.type.toUpperCase()}</span>
          <span>XP: {pokemon.base_experience}</span>
        </div>
        <Button variant="close" onClick={onClose}>CLOSE</Button>
      </div>
    </div>
  );
};

export default Modal;