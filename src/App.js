import { useState } from 'react';

import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import Modal from './components/Modal';

function App() {
  const [userDatabase, setUserDatabase] = useState('');
  const [displayModal, setDisplayModal] = useState(false);

  const [modalContent, setModalContent] = useState('');

  const addUserHandler = user => {
    setUserDatabase(prevState => {
      return [user, ...prevState];
    });
  };

  const displayModalHandler = modalMessage => {
    setDisplayModal(true);
    setModalContent(modalMessage);
  };

  return (
    <div className='App'>
      <Modal className={displayModal ? 'display-modal' : ''} onToggleModal={setDisplayModal} modalBody={modalContent}/>
      <UserForm onAddUser={addUserHandler} onDisplayModal={displayModalHandler} />
      <UserList items={userDatabase} />
    </div>
  );
}

export default App;
