const minute = 60;
const hour = minute * 60;
const day = hour * 24;
const week = day * 7;

const formatTime = timestamp => {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  return hours + ":" + minutes.substr(-2);
};

const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря"
];

const formatDate = timestamp => {
  const date = new Date(timestamp);
  const time = formatTime(timestamp);
  const month = months[date.getMonth()];
  const day = date.getDate();
  return `${day} ${month}, ${time}`;
};

const humaniseDate = timestamp => {
  const delta = Math.round((Date.now() - timestamp) / 1000);

  const startDay = new Date();
  startDay.setHours(0, 0, 0, 0);
  const dayDelta = startDay < timestamp;

  switch (true) {
    case delta < minute:
      return "Только что";
    // case delta < minute:
    //   return `${delta} секунд назад.`
    case delta < 2 * minute:
      return "Минуту назад";
    case delta < 5 * minute:
      return `${Math.floor(delta / minute)} минуты назад`;
    case delta < 20 * minute:
      return `${Math.floor(delta / minute)} минут назад`;
    // case Math.floor(delta / hour) < 2:
    //   return '1 час назад.'
    // case Math.floor(delta / hour) < 5:
    //   return `${Math.floor(delta / hour)} часа назад`
    // case Math.floor(delta / hour) < 10:
    //   return `${Math.floor(delta / hour)} часов назад`
    case delta < day && dayDelta:
      return `Cегодня, ${formatTime(timestamp)}`;
    case delta < day * 2:
      return `Вчера, ${formatTime(timestamp)}`;
    default:
      return formatDate(timestamp);
  }
};

export default humaniseDate;
