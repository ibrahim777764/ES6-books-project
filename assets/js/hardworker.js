/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const removeBtn = document.querySelectorAll('.removeBook');
const titleInput = document.querySelector('#book_title');
const authorInput = document.querySelector('#book_author');
const addBookBtn = document.querySelector('#add_book');
const addForm = document.querySelector('.addBookForm');
const bookList = document.querySelector('.list_present');
const msg = document.querySelector('.msg');

/* Navigation controls */
const listLink = document.querySelector('.list');
const addLink = document.querySelector('.add');
const contactLink = document.querySelector('.contact');

const listSection = document.querySelector('.bookListSection');
const addSection = document.querySelector('.addBookSection');
const contactSection = document.querySelector('.contactSection');
/* Navigation controls end */

const dateContainer = document.querySelector('.todaysDate');

let localStorageData = JSON.parse(localStorage.getItem('bookData'));

if (localStorageData === null) {
  localStorageData = [];
}
const booksBinding = new Books(bookList, localStorageData);

function addBook() {
  const title = titleInput.value;
  const author = authorInput.value;
  if (title !== '' && author !== '') {
    booksBinding.add(title, author);
    msg.style.display = 'block';
    setTimeout(() => {
      msg.style.display = 'none';
    }, 2000);
    addForm.reset();
  }
}

function removeBook(bookId) {
  booksBinding.remove(bookId);
}

addBookBtn.addEventListener('click', addBook);

window.onresize = booksBinding.updateUI();
