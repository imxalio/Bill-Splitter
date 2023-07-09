import Button from './Button';

function Friend({ friend, setUser, user, setShowBill, showBill }) {
  const isValid = friend.id === user?.id;
  const { image, name, balance, id } = friend;

  function handleSetUser() {
    setUser(friend);
    setShowBill((cur) => !cur);
  }

  return (
    <div className="friend">
      <img src={`${image}?img=${id}`} alt="name" />
      <div>
        <h1>{name}</h1>

        {balance > 0 && (
          <p className="green">
            {name} owes you {Math.abs(balance)}$
          </p>
        )}

        {balance < 0 && (
          <p className="red">
            You owes {name} {Math.abs(balance)}$
          </p>
        )}

        {balance === 0 && <p>You and {name} are even</p>}
      </div>
      <Button onClick={handleSetUser}>
        {showBill && isValid ? 'close' : 'open'}
      </Button>
    </div>
  );
}

export default Friend;
