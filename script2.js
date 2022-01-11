// Book Class: Represents a Book
class Book {

  constructor(title, author, id) {
      this.title = title;
      this.author = author;
      this.id = id;

  }

}


class displayBook {
  static displayBooks() {
      const books = Store.getBooks();

      books.forEach((book) => displayBook.addBookToList(book));
  }

  static addBookToList(book) {
      const elementList = document.getElementById('listBooks');
      const listItem = document.createElement('li');


      listItem.innerHTML = `
  <span>${book.title}</span><br>
  <span>${book.author}</span><br>
  <button type='button' id='${book.id}' class='remove-btn'>Remove</button>
  <br /><br />
  <hr />`;

  elementList.appendChild(listItem);

  }

  static deleteBook(el) {
      if (el.classList.contains('remove-btn')) {
          el.parentElement.remove();
      }
  }



  static clearFields() {
      document.querySelector('#title').value = '';
      document.querySelector('#author').value = '';

  }
}


/ Store Class: Handles Storage
class Store {
  static getBooks() {
      let books;
      if (localStorage.getItem('books') === null) {
          books = [];
      } else {
          books = JSON.parse(localStorage.getItem('books'));
      }
      return books;
  }
  static addBook(book) {
      const books = Store.getBooks();
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
  }
  static removeBook(elem) {
      const books = Store.getBooks();
      console.log(elem.id);
      console.log(books[parseInt(elem.id)]);
      books.splice(parseInt(elem.id), 1);
           localStorage.setItem('books', JSON.stringify(books));
  }
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', displayBook.displayBooks);
let increment = 0;
// Event: Add a Book
document.querySelector('#formId').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();
  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const id = increment;
  increment++;
  // Validate
  if (title === '' || author === '') {
      alert('Please fill in all fields', 'danger');
  } else {
      // Instatiate book
      const book = new Book(title, author, id);
      // Add Book to displayBook
      displayBook.addBookToList(book);
      // Add book to store
      Store.addBook(book);
      // Clear fields
      displayBook.clearFields();
  }
});

// Event: Remove a Book
document.querySelector('#listBooks').addEventListener('click', (e) => {
    // Remove book from displayBook
    displayBook.deleteBook(e.target);
    // Remove book from store
    Store.removeBook(e.target);
  });