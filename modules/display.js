import Store from './store.js';

export default class displayBook {
    static displayBooks() {
      const books = Store.getBooks();
  
      books.forEach((book) => displayBook.addBookToList(book));
    }
  
    static addBookToList(book) {
      const elementList = document.getElementById('listBooks');
      const listItem = document.createElement('li');
  
      listItem.innerHTML = `
      <span>"${book.title}" by ${book.author}</span>
      <button type='button' id='${book.id}' class='remove-btn'>Remove</button>
      `;
  
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