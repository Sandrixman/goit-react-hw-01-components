import PropTypes from 'prop-types';
import { Friends } from './FriendList.styled';

export default function FriendsList({ children }) {
  return <Friends>{children}</Friends>;
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};
