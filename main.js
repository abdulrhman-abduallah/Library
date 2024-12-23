const myLibrary = [];
/*
function Book(title,author,pages,read) {
   this.title=title;
   this.author=author;
   this.pages=pages;
   this.read=read;

}
   */
class Book{
    constructor(title,author,pages,read) {
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.read=read;
}
}


function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;

    let newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    render();
}


let newBookbtn = document.getElementById('new-book-btn');

newBookbtn.addEventListener('click',function(){
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "block";
    newBookForm.reset();
});

document.querySelector("#new-book-form").addEventListener("submit",function(event){
    event.preventDefault();
    addBookToLibrary();

});

function removeBook(index){
    myLibrary.splice(index,1);
    render();
}


function render(){
    let libraryEl = document.querySelector("#library");
    libraryEl.innerHTML = "";
    for(let i = 0;i<myLibrary.length;i++){
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.innerHTML = `
        <div class="card-header">
        <h3>${book.title}</h3>
        <h5>${book.author}</h5>
        <p>${book.read ? "Read" : "Not read yet"}</p>
        <button id=${i} onclick="removeBook(${i})">remove record</button>
        </div>
        `;
        libraryEl.appendChild(bookEl);

    }

}


