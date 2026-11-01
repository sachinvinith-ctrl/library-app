const myLibrary = [];

function bookConstructor(name, author, pages, read) {

this.id = crypto.randomUUID();
this.name = name;
this.author = author;
this.pages = pages;
this.read = read;

};

function addBookToLibrary() {




};

const captureInput = document.querySelector("#form");

captureInput.addEventListener("submit", (event) => {

event.preventDefault();

let name = document.querySelector("#title").value;
let author = document.querySelector("#author").value;
let pages = document.querySelector("#pages").value;
let read = document.querySelector("input[name='read-or-not']:checked").value;

const newBook = new bookConstructor(name, author, pages, read);
console.log(newBook);


})



