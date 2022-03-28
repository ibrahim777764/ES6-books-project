import navSection from './modules/navbar.js';
import BookCollection from './modules/class.js';
import { DateTime } from './modules/luxon.js';

navSection('list-nav');
const navList = ['list-nav', 'add-nav', 'contact-nav'];
navList.forEach((element) => {
  const display = document.getElementById(`${element}`);
  display.addEventListener('click', () => {
    navSection(element);
  });
});

const btnAdd = document.getElementById('btn-add-id');
const runClass = new BookCollection();
runClass.displayBooks();

btnAdd.addEventListener('click', () => {
  runClass.addBooks();
  runClass.displayBooks();
});

const now = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
document.getElementById('date').innerHTML = now;

setInterval(() => {
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  document.getElementById('date').innerHTML = now;
}, 1000);