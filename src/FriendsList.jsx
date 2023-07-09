import Friend from './Friend';

function FriendsList({ friends, setUser, user, setShowBill, showBill }) {
  return (
    <article className="friends">
      {friends.map((item) => {
        return (
          <Friend
            friend={item}
            key={item.id}
            setUser={setUser}
            user={user}
            setShowBill={setShowBill}
            showBill={showBill}
          />
        );
      })}
    </article>
  );
}

export default FriendsList;
