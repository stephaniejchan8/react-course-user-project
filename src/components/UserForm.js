import { useState } from 'react';
import styles from './UserForm.module.css';
import Button from './UI/Button';

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
  };

  const nameChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = event => {
    setEnteredAge(event.target.value);
  };

  return (
    <form onClick={submitHandler}>
      <div className={styles['user-form']}>

      <label>Username</label>
      <input type="text" onChange={nameChangeHandler} value={enteredName}></input>
      <label>Age (Years)</label>
      <input type="text" onChange={ageChangeHandler} value={enteredAge}></input>
      <Button type='submit'>Add User</Button>
      </div>
    </form>
  )
};

export default UserForm;