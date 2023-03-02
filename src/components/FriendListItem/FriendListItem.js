import PropTypes from 'prop-types';
import { Friend, Status, FriendImg, FriendName } from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <Friend>
      <Status status={isOnline}>{isOnline}</Status>
      <FriendImg src={avatar} alt={name} />
      <FriendName>{name}</FriendName>
    </Friend>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
