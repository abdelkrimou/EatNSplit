export default function Friend({ friend, selectedFriend, handleBillShow }) {
  return (
    <li
      key={friend.name}
      className={selectedFriend === friend.name ? "selected" : "noselected"}
    >
      <h3>{friend.name}</h3>
      <img src={friend.image} alt={friend.name} />
      {friend.balance === 0 ? (
        <p>You and {friend.name} are even</p>
      ) : friend.balance > 0 ? (
        <p className="green">
          {friend.name} owes you {friend.balance}$
        </p>
      ) : friend.balance < 0 ? (
        <p className="red">
          You owe {friend.name} {-friend.balance}$
        </p>
      ) : null}

      <button className="button" onClick={() => handleBillShow(friend)}>
        Select
      </button>
    </li>
  );
}
