# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users/id`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Events

- `GET /api/events/:id`
  - Single event
  - Host
  - All joined members
- `GET /api/events`
  - All events for a city
- `POST /api/events`
- `PATCH /api/events/:id`
- `DELETE /api/events/:id`

### Cities

- `GET /api/cities/`
  - All cities
- `GET /api/cities/:id`
  - All events
  - All hosts

### Hosts

- `POST /api/hosts/`
- `GET /api/hosts/:id`
- `PATCH /api/hosts/:id`
- `DELETE /api/hosts/:id`
