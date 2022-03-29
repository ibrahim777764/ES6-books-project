/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function formatAMPM(date) {
  const day = date.toDateString();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours %= 12;
  hours = hours || 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  const strTime = `${day}, ${hours}:${minutes}:${seconds} ${ampm}`;
  return strTime;
}
dateContainer.innerHTML = formatAMPM(new Date());
