import "./style.css";

function Room({ item }) {
  const reverse = (str) => str.split("-").reverse().join(".");

  return (
    <div className="room">
      <h2 className="roomsnummer">Room-nummer: {item.roomNo}</h2>
      <h3>{item.guest.firstName}</h3>
      <h3>{item.guest.lastName}</h3>
      <h3>{reverse(item.checkIn)}</h3>
      <h3>{reverse(item.checkOut)}</h3>
    </div>
  );
}

export default Room;
