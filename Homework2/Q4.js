// 4 Instruction: 

// - Create a 'Book' object and a 'Library' object for 'Practice 3'. Use a constructor and methods in both classes.

// Initiate code:

// // Insert your code here

// 4.1 Creating an instance of the Book class
const myBook = new Book('JavaScript: The Good Parts', 'Douglas Crockford', 200, 'Programming');

// 4.2 Creating an instance of the Library class
const myLibrary = new Library('My Coding Library');

// 4.3 Adding the book to the library
myLibrary.addBook(myBook);

// 4.4 Displaying books in the library
console.log(myLibrary.books);

// 4.5 Getting books by genre and total pages by genre
console.log(myLibrary.getBooksByGenre('Programming'));
console.log(myLibrary.getTotalPagesByGenre('Programming'));
