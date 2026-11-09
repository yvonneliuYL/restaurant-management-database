db.guests.insertMany([
  { guestID: 1,  name: "yvonne",   phone: "6170000001", email: "yvonne@email.com", notes: [] },
  { guestID: 2,  name: "giastina", phone: "6170000002", email: "giastina@email.com",notes: [] },
  { guestID: 3,  name: "erica",    phone: "6170000003", email: "erica@email.com",notes: [] },
  { guestID: 4,  name: "angeline", phone: "6170000004", email: "angeline@email.com",notes: [] },
  { guestID: 5,  name: "zoe",      phone: "6170000005", email: "zoe@email.com",
    notes: [{ noteID: 5, date: "2026-03-20", content: "Birthday celebration" }] },
  { guestID: 6,  name: "sherry",   phone: "6170000006", email: "sherry@email.com",notes: [] },
  { guestID: 7,  name: "jack",     phone: "6170000007", email: "jack@email.com", notes: [] },
  { guestID: 8,  name: "evan",     phone: "6170000008", email: "evan@email.com", notes: [] },
  { guestID: 9,  name: "sara",     phone: "6170000009", email: "sara@email.com", notes: [] },
  { guestID: 10, name: "anna",     phone: "6170000010", email: "anna@email.com", notes: [] },

]);

db.tables.insertMany([
  { tableID: 1,  name: "table1",  capacity: 6, status: "available", section: "Main Dining" },
  { tableID: 2,  name: "table2",  capacity: 2, status: "available", section: "Main Dining" },
  { tableID: 3,  name: "table3",  capacity: 8, status: "available", section: "Main Dining" },
  { tableID: 6,  name: "table6",  capacity: 2, status: "available", section: "Patio" },
  { tableID: 9,  name: "table9",  capacity: 6, status: "available", section: "Patio" },
  { tableID: 10, name: "table10", capacity: 4, status: "available", section: "Patio" },
  { tableID: 11, name: "table11", capacity: 4, status: "available", section: "Bar Area" },
  { tableID: 12, name: "table12", capacity: 4, status: "available", section: "Bar Area" },
  { tableID: 13, name: "table13", capacity: 4, status: "available", section: "Bar Area" }
]);

db.reservations.insertMany([
  { reservationID: 1,  notes: "",                partySize: 5, dateTime: "2026-03-21 17:00", status: "available", guestID: 7 },
  { reservationID: 2,  notes: "",                partySize: 1, dateTime: "2026-03-21 19:00", status: "available", guestID: 18 },
  { reservationID: 3,  notes: "with wheel chair",partySize: 1, dateTime: "2026-03-21 18:00", status: "available", guestID: 5 },
  { reservationID: 4,  notes: "",                partySize: 3, dateTime: "2026-03-21 19:00", status: "available", guestID: 7 },
  { reservationID: 5,  notes: "",                partySize: 3, dateTime: "2026-03-21 15:00", status: "available", guestID: 4 },
  { reservationID: 6,  notes: "",                partySize: 6, dateTime: "2026-03-22 19:00", status: "available", guestID: 12 },
  { reservationID: 7,  notes: "",                partySize: 2, dateTime: "2026-03-22 19:00", status: "available", guestID: 9 },
  { reservationID: 8,  notes: "",                partySize: 6, dateTime: "2026-03-22 15:00", status: "available", guestID: 18 },
  { reservationID: 9,  notes: "",                partySize: 6, dateTime: "2026-03-23 17:00", status: "available", guestID: 18 },
  { reservationID: 10, notes: "",                partySize: 5, dateTime: "2026-03-23 15:00", status: "available", guestID: 4 }
]);           


