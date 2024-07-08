let myLibrary = [];

function Book(title, author, pages, read) {
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.read=read;
}

let newBookButton = document.querySelector("#newBookButton");
newBookButton.addEventListener("click", function(){
  let newBookForm = document.querySelector("#newBookForm");
  newBookForm.style.display= "block";
});

function addBookToLibrary() {

  let title =document.querySelector("#title").value;
  let author =document.getElementById("author").value;
  let pages =document.getElementById("pages").value;
  let read =document.getElementById("read").checked;

  let newBook = new Book(title, author, pages ,read);
  myLibrary.push(newBook);
  render();
}

document.querySelector("#newBookForm").addEventListener("submit", function(event){
  event.preventDefault();
  addBookToLibrary();
});

function render(){
  let libraryElement =document.querySelector("#library");
  libraryElement.innerHTML="";
  for(let i=0; i<myLibrary.length; i++){
    let book =myLibrary[i];
    let bookElement =document.createElement("div");
    bookElement.setAttribute("class","bookCard");
    bookElement.innerHTML=`
    <div class="cardHeader">
    <h3 class="title">${book.title}</h3>
    <h5 class="author">by ${book.author}</h5>
    </div>
    <div class="cardBody">
    <p>${book.pages} pages </p>
    <p class="readStatus"> ${book.read ? "Read" : "Not Read"} </p>
    <button class="removeBookButton" onclick="removeBook(${i})"> Remove Book </button>
    <button class="toggleReadButton" onclick="toggleRead(${i})">Toggle read </button>
    </div>
    `;
    libraryElement.appendChild(bookElement);
  }
}

function removeBook(index){
  myLibrary.splice(index,1);
  render();
} 

Book.prototype.toggleRead= function(){
  this.read =!this.read;
}

function toggleRead(index){
  myLibrary[index].toggleRead();
  render();
}