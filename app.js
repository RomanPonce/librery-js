const myLibrery = [];
const btnShow = document.querySelector(".btn-show");
const bookAdd = document.querySelector(".book-add");
const form = document.querySelector("form");
const dialog = document.querySelector("dialog");

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

bookAdd.addEventListener("click", addCardBook);
form.addEventListener("submit", formValidation);
btnShow.addEventListener("click", () => {
  dialog.showModal();
});

function formValidation(event){
}

function addCardBook(event) {

  
}
