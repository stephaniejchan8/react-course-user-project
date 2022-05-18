import styles from './UserItem.module.css';

const UserItem = props => {
  const content = <p>{props.name} ({props.age} years old)</p>;
  return (
    <div className={styles['user-item']}>
      {content}
    </div>
  );
}

export default UserItem;