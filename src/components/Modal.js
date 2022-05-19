// import {useState} from 'react';
import './Modal.css';
import Button from './UI/Button';
import Card from './UI/Card';

const Modal = props => {
  // const [modalActive, setModalActive] = useState(false);
  const modalClassName = props.className + ' modal';
  console.log('modal');
  const clickHandler = event => {
    props.onToggleModal(false);
  };

  return (
    <div onClick={clickHandler} className={modalClassName}>
      <Card className='modal-content' onClick={event => event.stopPropagation()}>
        <h2 className='modal-header'>Invalid input</h2>
        <div className='modal-body'>
          {props.modalBody}
        <div className='right'>
          <Button>Okay</Button>

        </div>
        </div>
      </Card>
    </div>
  )
};

export default Modal;