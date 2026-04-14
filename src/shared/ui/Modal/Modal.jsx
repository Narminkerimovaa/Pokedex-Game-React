import styles from './Modal.module.css';

const Modal = () => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>BATTLE RESULT</h2>
        <div className={styles.divider}></div>
        <p>Oyunun detalları burada göstəriləcək.</p>
        <button className={styles.closeBtn}>CLOSE</button>
      </div>
    </div>
  );
};

export default Modal;