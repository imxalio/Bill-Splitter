import { useState } from 'react';
import FriendsList from './FriendsList';
import AddFriend from './AddFriend';
import BillForm from './BillForm';
import './App.css';
import data from './data';

function App() {
  const [friends, setFriends] = useState(data);
  const [user, setUser] = useState();
  const [showBill, setShowBill] = useState(false);

  return (
    <menu>
      {showBill && (
        <BillForm friend={user} friends={friends} setFriends={setFriends} />
      )}
      <div>
        <section>
          <FriendsList
            friends={friends}
            setUser={setUser}
            user={user}
            setShowBill={setShowBill}
            showBill={showBill}
          />
          {!showBill && <AddFriend friends={friends} setFriends={setFriends} />}
        </section>
      </div>
    </menu>
  );
}

export default App;
