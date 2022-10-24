import rooms from "../rooms.json";
import Room from "./Room";
import "./style.css";

function Room3() {
  return (
    <div className="room3">
      <h1> Hotel Daten</h1>

      {rooms

        .sort((a, b) => a.roomNo - b.roomNo)
        .map((item, index) => {
          // ({ ...item, checkedIn  });

          console.log(index);
          return <Room key={index} item={item} />;
        })}
    </div>
  );
}

/*
    <div className="room3">
       <h1>{rooms[0].roomNo}</h1>
      <h2>{rooms[0].guest.firstName}</h2>
      <h2>{rooms[0].guest.lastName}</h2>
      <p>{rooms[0].checkIn}</p>
      <p> {rooms[0].checkOut}</p>
    </div>
       */

export default Room3;
