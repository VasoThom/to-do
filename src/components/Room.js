import "./style.css";

function Room({ item }) {
  const reverse = (str) => str.split("-").reverse().join(".");

  return (
    <div>
      <div className="room">
        <h2 className="roomsnummer">Room-nummer: {item.roomNo}</h2>
        <h3>Name : {item.guest.firstName}</h3>
        <h3>Vorname :{item.guest.lastName}</h3>
        <h3>Ankunft :{reverse(item.checkIn)}</h3>
        <h3>Abfahrt :{reverse(item.checkOut)}</h3>
      </div>
    </div>
  );
}

export default Room;
