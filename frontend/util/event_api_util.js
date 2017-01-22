import moment from 'moment';

export const createEvent = (event) => (
  $.ajax({
    method: 'POST',
    url: '/api/events',
    data: {event}
  })
);

export const deleteEvent = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/events/${id}`
  })
);
