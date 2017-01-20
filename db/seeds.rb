PROFILE_SENTENCES = [
  "Compliment someone today! ",
  "Let someone know how much you appreciate them ",
  "See someone struggling with lots of bags? Offer to help them ",
  "Someone wronged you? Forgive them ",
  "Say good morning/afternoon/evening to a stranger ",
  "Life can get really busy - take some time out to spend with a family member ",
  "Someone looking lost? Help them with directions ",
  "Help an elderly person cross the road or up the stairs ",
  "Be someone’s shoulder to cry on ",
  "Go the day without complaining ",
  "Leave someone flowers anonymously ",
  "Make an effort to get to know someone you don’t usually talk to ",
  "Know someone going through something you’ve been through? Give them advice ",
  "Help someone academically – lend them your study notes ",
  "Old laptop or mobile lying around? Donate it ",
  "Be eco-friendly – unplug electronics when you’re finished using them ",
  "Plant a seed ",
  "Apologise to someone you may have hurt ",
  "Answer the phone in a cheerful voice – even if it is a sales person ",
  "We rarely listen to others - ask someone about their day ",
  "We all love surprises! Buy someone an unexpected gift ",
  "Bake something for your family/friends ",
  "We all need help sometimes; offer someone a helping hand ",
  "Make a hot beverage for a friend/family ",
  "Surprise your parents with flowers ",
  "Give up your seat on the tube/bus ",
  "Help a younger student with their work ",
  "Write a complimentary note for someone ",
  "Bake for your neighbour ",
  "Offer to help your neighbours/friends with chores ",
  "Reconnect with your grandparents or an elderly person you know – give them a call! ",
  "It’s hard to stay connected – reach out to an elderly person you know ",
  "House chores can be tiring – offer a helping hand ",
  "Pay for someone else’s meal today ",
  "Save your family some time and buy their groceries ",
  "Wardrobe overflowing? Donate clothes to a charity ",
  "Have lunch with a homeless person ",
  "Surroundings looking messy? Tidy up the area around you ",
  "Make a conscious effort to recycle ",
  "Purchase ethical goods ",
  "Open the door for someone ",
  "Smile at a stranger ",
  "Help someone struggling with heavy bags ",
  "Read a good book recently? Pass it on to someone else ",
  "Send flowers to a friend or a family member! ",
  "Feeling inspired? Make a meal for your family or roommates ",
  "Surprise your siblings with their favourite sweets/chocolate ",
  "Know someone who is not coping very well? Give them a call ",
  "Send a thank you card to someone who has made a difference in your life (a friend, family member, teacher etc.) ",
  "Offer to babysit your siblings/cousins/nephews/nieces etc ",
  "Share today’s food with your neighbour! ",
  "Gift someone something they complimented you for ",
  "Leave a kind message anywhere (in a library book, on a computer etc.) ",
  "Buy someone a coffee ",
  "Visit a friend who’s sick ",
  "Buy more ethically sourced foods ",
  "We walk past homeless people every day; can you spare them 5 minutes of your time? ",
  "Feeling brave? Give blood ",
  "Make amends with someone you may have wronged ",
  "Smile at 3 people today ",
  "Is that litter on the floor? Pick it up and bin it ",
  "Share something interesting you’ve learnt today ",
  "Make your voice count - sign a petition for a good cause ",
  "Make someone a cup of coffee ",
  "Tell a friend about ARK/World Kindness Day ",
  "Neighbour’s lawn looking messy? Offer to mow it ",
  "Remember that family member you haven’t seen for a while? See how they are doing ",
  "Taking public transport? Offer your seat to someone else ",
  "Forgive someone who has wronged you ",
  "Make someone’s day – tell a friend why you appreciate them ",
  "Help someone carry their pushchair up/down the stairs ",
  "Treat a friend – buy them lunch! ",
  "Know someone who’s feeling under the weather? Pay them a visit! ",
  "Lend a friend a book you think they’d like ",
  "Go green – don’t waste paper ",
  "Feed a stray animal if you spot one ",
  "Remember to turn the lights off when you leave a room! ",
  "Save water – turn the tap off when brushing your teeth! ",
  "Save water – take a shorter shower today ",
  "Fight climate change – go vegetarian for today! ",
  "Recycle 3 things today ",
  "Put your phone down and have a conversation with a friend ",
  "Hug your parents ",
  "Google 'survey for charity' and complete one. They receive money for every one you fill out! ",
  "Who will be making dinner for your family today? Tag, you’re it! ",
  "Help somebody with a chore they need done! ",
  "Go out of your way to thank someone today! ",
  "Pick up somebody else’ tab next time you go for a coffee ",
  "Support a small, local business as a customer ",
  "Oooh wait! There’s somebody behind you; hold the door open! ",
  "Pay for someone’s bus ticket ",
  "Volunteer your time for a good cause ",
  "Empty your wallet for charity ",
  "Good servicing requires a lot of effort; tip them! ",
  "No matter how annoying they can be, tell your siblings how much you appreciate them ",
  "Help someone improve, give them constructive feedback ",
  "Share your lunch with a friend ",
  "It can get lonely when you are old, pay your grandparents a visit ",
  "Remember that friend you haven’t seen for ages? Give them a call ",
  "Start the day right – make breakfast for everyone ",
  "Be proactive – sign a petition for a good cause "
]


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
    location: Faker::Address.street_address,
    description: PROFILE_SENTENCES[rand(0..100)]
  )
end

hosts = Host.all

hosts[0].detail1 = PROFILE_SENTENCES[rand(0..100)]
hosts[0].detail2 = PROFILE_SENTENCES[rand(0..100)]
hosts[0].detail3 = PROFILE_SENTENCES[rand(0..100)]
hosts[0].save

(1..48).each do |num|
  hosts[num].detail1 = PROFILE_SENTENCES[rand(0..100)] + PROFILE_SENTENCES[rand(0..100)] + PROFILE_SENTENCES[rand(0..100)]
  hosts[num].detail2 = PROFILE_SENTENCES[rand(0..100)] + PROFILE_SENTENCES[rand(0..100)] + PROFILE_SENTENCES[rand(0..100)]
  hosts[num].detail3 = PROFILE_SENTENCES[rand(0..100)] + PROFILE_SENTENCES[rand(0..100)] + PROFILE_SENTENCES[rand(0..100)]
  hosts[num].save
end
