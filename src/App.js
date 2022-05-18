import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
  const userDatabase = [];
  const addUserHandler = user => {
    userDatabase.unshift(user);
    console.log(userDatabase);
  };

  return (
    <div>
      <UserForm onAddUser={addUserHandler}/>
      <UserList items={userDatabase}/>
    </div>
  );
}

export default App;
