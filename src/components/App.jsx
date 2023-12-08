import { Profile } from "./profile";
import user from 'data/user.json'
import { Statistics } from "./statistics";
import data from 'data/data.json';
import { FriendList } from "./friends";
import friends from 'data/friends.json';
import { TransactionHistory } from "./transactionhistory";
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} key={data.id} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions}/>
    </>
  );
}
