import { useState } from "react";

const RenderSection = ({
  sectionArea,
  section,
  bookingSeats,
  setBookingSeats,
}) => {
  const handleClick = (rowSelected, colSelected, section, uniqueKey) => {
    const Ispresent = bookingSeats.some((seat) => seat.id === uniqueKey);
    if (Ispresent) {
      setBookingSeats((prev) => prev.filter((obj) => obj.id !== uniqueKey));
    } else {
      if (bookingSeats.length >= 5) {
        return alert("you can book max 5 seats");
      }
      setBookingSeats((prev) => [
        ...prev,
        {
          id: uniqueKey,
          rowSelected: rowSelected,
          colSelected: colSelected,
          section: section,
        },
      ]);
    }
  };

  return (
    <div>
      {sectionArea.map((eachrow, ind) => (
        <div className="rowClass" key={ind}>
          {eachrow.map((eachcol, i) => {
            const uniqueKey = `${section}-${ind}-${i}`;
            const isSelected = bookingSeats.some(
              (seat) => seat.id === uniqueKey,
            );

            return (
              <button
                className={`colClass ${isSelected ? "selectedSeat" : ""}`}
                key={uniqueKey}
                onClick={() => handleClick(ind + 1, i + 1, section, uniqueKey)}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

function App() {
  const [bookingSeats, setBookingSeats] = useState(new Array());

  const vipRow = 5,
    vipCol = 5;
  const genRow = 6,
    genCol = 6;
  const economyRow = 8,
    economyCol = 8;

  function generateArr(rowNum, colNum) {
    return Array.from({ length: rowNum }, () =>
      Array.from({ length: colNum }, (_, i) => i + 1),
    );
  }
  const vipSec = generateArr(vipRow, vipCol);
  const genSec = generateArr(genRow, genCol);
  const ecoSec = generateArr(economyRow, economyCol);
  const handleBooking = () => {
    const seats = bookingSeats.map((seat) => {
      return `${seat.section} ${seat.rowSelected} ${seat.colSelected}`;
    });
    return alert(`Confirm Seats: ${seats.join(",")}`);
  };

  return (
    <div>
      <h1>Vip Section</h1>
      <RenderSection
        sectionArea={vipSec}
        section="Vip"
        bookingSeats={bookingSeats}
        setBookingSeats={setBookingSeats}
      />
      <h1>General Section</h1>
      <RenderSection
        sectionArea={genSec}
        section="General"
        bookingSeats={bookingSeats}
        setBookingSeats={setBookingSeats}
      />
      <h1>Economy Section</h1>
      <RenderSection
        sectionArea={ecoSec}
        section="Economy"
        bookingSeats={bookingSeats}
        setBookingSeats={setBookingSeats}
      />
      <button className="buttonStyle" onClick={handleBooking}>
        Continue Booking
      </button>
    </div>
  );
}
export default App;
