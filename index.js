import Book from './modules/book.js';
import navigation from './modules/navigation.js';
// import Store from './modules/store.js';
import displayBook from './modules/display.js';

navigation();

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
     alert('Please fill in all fields');
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
 