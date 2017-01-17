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
  detail1: 'i like cats',
  detail2: 'i like dogs',
  detail3: 'i like bunnies'
)
Host.create!(
  user_id: 2,
  detail1: 'i like running with my dogs',
  detail2: 'i like traveling with my dogs',
  detail3: 'i like hiking with my pups'
)
Host.create!(
  user_id: 3,
  detail1: 'i like playing with my cat',
  detail2: 'i like skating with my cat',
  detail3: 'i like excercising with my cat'
)

Event.create!([
  {date: "January 24, 2017 18:30", host_id: 1, city_id: 1, location: "somewhere only we know", description: "a blast from the past!"},
  {date: "January 28, 2017 18:30", host_id: 1, city_id: 1, location: "fun place", description: "wow so fun with pets"},
  {date: "February 14, 2017 09:30", host_id: 1, city_id: 1, location: "really fun place", description: "come join our event!"},
  ])

Attendance.create!([
  {user_id: 2, event_id: 1},
  {user_id: 3, event_id: 1}
])
