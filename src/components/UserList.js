// import {useState} from 'react';
import UserItem from "./UserItem";
import styles from './UserList.module.css';

const UserList = props => {
  // const [displayUsers, setDisplayUsers] = useState('No users inputted yet.');
  let content = <p className={styles['no-input']}>No users inputted yet.</p>;

  if (props.items.length > 0) {
    content = props.items.map(user => {
      return <UserItem name={user.name} age={user.age} key={Math.random()} />
    });
  };

  return (
    <div className={styles['user-list']}>
      {content}
    </div>
  );
}

export default UserList;