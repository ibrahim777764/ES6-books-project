import { DateTime } from './luxon.js';
import {
  inputTitle,
  inputAuthor,
  bookShelf,
  bookCard,
  bookForm,
  navlist,
  navadd,
  navcon,
  list,
  addNew,
  connav,
} from './includes.js';

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  populateLocalStorage = () => {
    const books = this.getBooks();
    if (!books) {
      localStorage.setItem('books', JSON.stringify([]));
    }
  };

  getBooks = () => {
    const books = JSON.parse(localStorage.getItem('books'));
    return books || [];
  };

  removeBook = (id) => {
    const books = this.getBooks();
    const newBooks = books.filter((book) => book.id.toString() !== id);
    localStorage.setItem('books', JSON.stringify(newBooks));
    document.querySelector(`#container${id}`).remove();
  };

  addBook = (book) => {
    const books = this.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  };

  removeBookFromLocalStorage = (id) => {
    this.removeBook(id);
    this.showBook();
  };

  showBook = () => {
    this.populateLocalStorage();
    const books = this.getBooks();
    bookCard.innerHTML = '';
    for (let i = 0; i < books.length; i += 1) {
      const book = books[i];
      bookCard.innerHTML += `
      <div class="book-row" id="container${book.id}">
        <div class="book-info"> 
          <p>"${book.title}"</p> 
          <p>BY</p>
          <p>${book.author}</p>
        </div>
        <div class="btn-container">
          <button type="button" id="${book.id}" class="remove-button">Remove</button>
        </div>
      </div>
        `;
      bookShelf.appendChild(bookCard);
      bookCard.classList.add('book-container');
      const removeButton = document.querySelectorAll('.remove-button');
      if (removeButton.length) {
        removeButton.forEach((button) => {
          button.addEventListener('click', () => {
            this.removeBookFromLocalStorage(button.id);
          });
        });
      }
    }
  };
}

const book = new Book(inputTitle.value, inputAuthor.value);

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const book = new Book(inputTitle.value, inputAuthor.value);
  const { title, author } = book;
  const id = Math.round(Math.random() * 10000000);

  const bookObjt = {
    id,
    title,
    author,
  };

  if (title && author) {
    book.addBook(bookObjt);
    bookForm.reset();
    book.showBook();
  }
});

window.addEventListener('DOMContentLoaded', book.showBook());

const listfun = (e) => {
  if (e.currentTarget === navlist) {
    list.style.display = 'flex';
    addNew.style.display = 'none';
    connav.style.display = 'none';
  }
};

const addfun = (e) => {
  if (e.currentTarget === navadd) {
    list.style.display = 'none';
    addNew.style.display = 'flex';
    connav.style.display = 'none';
  }
};

const confun = (e) => {
  if (e.currentTarget === navcon) {
    list.style.display = 'none';
    addNew.style.display = 'none';
    connav.style.display = 'flex';
  }
};

navlist.addEventListener('click', listfun);

navadd.addEventListener('click', addfun);

navcon.addEventListener('click', confun);

const displayTime = () => {
  document.getElementById('current-date').innerText = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  setTimeout(displayTime, 1000);
};
displayTime();