import reduce from 'lodash/reduce';
import moment from 'moment';

export const createEvent = (event) => (
  $.ajax({
    method: 'POST',
    url: '/api/events',
    data: {event}
  })
);

export const fetchEvents = () => (
  $.ajax({
    method: 'GET',
    url: '/api/events'
  })
);

export const fetchEvent = (eventId) => (
  $.ajax({
    method: 'GET',
    url: `/api/events/${eventId}`
  })
);

export const updateEvent = (event) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/events/${event.id}`,
    data: {event}
  })
);

export const deleteEvent = (eventId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/events/${eventId}`
  })
);

export const filterPastEvents = (events) => {
  if (Object.getOwnPropertyNames(events).length === 0) return [];
  const jsCurrentTime = new Date().getTime();
  return reduce(events, (result, value, key) => {
    const eventDate = value.date;
    const jsNextDay = new Date(eventDate).getTime() + (86400000);
    if (jsNextDay <= jsCurrentTime) {
      value.archived = true;
      return result.concat(value);
    } else return result;
  }, []);
};

export const filterCurrentEvents = (events) => {
  if (Object.getOwnPropertyNames(events).length === 0) return [];
  const jsCurrentTime = new Date().getTime();
  return reduce(events, (result, value, key) => {
    const eventDate = value.date;
    const jsNextDay = new Date(eventDate).getTime() + (86400000);
    if (jsNextDay > jsCurrentTime) {
      return result.concat(value);
    } else return result;
  }, []);
};

export const getMilitaryTime = (time) => {
  return moment(time, "h : mm A").format('HHmm');
};

export const getLocalTime = (date) => {
  let time = date.slice(date.length - 5);
  return moment(time, "hh mm").format('h:mm a');
};
