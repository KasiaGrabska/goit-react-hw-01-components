import PropTypes from 'prop-types';
import styles from '../styles/FriendsListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <li className={styles.item}>
      <span
        className={styles.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      />
      <img className={styles.avatar} src={avatar} alt="User avatar" />
      <p className={styles.name}>{name}</p>
    </li>
  </>
);

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  }).isRequired,
};
