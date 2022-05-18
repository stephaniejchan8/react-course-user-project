import styles from './UserItem.module.css';

const UserItem = props => {
  return (
    <div className={styles['user-item']}>
      <p>
        {props.name}
        {props.age} years old
      </p>
    </div>
  );
}

export default UserItem;