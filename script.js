// Create bookshelf array
let books = ["Hell Followed with Us", "The Spirit Bares Its Teeth", "Compound Fracture", "You Weren't Meant to be Human"];
const input = document.getElementById("bookInput");

// Create book adding functions

// Add book to front
function addFront() {
    const book = input.value.trim();
    books.unshift(book);
    displayBooks();

};

// Add book to end
function addEnd() {
    const book = input.value.trim();
    books.push(book);
    displayBooks();

};

// Create Book Removal Functions

// Remove book from front
function removeFront() {
    const book = input.value.trim();  
    books.shift(book);
    displayBooks();
};

// Remove book from end
function removeEnd() {
    const book = input.value.trim();
    books.pop(book);
    displayBooks();
};

// Display books on page

function displayBooks() {
    const bookList = document.getElementById("bookList");
    let html = "";

    if( books == ""){
        html+= `     
               <p>No books on shelf</p>
        `;
        bookList.innerHTML = html;
    }

    else{
        html += `
       <h4>Front of Shelf</h4>
       <ol>
    `;

    for (let i = 0; i < books.length; i++){
        html+= `     
               <li>${books[i]}</li>
        `;
    }

    html += `
       </ol>
       <h4>End of Shelf</h4>
    `;


    bookList.innerHTML = html;
    console.log(books);
    }

};

displayBooks();