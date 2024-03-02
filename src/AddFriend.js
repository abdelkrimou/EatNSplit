import { useState } from "react";

export default function AddFriend({
  friendsList,
  setFriendsList,
  isOpen,
  setIsOpen,
  billShow,
  setBillShow,
}) {
  const [friendName, setFriendName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleShowAdd() {
    billShow && setBillShow(false);
    setIsOpen((s) => !s);
    setFriendName("");
    setImage("https://i.pravatar.cc/48");
  }

  function addFriend(e) {
    e.preventDefault();
    const date = Date.now();
    const newFriend = {
      id: date,
      name: friendName,
      image: `${image}?u=${date}`,
      balance: 0,
    };
    setIsOpen(false);
    friendName.trim() !== "" &&
      setFriendsList(() => [...friendsList, newFriend]);
  }

  return isOpen ? (
    <>
      <form className="form-add-friend">
        <label htmlFor="friendname">🧍🏼Friend Name</label>
        <input
          id="friendname"
          type="text"
          value={friendName}
          onChange={(e) => setFriendName(e.target.value)}
        ></input>

        <label htmlFor="image">🌄 Image URL</label>
        <input
          id="image"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        ></input>

        <button className="button" onClick={addFriend}>
          Add
        </button>
      </form>
      <button className="button" onClick={handleShowAdd}>
        Close
      </button>
    </>
  ) : (
    <button className="button" onClick={handleShowAdd}>
      Add Friend
    </button>
  );
}
