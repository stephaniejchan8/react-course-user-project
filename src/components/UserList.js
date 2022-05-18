import {useState} from 'react';

const UserList = props => {
  const [displayUsers, setDisplayUsers] = useState('No users inputted yet.');
  let content = <p>{displayUsers}</p>;

  if (props.items.length > 0) {
    setDisplayUsers('You have added content.');
  };

  return (
    <div>
      {displayUsers}
    </div>
  )
};

export default UserList;