import { useState, useEffect } from "react";
import "./style.css";
// import rooms from "../rooms.json";

function Room({ item }) {
  const reverse = (str) => str.split("-").reverse().join(".");
  function Handler(event) {
    console.log(event);
    // setCheck(!check);
    setcheckedIn(!checkedIn);
  }

  // const [check, setCheck] = useState(false);
  // item.check = check;
  console.log(item);
  // useEffect(() => {
  //   // if (check) {
  //   //   alert(`Zimmer Nr.  ${item.roomNo}  ist nun belegt.`);
  //   // }
  // });
  const [checkedIn, setcheckedIn] = useState(false);
  // localStorage.setItem("rooms", JSON.stringify(rooms));
  // var stRooms = JSON.parse(localStorage.getItem(`rooms`));
  // console.log(`stRooms:`, stRooms);

  // localStorage.setItem("key", JSON.stringify(rooms));
  // localStorage.getItem(
  //   "rooms" !== null ? JSON.parse(localStorage.getItem("rooms")) : rooms
  // )

  useEffect(() => {
    localStorage.setItem("rooms", JSON.stringify(checkedIn));
  });

  return (
    <div>
      <div className="room">
        <h2 className="roomsnummer">Room-nummer: {item.roomNo}</h2>
        <h3>Name : {item.guest.firstName}</h3>
        <h3>Vorname :{item.guest.lastName}</h3>
        <h3>Ankunft :{reverse(item.checkIn)}</h3>
        <h3>Abfahrt :{reverse(item.checkOut)}</h3>
        <p> {checkedIn ? "True" : "False"}</p>

        <button onClick={Handler}>
          {checkedIn ? "Check In" : "Check Out"}
        </button>
        {checkedIn === true && (
          <p>
            <b className="blue">Das Zimmer ist verfügbar</b>
          </p>
        )}
        {checkedIn === false && (
          <p>
            <b className="red">Das Zimmer ist nicht verfügbar</b>
          </p>
        )}
      </div>
    </div>
  );
}

export default Room;
