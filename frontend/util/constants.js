import moment from 'moment';

export const months = () => {
  let dateStart = moment().add(1, 'day');
  const nextYear = dateStart.add(1, 'years').year();
  const result = [];
  while (dateStart.year() === nextYear) {
    result.push(dateStart.format('MMMM'));
    dateStart.add(1, 'month');
  }
  return result;
};

export const days = (month) => {
  let day = 1;
  const mFormat = moment(month, 'MMMM');

  if (moment().format('MMMM') === month) {
    day = moment().add(1, 'days').date();
  }
  const daysInMonth = mFormat.daysInMonth();
  const result = [];

  for (let i = day; i <= daysInMonth; i++) {
    result.push(i);
  }

  return result;
};

export const time = (() => {
  const ha = [];
  for (let i = 9; i < 12; i++) {
    ha.push(`${i} : 00 AM`);
    ha.push(`${i} : 15 AM`);
    ha.push(`${i} : 30 AM`);
    ha.push(`${i} : 45 AM`);
  }

  const hp = [];

  hp.push(`12 : 00 PM`);
  hp.push(`12 : 15 PM`);
  hp.push(`12 : 30 PM`);
  hp.push(`12 : 45 PM`);

  for (let i = 1; i <= 10; i++) {
    hp.push(`${i} : 00 PM`);
    hp.push(`${i} : 15 PM`);
    hp.push(`${i} : 30 PM`);
    hp.push(`${i} : 45 PM`);
  }
  return ha.concat(hp);
})();


export const petTypes = [
  'dog',
  'cat',
  'rabbit',
  'other'
];

export const cities = [
  'San Francisco / Bay Area',
  'Los Angeles',
  'New York City',
  'Chicago',
  'Philadelphia',
  'San Diego'
];
