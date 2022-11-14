DROP TABLE products IF EXISTS;
DROP TABLE warehouse IF EXISTS;
DROP TABLE stocks IF EXISTS;

create table products (
    id INT GENERATED ALWAYS AS IDENTITY,
    title text NOT NULL,
    created_at timestamp without time zone NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'UTC'),
    updated_at timestamp without time zone NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'UTC'),
    PRIMARY KEY( id )
);

create table warehouses (
    id INT GENERATED ALWAYS AS IDENTITY,
    title text NOT NULL ,
    PRIMARY KEY( id )
);

create table stocks (
    product_id INT,
    warehouse_id INT,
    amount INT,
    FOREIGN KEY ( product_id ) REFERENCES products ( id ),
    FOREIGN KEY ( warehouse_id ) REFERENCES warehouses ( id )
);

insert into products ( title ) values ( 'GREAT IDEAS TO Boost Your Buisness' );
insert into products ( title ) values ( 'International Buisness Review' );
insert into products ( title ) values ( 'Buisness Networking: Tips, Insights & Tactics' );
insert into products ( title ) values ( 'Buisness for Pleasure' );
insert into products ( title ) values ( 'The Buisness of Dance' );
insert into products ( title ) values ( 'Survey of Current Buisness' );
insert into products ( title ) values ( 'Journal of ECONOMICS & BUISNESS' );
insert into products ( title ) values ( 'JOURNAL OF BUISNESS RESEARCH' );
insert into products ( title ) values ( 'UNITED STATES Census of BUisness' );
insert into products ( title ) values ( 'NATIONS BUISNESS INDEX' );
insert into products ( title ) values ( 'The Minutes of Salem Baptist Church' );
insert into products ( title ) values ( 'The Story of Baltimore Yearly Meeting from 1672 to 1938' );
insert into products ( title ) values ( 'Telephony' );
insert into products ( title ) values ( 'Buisness Accounting' );
insert into products ( title ) values ( 'Pennsylvania Archives' );
insert into products ( title ) values ( 'Buckner' );
insert into products ( title ) values ( 'Strategic Thinking in Your Buisness 2 Books in 1' );
insert into products ( title ) values ( 'Calendar of Virginia State Papers and Other Manuscripts' );
insert into products ( title ) values ( 'Buisness and Wealth Attraction: Create Goals' );
insert into products ( title ) values ( 'Buisness Revolution 2 Books in 1' );
insert into products ( title ) values ( 'Intercultural Business Presentations' );
insert into products ( title ) values ( 'The Founding of Macedonia Baptist Church Mendenhall, Simpson' );
insert into products ( title ) values ( 'Advanced Modeling of Management Processes in Information' );
insert into products ( title ) values ( 'Correct Business Letter Writing and Buisness English' );

insert into warehouses ( title ) values ( 'London Warehouse' );
insert into warehouses ( title ) values ( 'New-York Warehouse' );
insert into warehouses ( title ) values ( 'Moscow Warehouse' );
insert into warehouses ( title ) values ( 'Tokyo Warehouse' );
insert into warehouses ( title ) values ( 'Chili Warehouse' );
insert into warehouses ( title ) values ( 'Kiev Warehouse' );
insert into warehouses ( title ) values ( 'Dawson Warehouse' );

insert into stocks values ( 1, 6, 223 );
insert into stocks values ( 16, 7, 32 );
insert into stocks values ( 21, 3, 78 );
insert into stocks values ( 1, 1, 35 );
insert into stocks values ( 16, 4, 89 );
insert into stocks values ( 21, 6, 14 );
insert into stocks values ( 21, 5, 5 );
insert into stocks values ( 19, 2, 48 );
insert into stocks values ( 4, 7, 67 );
insert into stocks values ( 20, 3, 199 );
insert into stocks values ( 15, 1, 86 );
insert into stocks values ( 20, 1, 223 );
insert into stocks values ( 6, 6, 112 );
insert into stocks values ( 1, 3, 4 );
insert into stocks values ( 10, 6, 90 );
insert into stocks values ( 2, 4, 71 );
insert into stocks values ( 9, 1, 49 );
insert into stocks values ( 13, 2, 8 );
insert into stocks values ( 9, 1, 0 );
insert into stocks values ( 12, 4, 7 );
insert into stocks values ( 6, 6, 20 );
insert into stocks values ( 9, 7, 30 );
insert into stocks values ( 3, 3, 15 );
insert into stocks values ( 17, 1, 8 );
insert into stocks values ( 9, 3, 13 );
insert into stocks values ( 22, 1, 67 );
insert into stocks values ( 13, 4, 78 );
insert into stocks values ( 5, 2, 35 );
insert into stocks values ( 6, 4, 89 );
insert into stocks values ( 1, 6, 0 );
insert into stocks values ( 16, 5, 5 );
insert into stocks values ( 17, 2, 48 );
insert into stocks values ( 20, 7, 0 );
insert into stocks values ( 20, 3, 131 );
insert into stocks values ( 14, 1, 86 );
insert into stocks values ( 20, 1, 289 );
insert into stocks values ( 6, 6, 112 );
insert into stocks values ( 1, 3, 4 );
insert into stocks values ( 10, 6, 90 );
insert into stocks values ( 18, 4, 0 );
insert into stocks values ( 5, 1, 8 );
insert into stocks values ( 13, 2, 2 );
insert into stocks values ( 11, 1, 56 );
insert into stocks values ( 12, 4, 7 );
insert into stocks values ( 22, 6, 1 );
insert into stocks values ( 9, 7, 30 );
insert into stocks values ( 3, 3, 15 );
insert into stocks values ( 4, 1, 0 );