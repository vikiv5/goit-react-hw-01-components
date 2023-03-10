import Profile from 'components/profile/Profile'
import user from "../components/profile/user"

import { Statistics } from 'components/statistics/Statistics';
import data from '../components/statistics/data.json';

import {FriendList} from "components/friends/FriendList";
import friends from '../components/friends/friends.json';


import { TransactionHistory } from "components/transactionHistory/TransactionHistory";
import transactions from '../components/transactionHistory/transactions.json';

 
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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
    
  );
}