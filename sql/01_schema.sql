DROP DATABASE IF EXISTS restaurant_db;
CREATE DATABASE restaurant_db;
USE restaurant_db;

CREATE TABLE STATUS (
    statusID   INT AUTO_INCREMENT PRIMARY KEY,
    statusName VARCHAR(50) NOT NULL
);

CREATE TABLE SECTION (
    sectionID   INT AUTO_INCREMENT PRIMARY KEY,
    sectionName VARCHAR(50) NOT NULL
);

CREATE TABLE SHIFT (
    shiftID   INT AUTO_INCREMENT PRIMARY KEY,
    date      DATE NOT NULL,
    startTime TIME NOT NULL,
    endTime   TIME NOT NULL
);

CREATE TABLE GUEST (
    guestID  INT AUTO_INCREMENT PRIMARY KEY, 
    guestName VARCHAR(100) NOT NULL,
    phone    VARCHAR(20),
    email    VARCHAR(100)
);

CREATE TABLE GUEST_NOTE (
    noteID       INT AUTO_INCREMENT PRIMARY KEY,  
    note_date    DATE NOT NULL,
    note_content TEXT,
    staffID      INT
);

CREATE TABLE SERVER (
    serverID  INT AUTO_INCREMENT PRIMARY KEY,  
    name      VARCHAR(50) NOT NULL,
    phone     VARCHAR(20),
    sectionID INT NOT NULL,
    FOREIGN KEY (sectionID) REFERENCES SECTION(sectionID)
);

CREATE TABLE TABLEINFO (
    tableID   INT AUTO_INCREMENT PRIMARY KEY,
    tableName VARCHAR(50) NOT NULL,
    capacity  INT NOT NULL,
    statusID  INT NOT NULL,
    sectionID INT NOT NULL,                       
    FOREIGN KEY (statusID)  REFERENCES STATUS(statusID),
    FOREIGN KEY (sectionID) REFERENCES SECTION(sectionID)
);

CREATE TABLE RESERVATION (
    reservationID    INT AUTO_INCREMENT PRIMARY KEY,  
    special_requests TEXT,
    party_size       INT NOT NULL,
    date_time        DATETIME NOT NULL,
    status           VARCHAR(50) NOT NULL,
    guestID          INT NOT NULL,
    FOREIGN KEY (guestID) REFERENCES GUEST(guestID)
);

CREATE TABLE SEATING_ASSIGNMENT (
    assignmentID  INT AUTO_INCREMENT PRIMARY KEY,  
    party_size    INT NOT NULL,
    seated_time   DATETIME NOT NULL,               
    departed_time DATETIME,                        
    serverID      INT NOT NULL,
    tableID       INT NOT NULL,
    guestID       INT NOT NULL,
    reservationID INT,
    FOREIGN KEY (serverID)      REFERENCES SERVER(serverID),
    FOREIGN KEY (tableID)       REFERENCES TABLEINFO(tableID),  
    FOREIGN KEY (guestID)       REFERENCES GUEST(guestID),
    FOREIGN KEY (reservationID) REFERENCES RESERVATION(reservationID)
);

CREATE TABLE PERFORMANCE_METRICS (
    metricID      INT AUTO_INCREMENT PRIMARY KEY, 
    tables_served INT NOT NULL,
    tips_earned   DECIMAL(10,2),
    serverID      INT NOT NULL,
    FOREIGN KEY (serverID) REFERENCES SERVER(serverID)
);

CREATE TABLE WORKS (
    serverID INT NOT NULL,
    shiftID  INT NOT NULL,
    PRIMARY KEY (serverID, shiftID),
    FOREIGN KEY (serverID) REFERENCES SERVER(serverID),
    FOREIGN KEY (shiftID)  REFERENCES SHIFT(shiftID)
);

CREATE TABLE HAS_NOTES (
    guestID INT NOT NULL,
    noteID  INT NOT NULL,
    PRIMARY KEY (guestID, noteID),
    FOREIGN KEY (guestID) REFERENCES GUEST(guestID),
    FOREIGN KEY (noteID)  REFERENCES GUEST_NOTE(noteID)
);