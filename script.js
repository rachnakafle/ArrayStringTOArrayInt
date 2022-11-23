var a = [
  {
    eventId: 54,
    ticketCategoryId: 5,
    ticketCategory: "Standard",
    totalCapacity: 56,
    eventDate: "2022-11-25",
    ticketRate: "0.10",
    totalPaidTickets: "45",
    totalFreeTickets: "0",
    soldTickets: "38",
    amenityList: [
      {
        amenityId: 7,
        amenityName: "AC",
        isSelected: true,
      },
      {
        amenityId: 10,
        amenityName: "Cap",
        isSelected: true,
      },
      {
        amenityId: 11,
        amenityName: "Dinner",
        isSelected: true,
      },
    ],
  },
  {
    eventId: 54,
    ticketCategoryId: 5,
    ticketCategory: "Standard",
    totalCapacity: 56,
    eventDate: "2022-11-25",
    ticketRate: "0.10",
    totalPaidTickets: "78",
    totalFreeTickets: "0",
    soldTickets: "38",
    amenityList: [
      {
        amenityId: 7,
        amenityName: "AC",
        isSelected: true,
      },
      {
        amenityId: 10,
        amenityName: "Cap",
        isSelected: true,
      },
      {
        amenityId: 11,
        amenityName: "Dinner",
        isSelected: true,
      },
    ],
  },
  {
    eventId: 54,
    ticketCategoryId: 5,
    ticketCategory: "Standard",
    totalCapacity: 56,
    eventDate: "2022-11-25",
    ticketRate: "0.10",
    totalPaidTickets: "90",
    totalFreeTickets: "0",
    soldTickets: "38",
    amenityList: [
      {
        amenityId: 7,
        amenityName: "AC",
        isSelected: true,
      },
      {
        amenityId: 10,
        amenityName: "Cap",
        isSelected: true,
      },
      {
        amenityId: 11,
        amenityName: "Dinner",
        isSelected: true,
      },
    ],
  },
];

var arrofNum = a.map((x) => {
  return parseInt(x.totalPaidTickets);
});

console.log(arrofNum);