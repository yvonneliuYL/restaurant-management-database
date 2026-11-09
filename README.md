# Restaurant Management Database

IE 6700 Data Management for Analytics (Northeastern University) — Use Case Study Project, Group 7

Many restaurants have no integrated data system, which leads to inaccurate wait times, unbalanced server workloads, lost reservations and poor table use. This project designs a database for reservations, table assignments, server shifts, guest notes and server performance, and builds it in MySQL, in MongoDB and with Python for analysis.

**Members:** Giastina Morano, Yi-Fan Liu

Full write-up: [Final report](docs/final_report.pdf)

## Project stages

| Stage | Content | Files |
|---|---|---|
| 1. Proposal | Business problem and 11 relationship requirements (guest–reservation, server–shift, table–status, ...) | [docs/01_project_proposal.pdf](docs/01_project_proposal.pdf) |
| 2. Conceptual model | EER diagram and UML class diagram | [docs/02_conceptual_model_EER_UML.pdf](docs/02_conceptual_model_EER_UML.pdf) |
| 3. Logical model | Relational schema with primary and foreign keys | [docs/03_logical_relational_model.pdf](docs/03_logical_relational_model.pdf) |
| 4. SQL implementation | MySQL schema, sample data and queries | [sql/](sql/), [docs/04_sql_implementation.pdf](docs/04_sql_implementation.pdf) |
| 5. Python application | Connects to MySQL, runs queries, plots the results | [python/application_in_python.ipynb](python/application_in_python.ipynb) |
| 6. NoSQL implementation | The same data as MongoDB collections, with queries | [nosql/restaurant_mongodb.js](nosql/restaurant_mongodb.js), [docs/06_nosql_implementation.pdf](docs/06_nosql_implementation.pdf) |

## What was built

### Relational database (MySQL)

[`sql/01_schema.sql`](sql/01_schema.sql) creates the database `restaurant_db` with 12 tables:

- `GUEST`, `GUEST_NOTE`, `RESERVATION`, `SEATING_ASSIGNMENT`
- `TABLEINFO` (restaurant tables), `SECTION`, `STATUS`
- `SERVER`, `SHIFT`, `PERFORMANCE_METRICS`
- `WORKS` (server–shift) and `HAS_NOTES` (guest–note), the two link tables for many-to-many relationships

A seating assignment links a guest, a table, a server and, if there is one, a reservation.

[`sql/02_data.sql`](sql/02_data.sql) loads sample data: 21 guests, 5 guest notes, 3 sections (Main Dining, Patio, Bar Area), 15 tables, 6 servers, 27 one-hour shifts over 3 days, 10 reservations, 10 seating assignments, 15 performance records and 81 server–shift rows.

[`sql/03_queries.sql`](sql/03_queries.sql) holds the queries. The nine queries in the final report cover a simple query, an aggregate, inner and left joins, a nested query, a correlated query with `NOT EXISTS`, `>= ALL`, `UNION`, `INTERSECT`, and a subquery in `SELECT`. The file also has the two queries used for the Python charts.

### Python application

[`python/application_in_python.ipynb`](python/application_in_python.ipynb) connects to MySQL with `mysql-connector-python` and SQLAlchemy, loads query results into pandas and plots them with matplotlib:

1. Total tips earned by each server
2. Reservation popularity by hour (total guests per hour)
3. Number of tables taken by each server
4. Guest notes, with the guest's reservation if there is one

From the report: Bob earned the most tips ($45), reservations peak between 18:00 and 19:00 with none at 16:00, and the team recommends scheduling more servers between 18:00 and 20:00.

### NoSQL (MongoDB)

[`nosql/restaurant_mongodb.js`](nosql/restaurant_mongodb.js) stores the data in five collections: `guests` (with their notes embedded), `tables`, `reservations`, `servers` (with their shifts embedded) and `seating_assignments`. It ends with four queries: reservations on one day (regex on the date), guests who have notes, a combined date / party-size filter, and an aggregation that counts reservations per guest.

## Repository contents

```
docs/
├── 01_project_proposal.pdf          # stage 1: problem statement and requirements
├── 02_conceptual_model_EER_UML.pdf  # stage 2: EER and UML diagrams
├── 03_logical_relational_model.pdf  # stage 3: relational model
├── 04_sql_implementation.pdf        # stage 4: DDL, DML, query results
├── 06_nosql_implementation.pdf      # stage 6: MongoDB inserts and query results
└── final_report.pdf                 # final report covering all stages
sql/
├── 01_schema.sql                    # DDL: creates restaurant_db and its 12 tables
├── 02_data.sql                      # DML: sample data
└── 03_queries.sql                   # queries (report queries 1-9 and chart queries)
python/
└── application_in_python.ipynb      # MySQL connection, queries, charts
nosql/
└── restaurant_mongodb.js            # MongoDB inserts and queries
data/
└── Restaurant_Management_Data.xlsx  # sample data per table, used to write the INSERT statements
requirements.txt
```

## How to run

The SQL is written for **MySQL** (`AUTO_INCREMENT`, `HOUR()`, `STR_TO_DATE`, `#` comments). Query 8 uses `INTERSECT`, which needs MySQL 8.0.31 or newer. The notebook was run against MySQL Server 9.5.0.

1. Create the database and tables (this drops an existing `restaurant_db`):
   ```bash
   mysql -u root -p < sql/01_schema.sql
   ```
2. Load the sample data. The `STATUS` table uses id `0` for "not available". MySQL normally treats an inserted `0` in an `AUTO_INCREMENT` column as "use the next id", so turn on `NO_AUTO_VALUE_ON_ZERO` for this session:
   ```bash
   mysql -u root -p --init-command="SET SESSION sql_mode = CONCAT(@@sql_mode, ',NO_AUTO_VALUE_ON_ZERO')" restaurant_db < sql/02_data.sql
   ```
3. Run the queries in `sql/03_queries.sql` one at a time, for example in MySQL Workbench after `USE restaurant_db;`.
4. Python notebook:
   ```bash
   pip install -r requirements.txt
   export DB_PASSWORD='your MySQL password'
   jupyter notebook python/application_in_python.ipynb
   ```
   The notebook connects as `root` to `localhost`, database `restaurant_db`, and reads the password from the `DB_PASSWORD` environment variable. Change the user or host in the connection cells if yours differ.
5. MongoDB: run `nosql/restaurant_mongodb.js` in `mongosh` (the `insertMany` blocks first, then the four queries at the end).

## Notes

- The notebook outputs and the charts in the report were made on a database with more rows than `sql/02_data.sql`. The `RESERVATION` sheet of `data/Restaurant_Management_Data.xlsx` lists 36 reservations (`02_data.sql` has the first 10), and the seating assignments behind the "tables per server" chart (37 in total) are not in any file. With `02_data.sql` alone, the tips chart is the same but the other three results differ.
- The queries mix upper- and lower-case table names (`RESERVATION` and `reservation`). This works on macOS and Windows, where MySQL table names are not case-sensitive by default. On Linux they are case-sensitive unless the server was initialized with `lower_case_table_names=1`.
- Guest and server records are sample data with placeholder phone numbers and email addresses.
- Contact details and signatures were removed from the cover pages of the stage PDFs.