db.servers.insertMany([
  { serverID: 101, name: "Alice",   phone: "8570000001", section: "Main Dining",
    shifts: [
      { shiftID: "260321014", date: "2026-03-21", start: "14:00", end: "15:00" },
      { shiftID: "260321015", date: "2026-03-21", start: "15:00", end: "16:00" },
      { shiftID: "260321016", date: "2026-03-21", start: "16:00", end: "17:00" },
      { shiftID: "260321017", date: "2026-03-21", start: "17:00", end: "18:00" },
      { shiftID: "260321018", date: "2026-03-21", start: "18:00", end: "19:00" },
      { shiftID: "260321019", date: "2026-03-21", start: "19:00", end: "20:00" },
      { shiftID: "260321020", date: "2026-03-21", start: "20:00", end: "21:00" },
      { shiftID: "260321021", date: "2026-03-21", start: "21:00", end: "22:00" },
      { shiftID: "260321022", date: "2026-03-21", start: "22:00", end: "23:00" },
      { shiftID: "260323014", date: "2026-03-23", start: "14:00", end: "15:00" },
      { shiftID: "260323015", date: "2026-03-23", start: "15:00", end: "16:00" },
      { shiftID: "260323016", date: "2026-03-23", start: "16:00", end: "17:00" },
      { shiftID: "260323017", date: "2026-03-23", start: "17:00", end: "18:00" },
      { shiftID: "260323018", date: "2026-03-23", start: "18:00", end: "19:00" },
      { shiftID: "260323019", date: "2026-03-23", start: "19:00", end: "20:00" },
      { shiftID: "260323020", date: "2026-03-23", start: "20:00", end: "21:00" },
      { shiftID: "260323021", date: "2026-03-23", start: "21:00", end: "22:00" },
      { shiftID: "260323022", date: "2026-03-23", start: "22:00", end: "23:00" }
    ]},
  { serverID: 102, name: "Bob",     phone: "8570000002", section: "Main Dining",
    shifts: [
      { shiftID: "260322014", date: "2026-03-22", start: "14:00", end: "15:00" },
      { shiftID: "260322015", date: "2026-03-22", start: "15:00", end: "16:00" },
      { shiftID: "260322016", date: "2026-03-22", start: "16:00", end: "17:00" },
      { shiftID: "260322017", date: "2026-03-22", start: "17:00", end: "18:00" },
      { shiftID: "260322018", date: "2026-03-22", start: "18:00", end: "19:00" },
      { shiftID: "260322019", date: "2026-03-22", start: "19:00", end: "20:00" },
      { shiftID: "260322020", date: "2026-03-22", start: "20:00", end: "21:00" },
      { shiftID: "260322021", date: "2026-03-22", start: "21:00", end: "22:00" },
      { shiftID: "260322022", date: "2026-03-22", start: "22:00", end: "23:00" }
    ]},
  { serverID: 103, name: "Charlie", phone: "8570000003", section: "Patio",
    shifts: [
      { shiftID: "260321014", date: "2026-03-21", start: "14:00", end: "15:00" },
      { shiftID: "260321015", date: "2026-03-21", start: "15:00", end: "16:00" },
      { shiftID: "260321016", date: "2026-03-21", start: "16:00", end: "17:00" },
      { shiftID: "260321017", date: "2026-03-21", start: "17:00", end: "18:00" },
      { shiftID: "260321018", date: "2026-03-21", start: "18:00", end: "19:00" },
      { shiftID: "260321019", date: "2026-03-21", start: "19:00", end: "20:00" },
      { shiftID: "260321020", date: "2026-03-21", start: "20:00", end: "21:00" },
      { shiftID: "260321021", date: "2026-03-21", start: "21:00", end: "22:00" },
      { shiftID: "260321022", date: "2026-03-21", start: "22:00", end: "23:00" },
      { shiftID: "260323014", date: "2026-03-23", start: "14:00", end: "15:00" },
      { shiftID: "260323015", date: "2026-03-23", start: "15:00", end: "16:00" },
      { shiftID: "260323016", date: "2026-03-23", start: "16:00", end: "17:00" },
      { shiftID: "260323017", date: "2026-03-23", start: "17:00", end: "18:00" },
      { shiftID: "260323018", date: "2026-03-23", start: "18:00", end: "19:00" },
      { shiftID: "260323019", date: "2026-03-23", start: "19:00", end: "20:00" },
      { shiftID: "260323020", date: "2026-03-23", start: "20:00", end: "21:00" },
      { shiftID: "260323021", date: "2026-03-23", start: "21:00", end: "22:00" },
      { shiftID: "260323022", date: "2026-03-23", start: "22:00", end: "23:00" }
    ]},
  { serverID: 104, name: "David",   phone: "8570000004", section: "Patio",
    shifts: [
      { shiftID: "260322014", date: "2026-03-22", start: "14:00", end: "15:00" },
      { shiftID: "260322015", date: "2026-03-22", start: "15:00", end: "16:00" },
      { shiftID: "260322016", date: "2026-03-22", start: "16:00", end: "17:00" },
      { shiftID: "260322017", date: "2026-03-22", start: "17:00", end: "18:00" },
      { shiftID: "260322018", date: "2026-03-22", start: "18:00", end: "19:00" },
      { shiftID: "260322019", date: "2026-03-22", start: "19:00", end: "20:00" },
      { shiftID: "260322020", date: "2026-03-22", start: "20:00", end: "21:00" },
      { shiftID: "260322021", date: "2026-03-22", start: "21:00", end: "22:00" },
      { shiftID: "260322022", date: "2026-03-22", start: "22:00", end: "23:00" }
    ]},
  { serverID: 105, name: "Eve",     phone: "8570000005", section: "Bar Area",
    shifts: [
      { shiftID: "260321014", date: "2026-03-21", start: "14:00", end: "15:00" },
      { shiftID: "260321015", date: "2026-03-21", start: "15:00", end: "16:00" },
      { shiftID: "260321016", date: "2026-03-21", start: "16:00", end: "17:00" },
      { shiftID: "260321017", date: "2026-03-21", start: "17:00", end: "18:00" },
      { shiftID: "260321018", date: "2026-03-21", start: "18:00", end: "19:00" },
      { shiftID: "260321019", date: "2026-03-21", start: "19:00", end: "20:00" },
      { shiftID: "260321020", date: "2026-03-21", start: "20:00", end: "21:00" },
      { shiftID: "260321021", date: "2026-03-21", start: "21:00", end: "22:00" },
      { shiftID: "260321022", date: "2026-03-21", start: "22:00", end: "23:00" },
      { shiftID: "260323014", date: "2026-03-23", start: "14:00", end: "15:00" },
      { shiftID: "260323015", date: "2026-03-23", start: "15:00", end: "16:00" },
      { shiftID: "260323016", date: "2026-03-23", start: "16:00", end: "17:00" },
      { shiftID: "260323017", date: "2026-03-23", start: "17:00", end: "18:00" },
      { shiftID: "260323018", date: "2026-03-23", start: "18:00", end: "19:00" },
      { shiftID: "260323019", date: "2026-03-23", start: "19:00", end: "20:00" },
      { shiftID: "260323020", date: "2026-03-23", start: "20:00", end: "21:00" },
      { shiftID: "260323021", date: "2026-03-23", start: "21:00", end: "22:00" },
      { shiftID: "260323022", date: "2026-03-23", start: "22:00", end: "23:00" }
    ]},
  { serverID: 106, name: "Sam",     phone: "8570000006", section: "Bar Area",
    shifts: [
      { shiftID: "260322014", date: "2026-03-22", start: "14:00", end: "15:00" },
      { shiftID: "260322015", date: "2026-03-22", start: "15:00", end: "16:00" },
      { shiftID: "260322016", date: "2026-03-22", start: "16:00", end: "17:00" },
      { shiftID: "260322017", date: "2026-03-22", start: "17:00", end: "18:00" },
      { shiftID: "260322018", date: "2026-03-22", start: "18:00", end: "19:00" },
      { shiftID: "260322019", date: "2026-03-22", start: "19:00", end: "20:00" },
      { shiftID: "260322020", date: "2026-03-22", start: "20:00", end: "21:00" },
      { shiftID: "260322021", date: "2026-03-22", start: "21:00", end: "22:00" },
      { shiftID: "260322022", date: "2026-03-22", start: "22:00", end: "23:00" }
    ]}
]);


