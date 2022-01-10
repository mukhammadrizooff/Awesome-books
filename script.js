let books = [], i = 0;
    
const form = document.querySelector('.formContainer');
const elementList = document.getElementById('listBooks');
const submit = document.getElementById('formId');

const listBooks = (books) => `
    <li>${books.title}</li>
    <li>${books.author}</li>
    <button type='button' id='${books.id}' class='remove-btn'>Remove</button>
    <br /><br />
    <hr />`;

const localStorageProgres = () => {
  const infoData = localStorage.getItem('ListBooks');
  const data = JSON.parse(infoData);
  if (data) {
    books = data;
    if (books.length > 0) {
      i = books[books.length - 1].id;
    }
  }
  elementList.innerHTML = `${books.map(listBooks).join('')}`;
  elementList.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-btn')) {
      removeElement(e);
    }
  });
};

const booksAdd = (e) => {
  e.preventDefault();
  i += 1;
  const localelement = {
    id: i,
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
  };
  books.push(localelement);
  localStorage.setItem('ListBooks', JSON.stringify(books));
  elementList.innerHTML = `${books.map(listBooks).join('')}`;
  elementList.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-btn')) {
      removeElement(e);
    }
  });
  form.reset();
};

const removeElement = (e) => {
  const btnInfo = e.target.id;
  books = books.filter((y) => y !== books[books.findIndex((x) => x.id === parseInt(btnInfo, 10))]);
  localStorage.setItem('ListBooks', JSON.stringify(books));
  elementList.innerHTML = `${books.map(listBooks).join('')}`;
};

window.addEventListener('DOMContentLoaded', localStorageProgres);
submit.addEventListener('submit', booksAdd);
