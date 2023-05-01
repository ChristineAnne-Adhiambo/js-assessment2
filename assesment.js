/*
const books = [
{ title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
isAvailable: true },
{ title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
isAvailable: false },
{ title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
1866, isAvailable: true },
{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
isAvailable: false },
{ title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
];


 Write a JavaScript program that performs the following tasks:
1. Create a function called getAvailableBooks that returns an array of all available
books.
2. Create a function getBooksByAuthor that takes an author's name as an argument and
returns an array of all books by that author.
3. Create a function addNewBook that takes a book object as an argument and adds it
to the library, ensuring that the new book has all required properties (title, author,
publicationYear, and isAvailable).
4. Create a function checkoutBook that takes a book title as an argument and changes
the book's isAvailable property to false. If the book is not found in the library, the
function should return a message indicating that the book is not available.
5. Create a function returnBook that takes a book title as an argument and changes the
book's isAvailable property to true. If the book is not found in the library, the function
should return a message indicating that the book does not belong to the library.
 */
const books = [
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
  isAvailable: true },
  { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
  isAvailable: false },
  { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
  1866, isAvailable: true },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
  isAvailable: false },
  { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
  ];

// 1. Create a function called getAvailableBooks that returns an array of all available books.
function getAvailableBooks() {
  return books.filter(book => book.isAvailable);
}

// 2. Create a function getBooksByAuthor that takes an author's name as an argument and returns an array of all books by that author.
function getBooksByAuthor(authorName) {
  return books.filter(book => book.author === authorName);
}

// 3. Create a function addNewBook that takes a book object as an argument and adds it to the library, 
//ensuring that the new book has all required properties (title, author, publicationYear, and isAvailable).
function addNewBook(book) {
  if (!book.title || !book.author || !book.publicationYear) {
    console.log("Error 404: Missing required book properties");
    return;
  }
  book.isAvailable = true;
  books.push(book);
}
// addNewBook ({ title: 'Kaleidoscope', author: 'Daniel Steel', publicationYear: 1951,
// isAvailable: true });

// 4. Create a function checkoutBook that takes a book title as an argument 
// and changes the book's isAvailable property to false. 
// If the book is not found in the library, the function should 
//return a message indicating that the book is not available.
function checkoutBook(bookTitle) {
  const book = books.find(book => book.title === bookTitle);
  if (!book) {
    console.log(`Book "${bookTitle}" not found in library`);
    return;
  }
  book.isAvailable = false;
}
checkoutBook();

// 5. Create a function returnBook that takes a book title as an argument and changes the book's isAvailable property to true. If the book is not found in the library, the function should return a message indicating that the book does not belong to the library.
function returnBook(bookTitle) {
  const book = books.find(book => book.title === bookTitle);
  if (!book) {
    console.log(`Book "${bookTitle}" not found in library`);
    return;
  }
  book.isAvailable = true;
}



console.log(getAvailableBooks()); 
console.log(getBooksByAuthor('Charles Dickens')); 

addNewBook ({ title: 'Kaleidoscope', author: 'Daniel Steel', publicationYear: 1951,
 isAvailable: true });
console.log(getAvailableBooks()); 
checkoutBook('The Great Gatsby');
console.log(books); 
returnBook('The Great Gatsby');
console.log(books); 
