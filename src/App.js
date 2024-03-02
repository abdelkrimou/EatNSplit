import { useState } from "react";
import FriendsList from "./FriendsList";
import AddFriend from "./AddFriend";
import SplitBill from "./SplitBill";
const initialFriends = [
  {
    id: 118836,
    name: "Hamza",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -45,
  },
  {
    id: 933372,
    name: "Bassma",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Zakaria",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friendsList, setFriendsList] = useState(initialFriends);
  const [billShow, setBillShow] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState();
  const [isAddFrOpen, setIsAddFrOpen] = useState();

  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");

  function handleBillShow(friend) {
    setBill("");
    setYourExpense("");
    selectedFriend !== friend.name
      ? setBillShow((s) => true)
      : setBillShow((s) => !s);
    setSelectedFriend(() => friend.name);

    setIsAddFrOpen(false);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friendsList={friendsList}
          handleBillShow={handleBillShow}
          selectedFriend={selectedFriend}
        />
        <AddFriend
          isOpen={isAddFrOpen}
          setIsOpen={setIsAddFrOpen}
          friendsList={friendsList}
          setFriendsList={setFriendsList}
          billShow={billShow}
          setBillShow={setBillShow}
          selectedFriend={selectedFriend}
        />
      </div>
      {billShow && (
        <SplitBill
          setFriendsList={setFriendsList}
          selectedFriend={selectedFriend}
          friendsList={friendsList}
          bill={bill}
          setBill={setBill}
          yourExpense={yourExpense}
          setYourExpense={setYourExpense}
        />
      )}
    </div>
  );
}
