const myLibrary = [];

function bookConstructor(name, author, pages, read) {
  this.id = crypto.randomUUID();
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

bookConstructor.prototype.toggleState = function () {
  if (this.read === "Read") {
    this.read = "Not-Read";
  } else if (this.read === "Not-Read") {
    this.read = "Read";
  }
};

function addBookToLibrary() {}

const createTable = document.createElement("table");
const createHeaderOne = document.createElement("th");
const createHeaderTwo = document.createElement("th");
const createHeaderThree = document.createElement("th");
const createHeaderFour = document.createElement("th");
const createHeaderFive = document.createElement("th");
const createHeaderSix = document.createElement("th");
const createRow = document.createElement("tr");

createHeaderOne.textContent = "Book Title";
createHeaderOne.style.border = "1px solid black";
createHeaderTwo.textContent = "Author";
createHeaderTwo.style.border = "1px solid black";
createHeaderThree.textContent = "Total Pages";
createHeaderThree.style.border = "1px solid black";
createHeaderFour.textContent = "Is The Book Read?";
createHeaderFour.style.border = "1px solid black";
createHeaderFive.textContent = "Remove The Book";
createHeaderFive.style.border = "1px solid black";
createHeaderSix.textContent = "Change Book Read Status";
createHeaderSix.style.border = "1px solid black";

createRow.append(
  createHeaderOne,
  createHeaderTwo,
  createHeaderThree,
  createHeaderFour,
  createHeaderFive,
  createHeaderSix,
);
createTable.appendChild(createRow);

createTable.style.border = "1px solid black";
createTable.style.marginTop = "20px";

document.body.appendChild(createTable);

const captureInput = document.querySelector("#form");

captureInput.addEventListener("submit", (event) => {
  event.preventDefault();

  let name = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("input[name='read-or-not']:checked").value;

  const newBook = new bookConstructor(name, author, pages, read);
  console.log(newBook);

  captureInput.reset();

  myLibrary.push(newBook);
  let bookID = myLibrary.at(-1).id;

  const createNewRow = createTable.insertRow();
  const createNewCell = createNewRow.insertCell();

  createNewCell.textContent = myLibrary.at(-1).name;
  createNewCell.style.border = "1px solid black";
  const createNewCellOne = createNewRow.insertCell();
  createNewCellOne.textContent = myLibrary.at(-1).author;
  createNewCellOne.style.border = "1px solid black";
  const createNewCellTwo = createNewRow.insertCell();
  createNewCellTwo.textContent = myLibrary.at(-1).pages;
  createNewCellTwo.style.border = "1px solid black";
  const createNewCellThree = createNewRow.insertCell();
  createNewCellThree.textContent = myLibrary.at(-1).read;
  createNewCellThree.style.border = "1px solid black";
  const createNewCellFour = createNewRow.insertCell();
  createNewCellFour.style.border = "1px solid black";
  const createNewCellFive = createNewRow.insertCell();
  createNewCellFive.style.border = "1px solid black";
  createNewRow.dataset.id = bookID;

  createNewRow.append(
    createNewCell,
    createNewCellOne,
    createNewCellTwo,
    createNewCellThree,
    createNewCellFour,
    createNewCellFive,
  );
  createTable.appendChild(createNewRow);

  const createDeleteButton = document.createElement("button");
  createDeleteButton.dataset.id = bookID;
  createDeleteButton.textContent = "Remove Book";

  createDeleteButton.addEventListener("click", () => {
    myLibrary.forEach((element, index) => {
      if (element.id === createDeleteButton.dataset.id) {
        myLibrary.splice(index, 1);
      }
    });

    const deleteTable = document.querySelectorAll("tr");
    deleteTable.forEach((element, index) => {
      if (element.dataset.id === createDeleteButton.dataset.id) {
        createTable.deleteRow(index);
      }
    });
  });

  const createStatusButton = document.createElement("button");
  createStatusButton.dataset.id = bookID;
  createStatusButton.textContent = "Change Status";

  createStatusButton.addEventListener("click", () => {
    myLibrary.forEach((element, index) => {
      if (element.id === createStatusButton.dataset.id) {
        myLibrary[index].toggleState();

        const changeTableData = document.querySelector(
          `tr[data-id="${createStatusButton.dataset.id}"] td:nth-of-type(4)`,
        );
        if (changeTableData.textContent === "Read") {
          changeTableData.textContent = "Not-Read";
        } else if (changeTableData.textContent === "Not-Read") {
          changeTableData.textContent = "Read";
        }
      }
    });
  });

  createNewCellFour.append(createDeleteButton);
  createNewCellFive.append(createStatusButton);
});

function displayBooks() {}
