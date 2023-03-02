import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendsList from 'components/FriendList/FriendList';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

export default function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends}>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </FriendsList>
      <TransactionHistory items={transactions} />;
    </>
  );
}
