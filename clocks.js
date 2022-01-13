function displayClock() {
  const time = new Date();

  let dayPeriod = '';

  let month = time.getMonth();

  const date = dateWithSuffix(time.getDate());

  const hours = time.getHours() % 12;

  if (time.getHours() > 12) {
    dayPeriod = 'PM';
  } else {
    dayPeriod = 'AM';
  }

  function dateWithSuffix(date) {
    const num1 = date % 10;
    const num2 = date % 100;
    if (num1 === date && num2 !== 11) {
      return `${date}st`;
    }
    if (num1 === 2 && num2 !== 12) {
      return `${date}nd`;
    }
    if (num1 === 3 && num2 !== 13) {
      return `${date}rd`;
    }
    return `${date}th`;
  }

  const monthOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];

  month = monthOfYear[month];

  let clock = `${month} ${date} ${time.getFullYear()},`;
  clock += ` ${hours}:${time.getMinutes()}:${time.getSeconds()} ${dayPeriod}`;
  document.querySelector('.clock').innerHTML = clock;
}
displayClock();

setInterval(displayClock, 1000);
