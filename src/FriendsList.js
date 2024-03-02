import Friend from "./Friend";

export default function FriendsList({
  friendsList,
  handleBillShow,
  selectedFriend,
}) {
  return (
    <ul>
      {friendsList.map((friend) => (
        <Friend
          friend={friend}
          key={friend.name}
          handleBillShow={handleBillShow}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
