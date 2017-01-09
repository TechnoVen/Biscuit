# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
pet_type        | string    | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## events
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
day         | integer   | not null
month       | integer   | not null
year        | integer   | not null
hour        | integer   | not null
minutes     | integer   | not null
period      | integer   | not null
max_guests  | integer   | not null, default: 6
description | string    | not null
host_id     | integer   | not null, foreign key (references hosts), indexed
city_id     | integer   | not null, foreign key (references cities), indexed
archived    | boolean   | not null, default: false

## cities
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | integer   | not null
image_url   | string    | not null

## hosts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
profile_pic | string    | not null
desc_1      | string    | not null
desc_2      | string    | not null
desc_3      | string    | not null
user_id     | integer   | not null, foreign key (references users), indexed
city_id     | integer   | not null, foreign key (references cities), indexed
