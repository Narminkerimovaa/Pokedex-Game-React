import styles from './Modal.module.css';

const Modal = () => {
  return (
    <div className={styles.modalOverlay} onClick=''>
      <div className={styles.modalContent} onClick=''>
      </div>
    </div>
  );
};

export default Modal;