import { useState } from "react";

export default function SplitBill({
  selectedFriend,
  friendsList,
  setFriendsList,
  bill,
  setBill,
  yourExpense,
  setYourExpense,
}) {
  const friendExpense = bill && bill - yourExpense;
  const [whopaid, setWhopaid] = useState("you");
  const balanceBill = whopaid === "you" ? +friendExpense : -yourExpense;
  function splitBill(e) {
    setBill("");
    setYourExpense("");
    e.preventDefault();
    setFriendsList(
      friendsList.map((friend) =>
        friend.name === selectedFriend
          ? { ...friend, balance: friend.balance + balanceBill }
          : friend
      )
    );
  }

  return (
    <form className="form-split-bill" onSubmit={splitBill}>
      <h2>split the bill with {selectedFriend}</h2>

      <label htmlFor="bill">💰 Bill Value</label>
      <input
        id="bill"
        type="number"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      ></input>

      <label htmlFor="yourexpense">🙋🏻‍♂️ Your expense</label>
      <input
        id="yourexpense"
        type="number"
        value={yourExpense}
        onChange={(e) =>
          setYourExpense(
            Number(e.target.value) > bill ? yourExpense : e.target.value
          )
        }
      ></input>

      <label htmlFor="friendexpense">🧍🏼‍♂️ {selectedFriend}'s expense</label>
      <input
        id="friendexpense"
        type="number"
        disabled
        value={friendExpense}
      ></input>

      <label htmlFor="whopaid">🤑 Who is paying the bill </label>
      <select
        id="whopaid"
        value={whopaid}
        onChange={(e) => setWhopaid(e.target.value)}
      >
        <option value="you">You</option>
        <option value={selectedFriend}>{selectedFriend}</option>
      </select>

      <button className="button">Split Bill</button>
    </form>
  );
}
