import {useState} from 'react';

import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import Modal from './components/Modal';

function App() {
  const [userDatabase, setUserDatabase] = useState('');

  const addUserHandler = user => {
    setUserDatabase(prevState => {
      return [user, ...prevState];
  });
};

  return (
    <div className='App'>
      <Modal />
      <UserForm onAddUser={addUserHandler}/>
      <UserList items={userDatabase} />
    </div>
  );
}

export default App;
