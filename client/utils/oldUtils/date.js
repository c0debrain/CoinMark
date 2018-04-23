/* Receive a date with the format "2018-02-01" and returns it: '1 feb.'*/
export const formatDate = str => {
  const months = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec'
  ];
  const [_, month, day] = str.split('-');
  return `${day} ${months[parseInt(month, 10) - 1]}.`;
};
