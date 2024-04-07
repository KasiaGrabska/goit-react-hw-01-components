import { FriendListItem } from '../components/FriendListItem';
import styles from '../styles/Friends.module.css';

export const FriendList = ({ friends }) => {
  const friendList = friends.friendsArray;
  return (
    <ul className={styles.friendList}>
      {friendList.map(friend => (
        <FriendListItem key={friend.id} friend={friend}></FriendListItem>
      ))}
    </ul>
  );
};
