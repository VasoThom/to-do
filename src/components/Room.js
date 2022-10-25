import { useState, useEffect } from "react";
import "./style.css";
// import rooms from "../rooms.json";

function Room({ item }) {
  const reverse = (str) => str.split("-").reverse().join(".");
  function Handler(event) {
    console.log(event);
    setCheck(!check);
  }
  const [check, setCheck] = useState(false);
  item.check = check;
  console.log(item);
  useEffect(() => {
    if (check) {
      alert(`Zimmer Nr.  ${item.roomNo}  ist nun belegt.`);
    }
  });

  // localStorage.check = JSON.stringify(check);
  // var storedcheck = JSON.parse(localStorage.check);
  // console.log(storedcheck);

  // useEffect(() => {
  //   setCheck(localStorage.getItem("check") || <rooms.JSON />);
  // }, []);

  return (
    <div>
      <div className="room">
        <h2 className="roomsnummer">Room-nummer: {item.roomNo}</h2>
        <h3>Name : {item.guest.firstName}</h3>
        <h3>Vorname :{item.guest.lastName}</h3>
        <h3>Ankunft :{reverse(item.checkIn)}</h3>
        <h3>Abfahrt :{reverse(item.checkOut)}</h3>
        {/* <p> {item.CheckedIn}</p> */}

        <button onClick={Handler}>{check ? "Check In" : "Check Out"}</button>
        {check === true && (
          <p>
            <b className="blue">Das Zimmer ist verfügbar</b>
          </p>
        )}
        {check === false && (
          <p>
            <b className="red">Das Zimmer ist nicht verfügbar</b>
          </p>
        )}
      </div>
    </div>
  );
}

export default Room;
