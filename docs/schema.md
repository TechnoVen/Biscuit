# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
first_name      | string    | not null
last_name       | string    |
email           | string    | not null, indexed, unique
pet_type        | string    |
city_id         | integer   | not null, foreign key (references cities), indexed
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## events
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
date        | string    | not null
time        | string    | not null
location    | string    | not null
description | string    |
host_id     | integer   | not null, foreign key (references hosts), indexed
city_id     | integer   | not null, foreign key (references cities), indexed
archived    | boolean   | not null, default: false

## attendances
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
event_id    | integer   | not null, foreign key (references events), indexed

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
detail1     | string    |
detail2     | string    |
detail3     | string    |
user_id     | integer   | not null, foreign key (references users), indexed