db.seating_assignments.insertMany([
  { assignID: 1,  partySize: 4, seatedTime: "17:00", departedTime: "19:00", serverID: 101, reservationID: 1,  guestID: 7,  tableID: 1 },
  { assignID: 2,  partySize: 2, seatedTime: "18:00", departedTime: "20:00", serverID: 101, reservationID: 2,  guestID: 18, tableID: 2 },
  { assignID: 3,  partySize: 2, seatedTime: "18:00", departedTime: "20:00", serverID: 101, reservationID: 3,  guestID: 5,  tableID: 3 },
  { assignID: 4,  partySize: 2, seatedTime: "17:00", departedTime: "19:00", serverID: 102, reservationID: 4,  guestID: 7,  tableID: 4 },
  { assignID: 5,  partySize: 2, seatedTime: "18:00", departedTime: "20:00", serverID: 102, reservationID: 5,  guestID: 4,  tableID: 5 },
  { assignID: 6,  partySize: 2, seatedTime: "17:00", departedTime: "19:00", serverID: 103, reservationID: 6,  guestID: 12, tableID: 6 },
  { assignID: 7,  partySize: 2, seatedTime: "18:00", departedTime: "20:00", serverID: 103, reservationID: 7,  guestID: 9,  tableID: 7 },
  { assignID: 8,  partySize: 4, seatedTime: "19:00", departedTime: "21:00", serverID: 103, reservationID: 8,  guestID: 1,  tableID: 8 },
  { assignID: 9,  partySize: 6, seatedTime: "17:00", departedTime: "19:00", serverID: 104, reservationID: 9,  guestID: 2,  tableID: 9 },
  { assignID: 10, partySize: 2, seatedTime: "19:00", departedTime: "21:00", serverID: 104, reservationID: 10, guestID: 3,  tableID: 10 }
]);






//Query 1: Finds all reservations on March 21, 2026 

db.reservations.find({dateTime: {$regex: "^2026-03-21"}});

//Query 2: Finds all guests who have a note

db.guests.find({notes: {$not: {$size: 0}}});

//Query 3: Find the reservations on 2026-03-21 with partySize greater or equal 3 and having notes

db.reservations.find({
  dateTime: { $regex: "^2026-03-21" },
  partySize: { $gte: 3 },
  notes: {$not: {$size: 0}}
})

//Query 4: Find the count reservations per guest and sorting descending

db.reservations.aggregate([
  {
    $group: {
      _id: "$guestID", 
      totalReservations: { $sum: 1 }
    }
  },
  {
    $sort: { totalReservations: -1 }
  }
])



