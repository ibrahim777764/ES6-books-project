const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const ul = document.querySelector('ul');

export default class BookCollection {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
    this.books = [];
  }

  displayBooks() {
    this.books = JSON.parse(localStorage.getItem('book_author')) || [];
    if (ul.querySelectorAll('li')) {
      Array.from(ul.querySelectorAll('li')).forEach((bookContainer) => {
        ul.removeChild(bookContainer);
      });
    }

    this.books.forEach((book) => {
      const li = document.createElement('li');
      li.className = 'book';
      const bookAuthor = document.createElement('p');
      bookAuthor.className = 'book-author';
      const deletebtn = document.createElement('button');
      deletebtn.id = book.id;
      deletebtn.className = 'remove-btn';
      deletebtn.textContent = 'Remove';
      deletebtn.addEventListener('click', () => {
        this.removeBook(book.id);
      });
      bookAuthor.textContent = `"${book.title}" by ${book.author}`;
      li.appendChild(bookAuthor);
      li.appendChild(deletebtn);
      ul.appendChild(li);
    });
  }

  removeBook(n) {
    this.books.forEach((e, i, lib) => {
      if (e.id === n) {
        lib.splice(i, 1);
      }
    });

    localStorage.setItem('book_author', JSON.stringify(this.books));
    this.displayBooks();
  }

  addBooks() {
    let newId = 1;
    if (this.books.length) {
      newId = this.books[this.books.length - 1].id + 1;
    }
    this.books.push(new BookCollection(this.title = inputTitle.value,
      this.author = inputAuthor.value, this.id = newId));
    localStorage.setItem('book_author', JSON.stringify(this.books));
    inputTitle.value = '';
    inputAuthor.value = '';
  }
}