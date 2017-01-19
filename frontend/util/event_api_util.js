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

export const deleteEvent = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/events/${id}`
  })
);

export const getMilitaryTime = (time) => {
  return moment(time, "h : mm A").format('HHmm');
};

export const getLocalTime = (time) => {
  return moment(time, "hhmm").format('h:mm a');
};

export const getWeekDay = (date) => {
  return moment(date, "MMMM D, YYYY").format('ddd');
};

export const isPastEvent = (date, time) => {
  const dateTime = `${date} ${time}`;
  const eventMoment = moment(dateTime, 'MMMM D, YYYY HHmm')
    .add(1, 'days')
    .startOf('day');

  return moment().isAfter(eventMoment);
};
