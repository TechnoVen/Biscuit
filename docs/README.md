# Biscuit (dev)

[Heroku link][heroku]

[Trello link][trello]

[heroku]: http://biscuitapp.herokuapp.com
[trello]: https://trello.com/b/OFsZIaaS/biscuit

## Minimum Viable Product

Biscuit is a web application inspired by Tea With Strangers built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Choose City
- [ ] Host Event
- [ ] Join Event in your City
- [ ] Dashboard of joined events/hosted events
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component_hierarchy.md
[sample-state]: sample_state.md
[api-endpoints]: api_endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Events Model, API, and Hosting components (2 days)

**Objective:** Events can be created, read, and destroyed through
the API.

### Phase 3: Cities API, and components (2 days, W2 Tue 6pm)

**Objective:**  Cities display all currently available places where events can be hosted/joined. Individual cities display event cards that can be join or waitlisted into.

### Phase 4:  Dashboard of Joined/Past Events(2 days, W2 Thur 6pm)

**Objective:** Toggle between past and currently joined events. Users can leave attending or remove hosted events.

### Bonus Features (TBD)
- [ ] Google Map API & Event Highlighting
- [ ] Mobile-friendly
- [ ] Set reminders on events
- [ ] Suggestions based on events and profile details
