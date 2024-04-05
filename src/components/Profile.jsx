import clsx from 'clsx';
import PropTypes from 'prop-types';

export const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;
  const { followers, views, likes } = stats;

  return (
    <div className={clsx('profile')}>
      <div className={clsx('description')}>
        <img src={avatar} alt="User avatar" className={clsx('avatar')} />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={clsx('stats')}>
        <li>
          <span className={clsx('label')}>Followers</span>
          <span className={clsx('quantity')}>{followers}</span>
        </li>
        <li>
          <span className={clsx('label')}>Views</span>
          <span className={clsx('quantity')}>{views}</span>
        </li>
        <li>
          <span className={clsx('label')}>Likes</span>
          <span className={clsx('quantity')}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
