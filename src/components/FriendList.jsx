import PropTypes from 'prop-types';
import { FriendListItem } from '../components/FriendListItem';
import styles from '../styles/Friends.module.css';

export const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={styles.friendList}>
        {friends.friendsArray.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ).isRequired,
};
