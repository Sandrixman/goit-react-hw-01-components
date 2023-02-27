import Profile from 'components/Profile/Profile';
import users from './user.json';

export const App = () => {
  return (
    <Profile
      username={users.username}
      tag={users.tag}
      location={users.location}
      avatar={users.avatar}
      followers={users.stats.followers}
      views={users.stats.views}
      likes={users.stats.likes}
    />
  );
};
