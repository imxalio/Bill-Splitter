import { useState } from 'react';
import Button from './Button';

function AddFriend({ friends, setFriends }) {
  const [name, setName] = useState();
  const [image, setImage] = useState('https://i.pravatar.cc/400');
  const [showForm, setShowForm] = useState(false);

  const id = crypto.randomUUID();
  const newFriend = {
    id,
    name,
    image,
    balance: 0,
  };

  function addNewFriend(e) {
    e.preventDefault();
    if (!name || !image) return;
    setFriends([...friends, newFriend]);
  }

  function handleShowForm() {
    setShowForm((cur) => !cur);
  }
  return (
    <div className="add-section">
      {showForm && (
        <form className="addFriend">
          <label htmlFor="name">Friend Name</label>
          <input onChange={(e) => setName(e.target.value)} id="name" />

          <label htmlFor="img">Image URL</label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            id="img"
          />

          <Button onClick={addNewFriend}>Add Friend</Button>
        </form>
      )}

      <Button onClick={handleShowForm}>
        {showForm ? 'Close' : 'Add Friend'}
      </Button>
    </div>
  );
}

export default AddFriend;
