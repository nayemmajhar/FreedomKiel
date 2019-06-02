CREATE TABLE IF NOT EXISTS users(
  id uuid DEFAULT uuid_generate_v4() NOT NULL,
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
