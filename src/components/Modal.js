import './Modal.css';
import Button from './UI/Button';
import Card from './UI/Card';

const Modal = props => {
  console.log('modal');

  return (
    <div className='modal'>
      <Card className='modal-content'>
        <h2 className='modal-header'>Invalid input</h2>
        <div className='modal-body'>
          {props.modalBody}
        </div>
        <Button>Okay</Button>
      </Card>
    </div>
  )
};

export default Modal;