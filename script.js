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

console.log(a[0].totalPaidTickets + a[0].totalFreeTickets);

var paidTicket = a.map((x) => {
  return parseInt(x.totalPaidTickets);
});

var freeTicket = a.map((x) => {
    return parseInt(x.totalFreeTickets);
});

// TotalTicket = paidTicket.map(x=>x) + freeTicket.map(x=>x);

TotalTicket = paidTicket.map(function (num,index){
    return num + freeTicket[index];
})

console.log(paidTicket);
console.log(freeTicket);
console.log(TotalTicket + ' This is total ticket!!!');


var array1 = [1,2,3,4];
var array2 = [5,6,7,8];

var sum = array1.map(function (num, idx) {
  return num + array2[idx];
}); 

console.log(sum);