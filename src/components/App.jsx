import { FriendList } from '../components/FriendList';
import { Profile } from '../components/Profile';
import { Statistics } from '../components/Statistics';
import { TransactionHistory } from '../components/TransactionHistory';

import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transaction.json';
import user from '../data/user.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory itemsArray={transactions} />
    </div>
  );
};
