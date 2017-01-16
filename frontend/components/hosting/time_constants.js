export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const shortMonths = [
  'April',
  'June',
  'September',
  'November'
];

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

export const days = (month) => {
  const d = [];
  for (let i = 1; i <= 31; i++) {
    d.push(`${i}`);
    if (month === 'February' && i === 28) {
      break;
    } else if (shortMonths.indexOf(month) !== -1 && i === 30) {
      break;
    }
  }
  return d;
};
