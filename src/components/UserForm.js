import { useState } from 'react';
import './UserForm.css';
import Button from './UI/Button';
import Card from './UI/Card';

const UserForm = props => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const submitHandler = event => {
    event.preventDefault();
    const userData = {
      name: enteredName,
      age: enteredAge
    };
    props.onAddUser(userData);
    setEnteredName('');
    setEnteredAge('');
  };

  const nameChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = event => {
    setEnteredAge(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <Card className='user-form'>

      <label>Username</label>
      <input type="text" onChange={nameChangeHandler} value={enteredName}></input>
      <label>Age (Years)</label>
      <input type="number" step="1" min="1" onChange={ageChangeHandler} value={enteredAge}></input>
      <Button type='submit'>Add User</Button>
      </Card>
    </form>
  )
};

export default UserForm;