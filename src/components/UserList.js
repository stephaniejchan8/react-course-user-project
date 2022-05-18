// import {useState} from 'react';

const UserList = props => {
  // const [displayUsers, setDisplayUsers] = useState('No users inputted yet.');
  let content = <p>No users inputted yet.</p>;

  if (props.items.length > 0) {
    content = <p>You have added content.</p>;
  };

  return (
    <div>
      {content}
    </div>
  );
}

export default UserList;