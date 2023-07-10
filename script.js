import { books } from "./books.js";

let mainTitle = document.querySelector("#mainTitle");
mainTitle.onclick = function () {
  location.reload();
};

books.sort(function (a, b) {
  return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
});

function showBooks(book) {
  let returnBookList = document.querySelector("#return");
  let bookList = document.createElement("div");
  bookList.classList.add("returnContent");
  bookList.innerHTML = `
            <div>
                <h2>${book.title}</h2>
                <p><strong>Autor:</strong> ${book.author}</p>
                <p><strong>Ano:</strong> ${book.year}</p>
            </div>
            ${book.avatar}`;
  returnBookList.appendChild(bookList);
}

function showError(type) {
  let returnBookList = document.querySelector("#return");
  returnBookList.innerHTML = `
      <div class='returnNotFound'>
        <img id="notFoundAuthor" src="./images/${type}.gif" alt="Resultado de busca por ${type} não encontrado">
      </div>`;
}

let arrayButton = document.querySelector("#arrayButton");
arrayButton.addEventListener("click", () => {
  let returnBookList = document.querySelector("#return");
  returnBookList.innerHTML = "";
  books.forEach((book) => {
    showBooks(book);
  });
});

let button = document.querySelector(".button");
button.onclick = () => {
  let inputSearch = document.querySelector("#search").value.toLowerCase();
  let radSearch = document.getElementsByName("radSearch");
  let returnBookList = document.querySelector("#return");
  returnBookList.innerHTML = "";

  if (inputSearch == "") {
    alert(`Favor preencha o campo com uma das informações solicitadas.`);
    return;
  }

  if (radSearch[0].checked) {
    books.forEach((book) => {
      if (book.author.toLowerCase().includes(inputSearch)) {
        showBooks(book);
      }

      if (
        books.every(
          (book) => book.author.toLowerCase().includes(inputSearch) == false
        )
      ) {
        showError("autor");
      }
    });
  }

  if (radSearch[1].checked) {
    books.forEach((book) => {
      if (book.title.toLowerCase().includes(inputSearch)) {
        showBooks(book);
      }

      if (
        books.every(
          (book) => book.title.toLowerCase().includes(inputSearch) == false
        )
      ) {
        showError("titulo");
      }
    });
  }

  if (radSearch[2].checked) {
    books.forEach((book) => {
      if (book.year == inputSearch) {
        showBooks(book);
      }

      if (books.every((book) => book.year != inputSearch)) {
        showError("ano");
      }
    });
  }
};

addEventListener("keypress", function (keyEnter) {
  if (keyEnter.key === "Enter") {
    button.onclick();
  }
});