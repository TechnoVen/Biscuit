# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


City.create!([
  {name: 'San Francisco, CA', image_url: "https://res.cloudinary.com/dmmcusgxy/image/upload/c_scale,h_1000,q_auto:eco,w_1920/v1484705965/san_francisco.jpg"},
  {name: 'Los Angeles, CA', image_url: "https://res.cloudinary.com/dmmcusgxy/image/upload/c_scale,h_1000,q_auto:eco,w_2000/v1484705951/los_angeles.jpg"},
  {name: 'New York City, NY', image_url: "https://res.cloudinary.com/dmmcusgxy/image/upload/v1484705942/new_york.jpg"},
  {name: 'Chicago', image_url: "https://res.cloudinary.com/dmmcusgxy/image/upload/c_scale,h_1000,q_auto:eco,w_1920/v1484705957/chicago_bar1ny.jpg"},
  {name: 'Philadelphia', image_url: "https://res.cloudinary.com/dmmcusgxy/image/upload/q_auto:eco/v1484705958/philadelphia-skyline-background-image2-1800vp_ckziky.jpg"},
  {name: 'San Diego, CA', image_url: "https://res.cloudinary.com/dmmcusgxy/image/upload/c_scale,h_1000,q_auto:eco,w_2000/v1484706363/o85agquk55e-robert-lamb_clbamb.jpg"}
])

PET_TYPES = [
  'dog',
  'cat',
  'rabbit',
  'other'
]

User.create!(
  first_name: 'Guest',
  last_name: 'User',
  pet_type: 'dog',
  city_id: 1,
  email: 'guest_user@kibblewstrangers.com',
  password: 'guest_kibble',
  image_url: 'https://res.cloudinary.com/dmmcusgxy/image/upload/c_scale,h_264,w_385/v1484931280/SEED/Stocksy_txpa5f790c5D3S000_Small_538332.jpg'
)

USER_IMAGES = [
  'https://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484903016/SEED/valeria-c.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484901716/SEED/theme-candid-portraits-smile-woman-girl-40064.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484903678/SEED/TaigaMelOrangeBallRT1.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484902781/SEED/Stocksy_txpde4a97d9ee4000_Medium_174993-300x210.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484931280/SEED/Stocksy_txpa5f790c5D3S000_Small_538332.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484902380/SEED/Stocksy_txp33a9afd1Yfk000_Small_460937-600x300.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484903822/SEED/sixteen_candles-1.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484902934/SEED/sidney_004-1-990x620.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484903364/SEED/schatzi8.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484903026/SEED/sandy-n.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484903850/SEED/pretty_woman.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484903633/SEED/photo5-1.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484902143/SEED/pexels-photo-92378.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484901922/SEED/pexels-photo-241734.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484901881/SEED/pexels-photo-220968.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484901830/SEED/pexels-photo-206014.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484901766/SEED/pexels-photo-195731.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484901760/SEED/pexels-photo-115087.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484901772/SEED/pexels-photo-115025.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484902131/SEED/pexels-photo-108034.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484902017/SEED/pexels-photo.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484903091/SEED/novmainimg.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484903673/SEED/MelanieMonteiro_Intro2.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484903063/SEED/lucyhewett_dogvacay-005_1288.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484901800/SEED/leisure-wildlife-photography-pet-photography-dog-159557.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484901806/SEED/lake-animals-dogs-pets.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484903840/SEED/lady_tramp.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484902851/SEED/iStock_000017157552_Medium-990x620.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484902949/SEED/IMG_8464wp-1-990x620.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484902699/SEED/hiw--host-2.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484903835/SEED/grease.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484902502/SEED/girl-cat-mobile-1.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484903829/SEED/ghost.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484901860/SEED/garden-party-animal-dog.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484903382/SEED/February-24-2012-23-46-05-tumblrlvptcuxbuZ1qmzslno1500large.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484902740/SEED/DSC_0166-990x620.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484902897/SEED/DogVacayWinter15-0305.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484903732/SEED/dog-hazards.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484903216/SEED/DOG-CAT-OWNER.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484903658/SEED/Dog-at-BBQ.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484903815/SEED/dirty_dancing.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484902393/SEED/cat-3.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484903311/SEED/article-2288251-186D417B000005DC-27_634x489.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484903286/SEED/666_500_csupload_64149578.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484903072/SEED/2015_september_dogvacay_highres-523.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484903502/SEED/2015_september_dogvacay_highres-138.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484902904/SEED/16682584145_2dd5e59bfc_k-990x620.jpg',
  'http://res.cloudinary.com/dmmcusgxy/image/upload/h_400,w_400,c_fit/v1484903744/SEED/01-vet-visit-dogvacay.jpg'
]

def cityId(num)
  case num
    when 0..7 then 1
    when 8..15 then 2
    when 16..23 then 3
    when 24..31 then 4
    when 32..39 then 5
    when 40..47 then 6
  end
end

(0..47).each do |num|
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name

  User.create!(
    first_name: first_name,
    last_name: last_name,
    pet_type: PET_TYPES[rand(4)],
    city_id: cityId(num),
    email: Faker::Internet.safe_email("#{first_name} #{last_name}"),
    password: Faker::Internet.password(8),
    image_url: USER_IMAGES[num]
  )
end

(0..47).each do |num|
  dateTime = Faker::Time
              .between(2.days.from_now, 4.months.from_now, :day)
              .at_beginning_of_hour + ([15,30,45,60].sample).minutes

  Event.create!(

    date: dateTime.strftime('%B %-m, %Y'),
    time: dateTime.strftime('%H%M'),
    host_id: num + 2,
    city_id: cityId(num),
    location: Faker::Address.street_address
  )
end

# Host.find(1).update(
#   detail1: 'i like cats',
#   detail2: 'i like dogs',
#   detail3: 'i like bunnies'
# )
# Host.find(2).update(
#   detail1: 'i like running with my dogs',
#   detail2: 'i like traveling with my dogs',
#   detail3: 'i like hiking with my pups'
# )
# Host.find(3).update(
#   detail1: 'i like playing with my cat',
#   detail2: 'i like skating with my cat',
#   detail3: 'i like excercising with my cat'
# )
#
#
# Event.create!([
#   {date: "January 10, 2017", time: "1030", host_id: 1, city_id: 1, location: "somewhere only we know", description: "a blast from the past!"},
#   {date: "January 15, 2017", time: "1130", host_id: 1, city_id: 1, location: "fun place", description: "wow so fun with pets"},
#   {date: "February 14, 2017", time: "1230", host_id: 1, city_id: 1, location: "really fun place", description: "come join our event!"},
#   {date: "February 28, 2017", time: "1630", host_id: 3, city_id: 1, location: "state beach", description: "watch the sunset and play with cute puppies!!"},
#   {date: "May 19, 2017", time: "1730", host_id: 2, city_id: 1, location: "pacifica", description: "waves, charcuterie, and most importantly, huskies!!"},
#   {date: "April 22, 2017", time: "1630", host_id: 3, city_id: 1, location: "san bruno coffee shop", description: "new litter of kittens!!"}
#   ])
#
# Attendance.create!([
#   {user_id: 2, event_id: 1},
#   {user_id: 3, event_id: 1},
#   {user_id: 1, event_id: 5}
# ])
