import Button from './Button';
import { useState } from 'react';

function BillForm({ friend, friends, setFriends }) {
  const [bill, setBill] = useState(0);
  const [expense, setExpense] = useState(0);
  const [user, setUser] = useState('you');

  const allExpense = bill - expense;

  function handleBillForm(e) {
    e.preventDefault();

    const updatedFriends = friends.map((item) => {
      if (item.id === friend.id) {
        const newBalance =
          user === 'you'
            ? item.balance + allExpense
            : item.balance - allExpense;
        return { ...item, balance: newBalance };
      }
      return item;
    });

    setFriends(updatedFriends);
  }

  return (
    <div>
      <h1
        style={{
          textTransform: 'uppercase',
          marginBottom: '2rem',
          textAlign: 'center',
        }}
      >
        Split a bill with {friend?.name}
      </h1>
      <form className="addFriend">
        <label htmlFor="bill">Bill Value</label>
        <input id="bill" onChange={(e) => setBill(e.target.value)} />

        <label htmlFor="expense"> Your expense</label>
        <input id="expense" onChange={(e) => setExpense(e.target.value)} />

        <label>{friend?.name}'s expense</label>
        <input disabled value={allExpense} />

        <label>Who is paying the bill</label>
        <select value={user} onChange={(e) => setUser(e.target.value)}>
          <option value={'you'}>You</option>
          <option value={'friend'}>{friend?.name}</option>
        </select>

        <Button onClick={handleBillForm}>Split the bill</Button>
      </form>
    </div>
  );
}

export default BillForm;
