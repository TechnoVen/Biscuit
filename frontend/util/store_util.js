import values from 'lodash/values';
import findIndex from 'lodash/findIndex';
import Moment from 'moment';

export const isNotPastEvent = (event) => {
  const todayMoment = Moment().startOf('day');
  const eventDTString = `${event.date} ${event.time}`;
  const eventMoment = Moment(eventDTString, 'MMMM D, YYYY h:mm a');

  return eventMoment.isAfter(todayMoment);
};

export const getCurrentEvents = (events) => (
  values(events).reduce((acc, ev) => {
    if (isNotPastEvent(ev)) {
      return acc.concat([ev]);
    } else {
      return acc;
    }
  }, [])
);

export const eventComparator = (a, b) => {
  const aDT = Moment(`${a.date} ${a.time}`, 'MMMM D, YYYY h:mm a');
  const bDT = Moment(`${b.date} ${b.time}`, 'MMMM D, YYYY h:mm a');

  if (aDT.isAfter(bDT)) {
    return 1;
  } else if (aDT.isBefore(bDT)) {
    return -1;
  } else return 0;
};


export const sortByDate = (events) => (
  events.sort((a, b) => eventComparator(a, b))
);

export const pastMinute = (event) => (
  Moment().subtract(1, 'minutes').isBefore(Moment(event.updated_at))
);

export const findEventByTitle = (events, title) => {
  const idx = findIndex(events, (event) => {
    return event.title === title && pastMinute(event);
  });

  if (idx !== -1) {
    return events[idx];
  } else return null;
};

//
// export const filterAttended = (events, userId) => {
//   let filtered = events;
//   if (userId && events) {
//     filtered = filter(filtered, (obj) => {
//       if (obj.host.id === userId) {
//         return false;
//       }
//       else if (!obj.attendances || !obj.attendances[userId]) {
//         return true;
//       }
//       return false;
//     });
//   }
//
//   return sortByDate(filtered);
// };
