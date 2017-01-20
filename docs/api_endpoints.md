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

- `GET /api/events`
  - All session events
- `POST /api/events`
- `DELETE /api/events/:id`

### Cities

- `GET /api/cities/`
- `GET /api/cities/:id`
  - Current events

### Hosts

- `GET /api/hosts/`
- `POST /api/hosts/`
- `PATCH /api/hosts/:id`
- `DELETE /api/hosts/:id

### Attendances

- `POST /api/attendances/`
- `DELETE /api/attendances/:id`
