const container = document.querySelector(".container");
const newBook = document.querySelector("#new-btn");
const addBook = document.querySelector("#add-btn");
const fTitle = document.querySelector("#btitle");
const fAuthor = document.querySelector("#bauthor");
const fPages = document.querySelector("#bpages");
const fReaded = document.querySelector("#breaded");
const form = document.getElementById("form");
let removeBtn;

let myLibrary = [];

const a = new Book(0, "The Lord Of The Rings", "Tolkien", 300, true);
const b = new Book(1, "In The Mountains Of Madness", "Lovecraft", 200, false);
myLibrary.push(a);
myLibrary.push(b);

function Book(id, title, author, pages, readed) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readed = readed === true ? "read" : "not reade yet";
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${readed}`;
  };
}

function addBookToLibrary(id, title, author, pages, readed) {
  myLibrary.push(new Book(id, title, author, pages, readed));
}

function displayBooks(myArray) {
  var result = "<table border=1>";
  result +=
    "<tr><th>id</th><th>Title</th><th>Author</th><th>Pages</th><th>Readed?</th>";
  for (var i = 0; i < myArray.length; i++) {
    result += "<tr>";
    result += "<td>" + myArray[i].id + "</td>";
    result += "<td>" + myArray[i].title + "</td>";
    result += "<td>" + myArray[i].author + "</td>";
    result += "<td>" + myArray[i].pages + "</td>";
    result += "<td>" + myArray[i].readed + "</td>";
    result +=
      "<td>" +
      `<button class="remove-btn" id="${myArray[i].id}">REMOVE</button>` +
      "</td>";
    result += "</tr>";
  }
  result += "</table>";

  container.innerHTML = result;
  removeBtn = document.querySelectorAll(".remove-btn");
  addRemoveButtons();
}

addBook.addEventListener("click", () => {
  const t = fTitle.value;
  const a = fAuthor.value;
  const p = fPages.value;
  const r = fReaded.checked;
  const newId =
    myLibrary.length === 0 ? 0 : myLibrary[myLibrary.length - 1].id + 1;
  addBookToLibrary(newId, t, a, p, r);
  displayBooks(myLibrary);
  fTitle.value = "";
  fAuthor.value = "";
  fPages.value = "";
  fReaded.checked = false;
  form.style.display = "none";
});

newBook.addEventListener("click", () => {
  form.style.display = "block";
  fTitle.value = "";
  fAuthor.value = "";
  fPages.value = "";
  fReaded.checked = false;
  fTitle.focus();
});

function addRemoveButtons() {
  removeBtn.forEach((button) => {
    button.addEventListener("click", () => {
      const el = myLibrary.find((lib) => lib.id == button.id);
      myLibrary.splice(el, 1);
      displayBooks(myLibrary);
    });
  });
}

displayBooks(myLibrary);
