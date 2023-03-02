import PropTypes from 'prop-types';
import {
  Card,
  CardImg,
  CardInfo,
  Quantity,
  Stats,
  StatsLabel,
  UserInfo,
  UserName,
} from './Profile.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Card>
      <CardInfo>
        <CardImg src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </CardInfo>

      <Stats>
        <li>
          <StatsLabel>Followers</StatsLabel>
          <Quantity>{stats.followers}</Quantity>
        </li>
        <li>
          <StatsLabel>Views</StatsLabel>
          <Quantity>{stats.views}</Quantity>
        </li>
        <li>
          <StatsLabel>Likes</StatsLabel>
          <Quantity>{stats.likes}</Quantity>
        </li>
      </Stats>
    </Card>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
