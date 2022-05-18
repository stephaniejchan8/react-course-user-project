import {useState} from 'react';

import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
  const [userDatabase, setUserDatabase] = useState('');

  const addUserHandler = user => {
    setUserDatabase(prevState => {
      return [user, ...prevState];
  });
};

  return (
    <div>
      <UserForm onAddUser={addUserHandler}/>
      <UserList items={userDatabase} />
    </div>
  );
}

export default App;
