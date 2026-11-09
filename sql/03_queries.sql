/* Query */

-- select all the tables
select * from GUEST;
select * from GUEST_NOTE;
select * from HAS_NOTES;
select * from PERFORMANCE_METRICS;
select * from RESERVATION;
select * from SEATING_ASSIGNMENT;
select * from SECTION;
select * from SERVER;
select * from SHIFT;
select * from STATUS;
select * from TABLEINFO;
select * from WORKS;

-- select by scenario
-- 1. Retrieve all reservations' information on March 21 which the party size is greater than 3.
select * from reservation a
  join guest b on a.guestid = b.guestid
 where a.status = 1
   and a.party_size > 3;
   
-- 2. Retrieve total tips of the server and their information
select a.name, a.phone, sum(b.tips_earned) total_tips from server a
  join PERFORMANCE_METRICS b on a.serverid = b.serverid
 group by a.name, a.phone
 order by sum(b.tips_earned) desc;
 

/*====================================================================*/
/*========================== for pyton graph =========================*/
/*====================================================================*/

-- 1. Retrieve total tips of the server and their information
select a.name, sum(b.tips_earned) total_tips from server a
  join PERFORMANCE_METRICS b on a.serverid = b.serverid
 group by a.name, a.phone
 order by sum(b.tips_earned) desc;
 
-- 2. Popularity of the time --> when is the most popular time for the reservation, considering the party size too
select HOUR(date_time) AS res_hour, sum(party_size) popularity
  from RESERVATION 
 where status=1
 group by HOUR(date_time)
 order by HOUR(date_time);


/*====================================================================*/
/*===================== for project final report =====================*/
/*====================================================================*/

/*************
• Simple query
• Aggregate
• Inner join/outer join
• Nested query
• Correlated query
• >=ALL/>ANY/Exists/Not Exists
• Set operations (Union)
• Subqueries in select and from
*************/

#Query1: Find the reservation which the party size is greater than 3 and the datetime is '2026-03-21 17:00:00'.
# simple query
select * from reservation a
 where a.status = 1
   and a.party_size > 3
   and a.date_time = '2026-03-21 17:00:00';
   
#Query2: Retrieve total tips of the server and their phone number, order by the total tips descending
# aggregate query  
select a.name, a.phone,
       sum(b.tips_earned) total_tips 
  from server a
  join PERFORMANCE_METRICS b on a.serverid = b.serverid
 group by a.name, a.phone
 order by sum(b.tips_earned) desc;

#Query 3: Find all guests who have notes, shows their note content and date, and their reservationID if they have one, and NULL if they don't 
# Inner join + left join
select g.guestName,
	   g.guestID, 
       gn.note_content, 
       gn.note_date, 
       r.reservationID
  from guest g 
  join has_notes hn on g.guestID = hn.guestID
  join guest_note gn on hn.noteID = gn.noteID
  left join reservation r on g.guestID = r.guestID;
  
#Query 4:Find reservations where the party size is larger than the average party size
# NESTED
select r.guestID,g.guestName,r.party_size, r.date_time
  from reservation r
  join guest g on r.guestID = g.guestID
 where party_size > (select AVG(party_size) from reservation);

#Query 5: Find guests who did not make a reservation
# correlated query with NOT EXISTS
select guestID, guestName
  from guest 
 where NOT EXISTS( select guestID 
					 from reservation
					where reservation.guestID = guest.guestID
				 );

#Query 6: Find the biggest tip they've earned and the server name
# inner join query with ALL
select b.name, a.tips_earned 
  from PERFORMANCE_METRICS a
  join server b on a.serverid = b.serverid
 where a.tips_earned >= 
	   ALL(select tips_earned from PERFORMANCE_METRICS);
 
#Query7: Find the reservations and guests on '2026-03-22' and '2026-03-23', which the party size is greater than 4.
# set operation - Union
select a.date_time, a.party_size, 
	   b.guestID, b.guestName, b.phone, b.email
  from RESERVATION a 
  join GUEST b on  a.guestID = b.guestID
 where a.date_time like '2026-03-22%' and a.party_size > 4
union
select a.date_time, a.party_size, 
	   b.guestID, b.guestName, b.phone, b.email
  from RESERVATION a 
  join GUEST b on  a.guestID = b.guestID
 where a.date_time like '2026-03-23%' and a.party_size > 4;

#Query8: Find guests who have guest notes and a reservation 
# set operation - INTERSECT
select g.guestName, gn.note_content
  from guest g
  join has_notes hn on g.guestID = hn.guestID
  join guest_note gn on hn.noteID = gn.noteID
INTERSECT 
select g.guestName, gn.note_content
  from guest g
  join reservation r on g.guestID = r.guestID
  join has_notes hn on g.guestID = hn.guestID
  join guest_note gn on hn.noteID = gn.noteID;

#Query9: For each server, show their name and how many reservations they handled
# Subqueries in select and from
select s.name,
	   (select COUNT(sa.reservationID)
		from seating_assignment sa
		where sa.serverID = s.serverID) AS reservations_handeled
  from server s; 
 
 
 
 
###########################  didn't put on the project
#Query2: For each hour of the day, show the total number of guests dining 
# aggregate query  
select HOUR(date_time) AS res_hour, sum(party_size) popularity
  from RESERVATION 
 where status=1
 group by HOUR(date_time)
 order by HOUR(date_time);
 
 