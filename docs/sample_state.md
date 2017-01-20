```
{
  session: {
    currentUser: {
      id: 1,
      email: "guest_user@email.com",
      first_name: "John",
      last_name: "Smith",
      pet_type: "dog",
      city_id: 1
    },
    profile: {
      detail_1: "Lorem ipsum...",
      // ...
    },
    events : {
      current: [ { eventObject } ...],
      past: [ { eventObject } ...]
    },
    errors: [ 'errorString' ...]
  },
  cities: {
    all: [ { cityObject } ...],
    currentCity: {
      events: [ {eventObject} ...],
      hosts: [ { hostObject } ...]
    }
  },
}

events: {
  date: "January 29, 2016",
  time: "1830",
  location: "1234 Main Street",
  description: "Lorem ipsum...",
  host_id: 1,
  city_id: 1
}
```
