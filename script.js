import { books } from './books.js';

let mainTitle = document.querySelector('#mainTitle')
mainTitle.onclick = function() {
    location.reload()
}

let arrayButton = document.querySelector('#arrayButton')
arrayButton.onclick = function() {
    let returnBookList = document.querySelector('#return')

    returnBookList.innerHTML = ""
    books.sort(function(a, b) {
        return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
    })
    books.forEach(value => {
        let bookList = document.createElement('div')
        bookList.classList.add('returnContent')
        bookList.innerHTML = `
        <div>
            <h2>${value.title}</h2>
            <p><strong>Autor:</strong> ${value.author}</p>
            <p><strong>Ano:</strong> ${value.year}</p>
        </div>
        ${value.avatar}`
        returnBookList.appendChild(bookList);
    })
}

let button = document.querySelector('.button')
button.onclick = function search() {
    let inputSearch = document.querySelector('#search').value.toLowerCase()
    let radSearch = document.getElementsByName('radSearch')
    let returnSearch = document.querySelector('#return')
    
    if(inputSearch == "") {
        alert(`Favor preencha o campo com uma das informações solicitadas.`)
        return
    }

    returnSearch.innerHTML = ""
    if(radSearch[0].checked) {
        books.sort(function(a, b) {
            return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
        })

        books.forEach( element => {
            if(element.author.toLowerCase().includes(inputSearch)) {
                let book = document.createElement('div')
                book.classList.add('returnContent')
                book.innerHTML = `
                <div>
                    <h2>${element.title}</h2>
                    <p><strong>Autor:</strong> ${element.author}</p>
                    <p><strong>Ano:</strong> ${element.year}</p>
                </div>
                ${element.avatar}`
                returnSearch.appendChild(book);
            }
            
            if (books.every(element => element.author.toLowerCase().includes(inputSearch) == false)) {
                returnSearch.innerHTML = `
                <div class='returnNotFound'>
                <img id="notFoundAuthor" src="./images/not_found_author.gif" alt="Resultado de busca por autor não encontrado">
                </div>`
            }
        })
    }

    if(radSearch[1].checked) {
        books.sort(function(a, b) {
            return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
        })
        books.forEach( element => {
            if(element.title.toLowerCase().includes(inputSearch)) {
                let author = document.createElement('div')
                author.classList.add('returnContent')
                author.innerHTML = `
                <div>
                    <h2>${element.title}</h2>
                    <p><strong>Autor:</strong> ${element.author}</p>
                    <p><strong>Ano:</strong> ${element.year}</p>
                </div>
                ${element.avatar}`
                returnSearch.appendChild(author);
            } 

            if (books.every(element => element.title.toLowerCase().includes(inputSearch) == false)) {
                returnSearch.innerHTML = `
                <div class='returnNotFound'>
                <img id="notFoundTitle" src="./images/not_found_title.gif" alt="Resultado de busca por título não encontrado">
                </div>`
            }
        })
    }

    if(radSearch[2].checked) {
        books.sort(function(a, b) {
            return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
        })
        books.forEach( element => {
            if(element.year == inputSearch) {
                let books = document.createElement('div')
                books.classList.add('returnContent')
                books.innerHTML = `
                <div>
                    <h2>${element.title}</h2>
                    <p><strong>Autor:</strong> ${element.author}</p>
                    <p><strong>Ano:</strong> ${element.year}</p>
                </div>
                ${element.avatar}`
                returnSearch.appendChild(books)
            } 

            if (books.every(element => element.year != inputSearch)) {
                returnSearch.innerHTML = `
                <div class='returnNotFound'>
                <img id="notFoundYear" src="./images/not_found_year.gif" alt="Resultado de busca por ano não encontrado">
                </div>`
            }
        })
    }
}
