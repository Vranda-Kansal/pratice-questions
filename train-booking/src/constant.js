export const rawTrainsData = [
  {
    trainId: "123A",
    name: "Express Train A",
    date: "2026-04-04",
    availableSeats: 5, // Account for already booked and PWD seats
    seats: [
      { isBooked: true, isPWD: false }, // Already booked
      { isBooked: false, isPWD: false }, // Available
      { isBooked: false, isPWD: true }, // Reserved for PWD
      { isBooked: true, isPWD: false }, // Already booked
      { isBooked: false, isPWD: false }, // Available
      { isBooked: false, isPWD: false }, // Available
      { isBooked: false, isPWD: true }, // Reserved for PWD
      { isBooked: false, isPWD: false }, // Available
      { isBooked: false, isPWD: false }, // Available
      { isBooked: false, isPWD: true }, // Reserved for PWD
    ],
  },
  {
    trainId: "124B",
    name: "Express Train B",
    date: "2026-04-04",
    availableSeats: 3, // Account for already booked and PWD seats
    seats: [
      { isBooked: false, isPWD: false }, // Available
      { isBooked: true, isPWD: false }, // Already booked
      { isBooked: false, isPWD: true }, // Reserved for PWD
      { isBooked: false, isPWD: false }, // Available
      { isBooked: false, isPWD: false }, // Available
    ],
  },
  {
    trainId: "125C",
    name: "Express Train C",
    date: "2026-04-02",
    availableSeats: 4, // Account for already booked and PWD seats
    seats: [
      { isBooked: false, isPWD: false }, // Available
      { isBooked: false, isPWD: false }, // Available
      { isBooked: false, isPWD: true }, // Reserved for PWD
      { isBooked: true, isPWD: false }, // Already booked
      { isBooked: false, isPWD: false }, // Available
      { isBooked: false, isPWD: true }, // Reserved for PWD
      { isBooked: false, isPWD: false }, // Available
      { isBooked: true, isPWD: false }, // Already booked
    ],
  },
];
