import { Profile } from '../components/Profile';
import { Statistics } from '../components/Statistics';

import data from '../data/data.json';
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
    </div>
  );
};
