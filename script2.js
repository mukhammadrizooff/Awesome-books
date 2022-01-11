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
