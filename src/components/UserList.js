// import {useState} from 'react';
import UserItem from "./UserItem";

const UserList = props => {
  // const [displayUsers, setDisplayUsers] = useState('No users inputted yet.');
  let content = <p>No users inputted yet.</p>;

  if (props.items.length > 0) {
    content = props.items.map(user => {
      return <UserItem name={user.name} age={user.age} key={Math.random()} />
    });
  };

  return (
    <div>
      {content}
    </div>
  );
}

export default UserList;