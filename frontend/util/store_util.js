import {values, filter} from 'lodash';
import moment from 'moment';

export const sortByDate = (events) => (
  values(events).sort((a, b) => {
    const dateTimeA = moment(`${a.date} ${a.time}`, 'MMMM D, YYYY HHmm');
    const dateTimeB = moment(`${b.date} ${b.time}`, 'MMMM D, YYYY HHmm');
    if (dateTimeA.isAfter(dateTimeB)) {
      return 1;
    } else if (dateTimeA.isBefore(dateTimeA)) {
      return -1;
    } else return 0;
  })
);

export const filterAttended = (events, userId) => {
  let filtered = events;
  if (userId && events) {
    filtered = filter(filtered, (obj) => {
      if (obj.host.id === userId) {
        return false;
      }
      else if (!obj.attendances || !obj.attendances[userId]) {
        return true;
      }
      return false;
    });
  }

  return sortByDate(filtered);
};

export const getMilitaryTime = (time) => {
  return moment(time, "h : mm A").format('HHmm');
};

export const getLocalTime = (time) => {
  return moment(time, "hhmm").format('h:mm a');
};

export const getWeekday = (date) => {
  return moment(date, "MMMM D, YYYY").format('ddd');
};
