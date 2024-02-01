// 1.

// Instruction:

// - Write class Book. Then, add a method to the object that outputs information about the book.

// Class Book Constructor

// ¥	Constructor(title, author, yearPublished): This initializes the properties 'title', 'author', and 'yearPublished'. If they are empty, it assigns 'no title', 'no author', and 0 respectively. 

// Properties

// ¥	title: type String 

// ¥	author: type String ¥	yearPublished: type number 

// Methods

// ¥ getInfo(): This method return a string that combines the book's title, author, and year of publication. 

// Initiate code:

// // Creating class Book // Insert your code here

class Book {
    constructor(title, author, yearPublished) {
        // 1.1 Initialize properties 'title', 'author', and 'yearPublished'
        // If they are empty, assign 'no title', 'no author', and 0 respectively.
        this.title = title || 'no title';
        this.author = author || 'no author';
        this.yearPublished = yearPublished || 0;
    }

    // 1.2 Method to get information about the book
    getInfo() {
        return `${this.title} by ${this.author}, published in ${this.yearPublished}`;
    }
}

// Example usage:
// Creating an instance of the Book class
const myBook = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);

// Calling the getInfo method to get information about the book
console.log(myBook.getInfo()); // Output: The Great Gatsby by F. Scott Fitzgerald, published in 1925


