const myLibrery = [];
const btnShow = document.querySelector(".btn-show");
const bookAdd = document.querySelector(".book-add");

btnShow.addEventListener("click", formShow);
bookAdd.addEventListener("click", addCardBook);

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function formShow() {
  event.preventDefault();
  const form = document.querySelector(".form-books");
  form.style.display = "flex";
}

function addCardBook() {
  event.preventDefault();
  const containerCard = document.querySelector(".container-card");

  const form = document.querySelector(".form-books");
  const bookTitle = document.querySelector(".book-title").value;
  const bookAuthor = document.querySelector(".book-author").value;
  const bookPages = document.querySelector(".book-pages").value;

  const book = new Book(bookTitle, bookAuthor, bookPages);

  myLibrery.push(book);

  const card = document.createElement("div");
  const title = document.createElement("h3");
  const author = document.createElement("p");
  const pages = document.createElement("p");

  const status = document.createElement("select");
  const read = document.createElement("option");
  const earring = document.createElement("option");
  const notStart = document.createElement("option");

  card.classList.add("card");

  title.classList.add("title");
  author.classList.add("author");
  pages.classList.add("pages");

  status.classList.add("status");
  read.classList.add("read");
  earring.classList.add("earring") ;
  notStart.classList.add("notStart");

  title.textContent = bookTitle;
  author.textContent = bookAuthor;
  pages.textContent = bookPages;

  read.textContent = "read";
  earring.textContent = "earring";
  notStart.textContent = "Not start";

  status.appendChild(read);
  status.appendChild(earring);
  status.appendChild(notStart);

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(status);

  form.addEventListener("submit", formValidation);

  containerCard.appendChild(card);
  form.style.display = "none";
  document.querySelector(".book-title").value = "";
  document.querySelector(".book-author").value = "";
  document.querySelector(".book-pages").value = "";
}

function formValidation(){
  const bookTitle = document.querySelector(".book-title").value;
  const bookAuthor = document.querySelector(".book-author").value;
  const bookPages = document.querySelector(".book-pages").value;

  if(bookTitle === "" || bookAuthor === "" || bookPages === ""){
    form.style.display = "flex";
  }

}