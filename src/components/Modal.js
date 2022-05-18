import styles from './Modal.module.css';
import Card from './UI/Card';

const Modal = () => {
  return (
    <div className={styles.modal}>
      <Card>
        <div className={styles.header}>Invalid input</div>
      </Card>
    </div>
  )
};

export default Modal;