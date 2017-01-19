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

export const getMilitaryTime = (time) => {
  return moment(time, "h : mm A").format('HHmm');
};

export const getLocalTime = (time) => {
  return moment(time, "hhmm").format('h:mm a');
};

export const getWeekDay = (date) => {
  return moment(date, "MMMM D, YYYY").format('ddd');
};
