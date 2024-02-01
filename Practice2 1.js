1.
// Instruction: - Write class Book.Then, add a method to the object that outputs information about the book.
// Class Book
// Constructor
// • Constructor(title, author, yearPublished): This initializes the properties
// 'title', 'author', and 'yearPublished'.If they are empty, it assigns 'no title', 'no
// author', and 0 respectively.
// Properties
// • title: type String
// • author: type String
// • yearPublished: type number
// Methods
// • getInfo(): This method return a string that combines the book's title, author, and year of publication.
// Initiate code:
// // Creating class Book

class Book {

    constructor(title, author, yearPublished) {
        this.title = title || 'no title'
        this.author = author || 'no author'
        this.yearPublished = yearPublished || 0
    }

    getInfo() {
        return { 'title': this.title, 'anthor': this.author, 'yearPublished': this.yearPublished }
    }
}

console.log('');

2.
// Instruction:
// - Create an object Book reference ‘practice 1’. Use a constructor Constructor(title,
//     author, yearPublished.Additionally, use a 'getInfo()' method.
// Initiate code:
const Book1 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1954)
console.log(Book1.getInfo());

const Book2 = new Book('', '')
console.log(Book2.getInfo());

console.log('----------------------');
console.log('');


3.
// Instruction:
//     - Creating a library system using class Book and Library.
// Class Book:
//     Constructor
// • Constructor(title, author, pages, genre): This initializes the properties 'title',
//     'author', ' pages' and 'genre'.
//     Properties
// • title: type string
// • author: type string
// • pages: type number
// • genre: type string
// Methods
// • getSummary() - Returns a string summary of the book ex: .
//     "Title: Harry Wick, Author: Conan, Pages: 345, Genre: Sci-Fi"
// Class Library:
//     Constructor
// • Constructor(name): This initializes the properties 'name' and creates an
// empty array in the property books
// Properties
// • name: type string
// • books: type array of Book objects, initially empty.
//     Methods
// • addBook(newBook) - Accepts a Book object and adds it to the books array.
// • getBooksByGenre(genre) - Returns an array of books that match the
// specified genre.
// • getTotalPagesByGenre(genre) - Returns the total number of pages for all
// books of a specified genre.

class Book {
    constructor(title, author, pages, genre) {
        this.title = title
        this.author = author
        this.pages = pages
        this.genre = genre
    }

    getSummary() {
        return `"Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Genre: ${this.genre}"`
    }
}

class Library {
    constructor(name) {
        this.name = name
        this.books = []
    }

    addBook(newBook) {
        this.books.push(newBook)
    }

    getBooksByGenre(genre) {
        return this.books.filter(book => book.genre === genre)
    }
    getTotalPagesByGenre(genre) {
        return this.books.filter(book => book.genre === genre).reduce((totalPages, book) => totalPages + book.pages, 0)
    }
}
// console.log('----------------------');
// console.log('');


4
// Instruction:
// - Create a 'Book' object and a 'Library' object for 'Practice 3'.Use a constructor and
// methods in both classes.
// Initiate code:

const Book3 = new Book('Harry Wick', 'Conan', 345, 'Sci-Fi')
console.log(Book3.getSummary());
console.log('');
const Book4 = new Book('Harry Potter', 'J.K. Rowling', 300, 'Fantasy')
console.log(Book4.getSummary());
console.log('');
const Book5 = new Book('The Hitchhikers Guide to the Galaxy', 'Douglas Adams', 200, 'Sci-Fi')
console.log(Book5.getSummary());
console.log('');
const Book6 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 400, 'Fantasy')
console.log(Book6.getSummary());
console.log('');

const library = new Library('My Library')
library.addBook(Book3)
library.addBook(Book4)
library.addBook(Book5)
library.addBook(Book6)

console.log(library);
console.log('');

const SciFiBook = library.getBooksByGenre('Sci-Fi')
console.log(SciFiBook)
console.log(SciFiBook);
console.log('');
const totalPagesSciFiBook = library.getTotalPagesByGenre('Sci-Fi')
console.log('Total Pages Sci-Fi : ', totalPagesSciFiBook);
console.log('');


const FantasyBook = library.getBooksByGenre('Fantasy')
console.log(FantasyBook);
// console.log('');
const totalPagesFantasyBook = library.getTotalPagesByGenre('Fantasy')
// console.log('Total Pages Fantasy : ', totalPagesFantasyBook);
// console.log('');


console.log('----------------------');
console.log('');

5.
// Instruction:
// - Create class Elevator with the following specifications:
// Class Elevator:
// Constructor
// • Constructor(maxFloor, minFloor): This initializes the properties
// 'maxFloor', 'minFloor' and set 'currentFloor' to 0
// Properties
// • currentFloor: The floor where the elevator currently is. , type number
// • maxFloor: The highest floor the elevator can go to. , type number
// • minFloor: The lowest floor the elevator can go to, type number
// Methods
// • goUp(): Increases currentFloor by 1, but not above maxFloor.
// • goDown(): Decreases currentFloor by 1, but not below minFloor.
// • goToFloor(floor): Takes a floor number and sets currentFloor to that
// floor if it's within range.
// • displayFloor(): Prints the current floor to the console.

class Elevator {
    constructor(maxFloor, minFloor) {
        this.maxFloor = maxFloor
        this.minFloor = minFloor
        this.currentFloor = 0
    }

    goUp() {
        if (this.currentFloor < this.maxFloor) {
            return this.currentFloor += 1
        }
    }
    goDown() {
        if (this.currentFloor > this.minFloor) {
            return this.currentFloor -= 1
        }
    }
    goToFloor(floor) {
        if (floor >= this.minFloor && floor <= this.maxFloor) {
            return this.currentFloor = floor
        }
    }
    displayFloor() {
        console.log(`Current Floor : ${this.currentFloor}`);
    }
}

6
// Instruction:
// - Create a 'Elevator' object for 'Practice 5'.Use a constructor and methods in class.
// Initiate code:

const elevator = new Elevator(10, 1)
elevator.goUp()
console.log(elevator);
elevator.goUp()
console.log(elevator);
elevator.goToFloor(5)
console.log(elevator);
elevator.goDown()
console.log(elevator);
elevator.displayFloor()
console.log(elevator);

