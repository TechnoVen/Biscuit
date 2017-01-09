{
  currentUser: {
    id: 1,
    email: "jacksonlaw@email.com",
    nickname: "jack",
    firstname: "jackson",
    lastname: "law"
    pet_type: "dog"
  },
  user_events: {
    active: [
      4 : {
        //..see below
      }
    ],
    inactive: [
      //..see below
    ]
  }
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    newHost: {errors: ["all questions must be answered"]},
    newEvent: {errors: ["invalid date(past)"]}
  },
  cities: {
    1: {
      name: "SF/Bay Area",
      image_url: "app/assets/images.."
      },
      //...
    }
  },
  city: {
    splash_image: "app/assets/images..",
    hosts: {
      2: {
        host_id: 5,
        user_id: 18,
        profile_img: "app/assets/images.."
      },
      //...
    }
  },
  events: {
    4: {
      date: "Feb 14, 2017"
      weekday: "tuesday",
      time: "6:30p"
      host: {
        host_id: 1,
        nickname: "jack",
        profile_img: "app/assets/images.."
      },
      description: "...",
      max_guests: 6,
      city_id: 1,
      event_id: 4
    },
    //...
  }
}
