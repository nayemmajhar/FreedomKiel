CREATE TABLE IF NOT EXISTS users(
	id serial NOT NULL,
	username character varying NOT NULL,
	email character varying NOT NULL,
	password character varying NOT NULL,
	activation_key character varying NOT NULL,
	last_connection timestamp NOT NULL default now(),
	create_date timestamp NOT NULL default now(),
	modified_date timestamp NOT NULL default now(),
	status smallint NOT NULL default -1,
	PRIMARY KEY(id)
);

-- add uuid-ossp support in database
-- create extension if not exists "uuid-ossp";

-- create index for a field in column
CREATE INDEX ix_users_id ON users USING btree (id);


CREATE TABLE IF NOT EXISTS bikes(
	id serial NOT NULL PRIMARY KEY,
	title character varying NOT NULL,
	address character varying(255) NOT NULL,
	city character varying(65) NOT NULL,
	zip character varying(11) NOT NULL,
	lat numeric NOT NULL,
	lon numeric NOT NULL,
	created_by integer NOT NULL,
	create_date timestamp NOT NULL default now(),
	modified_date timestamp NOT NULL default now(),
	status smallint NOT NULL default 1,
	FOREIGN KEY (created_by) REFERENCES users (id)
);

CREATE TABLE IF NOT EXISTS bike_info(
	id serial NOT NULL PRIMARY KEY,
	bike_id integer NOT NULL,
	description text,
	size smallint NOT NULL default 0, /* 0 for not give size */
	sex smallint NOT NULL default 0, /* 1 for male, 2 for female, 0 for unisex, 3 for kinder */
	photos character varying,
	minimum_rent numeric NOT NULL default 0, /* 0 for free item, negative number will be prevented to add */
	daily_rent numeric NOT NULL default 0,
	security_deposit numeric NOT NULL default 0,
	create_date timestamp NOT NULL default now(),
	modified_date timestamp NOT NULL default now(),
	FOREIGN KEY (bike_id) REFERENCES bikes (id)
);

ALTER TABLE bikes
	ADD COLUMN geom geometry(POINT,4326)

/* UPDATE bikes SET geom = ST_SetSRID(ST_MakePoint(lon,lat),4326); */

CREATE INDEX bikes_gist
  ON bikes
  USING gist (geom);


CREATE TABLE IF NOT EXISTS user_information(
	id serial NOT NULL PRIMARY KEY,
	user_id integer NOT NULL,
	first_name character varying,
	last_name character varying,
	address_line_1 character varying,
	address_line_2 character varying,
	mobile_number character varying,
	nationality character varying,
	create_date timestamp NOT NULL default now(),
	modified_date timestamp NOT NULL default now(),
	FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE IF NOT EXISTS order_items(
    id serial NOT NULL PRIMARY KEY,
    user_id integer NOT NULL,
    bike_id integer NOT NULL,
    pickup_time timestamp NOT NULL,
    dropoff_time timestamp NOT NULL,
    address_pick_drop character varying NOT NULL,
    rent_total numeric NOT NULL,
    payment_methods character varying,
    create_date timestamp NOT NULL default now(),
    modified_date timestamp NOT NULL default now(),
    status smallint NOT NULL default 3, /* 1 for completed order, 3 for pending */
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (bike_id) REFERENCES bikes (id)
);

