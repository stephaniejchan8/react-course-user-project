// import {useState} from 'react';
import Card from "./UI/Card";
import UserItem from "./UserItem";
import './UserList.css';

const UserList = props => {
  // const [displayUsers, setDisplayUsers] = useState('No users inputted yet.');
  let content = <p className='no-input'>No users inputted yet.</p>;

  if (props.items.length > 0) {
    content = props.items.map(user => {
      return <UserItem name={user.name} age={user.age} key={Math.random()} />
    });
  };

  return (
    <Card className='user-list'>
      {content}
    </Card>
  );
}

export default UserList;