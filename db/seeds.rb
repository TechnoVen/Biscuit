# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(
  nickname: 'Guest',
  first_name: 'Guest',
  last_name: 'User',
  pet_type: 'dog',
  city_id: 1,
  email: 'guest_user@kibblewstrangers.com',
  password: 'guest_kibble'
)
User.create!(
  nickname: 'Serenity',
  first_name: 'Lori',
  last_name: 'S',
  pet_type: 'dog',
  city_id: 1,
  email: 'lss@gmail.com',
  password: 'password'
)
User.create!(
  nickname: 'Penny',
  first_name: 'Payne',
  last_name: 'Z',
  pet_type: 'cat',
  city_id: 1,
  email: 'pz@gmail.com',
  password: 'password'
)

Host.create!(
  user_id: 1,
  desc_1: 'i like cats',
  desc_2: 'i like dogs',
  desc_3: 'i like bunnies'
)

Event.create!([
  {date: "2/1/17", time: "18:30", host_id: 1, city_id: 1, max_guests: 5, location: "somewhere only we know"},
  {date: "2/10/17", time: "18:30", host_id: 1, city_id: 1, max_guests: 5, location: "somewhere only we know"},
  {date: "2/14/17", time: "18:30", host_id: 1, city_id: 1, max_guests: 5, location: "somewhere only we know"},
  ])

Attendance.create!([
  {user_id: 2, event_id: 1},
  {user_id: 3, event_id: 1}
])
