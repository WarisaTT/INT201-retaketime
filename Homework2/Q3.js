// 3.

// Instruction:

// - Creating a library system using class Book and Library.

// Class Book: Constructor

// ¥ Constructor(title, author, pages, genre): This initializes the properties 'title', 'author' , ' pages' and 'genre'. 

// Properties

// ¥ title: type string 

// ¥ author: type string 

// ¥ pages: type number 

// ¥ genre: type string Methods 

// ¥ getSummary() - Returns a string summary of the book ex: . 

// "Title: Harry Wick, Author: Conan, Pages: 345, Genre: Sci-Fi" 

// Class Library: Constructor

// ¥ Constructor(name): This initializes the properties 'name' and creates an empty array in the property books 

// Properties

// ¥ name: type string 

// ¥ books: type array of Book objects, initially empty. 

// Methods

// ¥ addBook(newBook) - Accepts a Book object and adds it to the books array. 

// ¥ getBooksByGenre(genre) - Returns an array of books that match the specified genre. 

// ¥ getTotalPagesByGenre(genre) - Returns the total number of pages for all books of a specified genre. 

class Book {
    constructor(title, author, pages, genre) {
        this.title = title || 'no title';
        this.author = author || 'no author';
        this.pages = pages || 0;
        this.genre = genre || 'unknown';
    }

    getSummary() {
        return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Genre: ${this.genre}`;
    }
}

class Library {
    constructor(name) {
        this.name = name || 'Unnamed Library';
        this.books = [];
    }

    addBook(newBook) {
        // 3.1 Accepts a Book object and adds it to the books array.
        this.books.push(newBook);
    }

    getBooksByGenre(genre) {
        // 3.2 Returns an array of books that match the specified genre.
        return this.books.filter(book => book.genre === genre);
    }

    getTotalPagesByGenre(genre) {
        // 3.3 Returns the total number of pages for all books of a specified genre.
        const booksOfGenre = this.getBooksByGenre(genre);
        const totalPages = booksOfGenre.reduce((total, book) => total + book.pages, 0);
        return totalPages;
    }
}

// Example usage:
// Creating an instance of the Library class
const myLibrary = new Library('My Personal Library');

// Creating instances of the Book class
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180, 'Classic');
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 281, 'Fiction');
const book3 = new Book('1984', 'George Orwell', 326, 'Dystopian');

// Adding books to the library
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

// Displaying books in the library
console.log(myLibrary.books);

// Getting books by genre and total pages by genre
console.log(myLibrary.getBooksByGenre('Classic'));
console.log(myLibrary.getTotalPagesByGenre('Fiction'));
