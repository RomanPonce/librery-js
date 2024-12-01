import {
  openModal,
  form,
  dialog,
  containerBooks,
  myLibrery,
} from "./globals.js";

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

openModal.addEventListener("click", () => {
  dialog.showModal();
});

form.addEventListener("submit", getInputsForm);

function getInputsForm(event) {
  event.preventDefault();

  const titleBook = document.querySelector(".title-book").value;
  const authorBook = document.querySelector(".author-book").value;
  const pagesBook = document.querySelector(".pages-book").value;
  const div = document.createElement("div");

  const book = new Book(titleBook, authorBook, pagesBook);
  myLibrery.push(book);

  div.innerHTML = `
              <h3>${titleBook}</h3>
              <p>${book.author}</p>
              <p>${book.pages}</p>
              <button>Eliminar</button>`;
  containerBooks.appendChild(div);

  dialog.close();
}

console.log("HOLA");
