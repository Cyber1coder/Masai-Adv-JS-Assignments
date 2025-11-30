let books = [];

let imgURL = "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg";

let addBtn = document.getElementById("addBtn");
let sortBtn = document.getElementById("sortBtn");
let filterCategory = document.getElementById("filterCategory");
let container = document.getElementById("booksContainer");

function goHome() {
    window.location.href = "index.html";
}

addBtn.addEventListener("click", function () {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let category = document.getElementById("category").value;

    if (title === "" || author === "") {
        alert("Please enter all fields");
        return;
    }

    let book = {
        title,
        author,
        category,
        imageUrl: imgURL
    };

    books.push(book);
    renderBooks(books);
});

sortBtn.addEventListener("click", function () {
    books.sort((a, b) => a.title.localeCompare(b.title));
    renderBooks(books);
});

filterCategory.addEventListener("change", function () {
    let selected = filterCategory.value;

    if (selected === "All") {
        renderBooks(books);
    } else {
        let filtered = books.filter(book => book.category === selected);
        renderBooks(filtered);
    }
});

function renderBooks(data) {
    container.innerHTML = "";

    data.forEach((book, index) => {
        let card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${book.imageUrl}">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p>${book.category}</p>
            <button onclick="deleteBook(${index})">Delete</button>
        `;

        container.appendChild(card);
    });
}

function deleteBook(index) {
    books.splice(index, 1);
    renderBooks(books);
}
