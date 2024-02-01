// 2.

// Instruction:

// - Create an object Book reference ‘practice 1’. Use a constructor Constructor(title, author, yearPublished. Additionally, use a 'getInfo()' method.

// Initiate code:

// // Insert your code here

class Book {
    constructor(title, author, yearPublished) {
        this.title = title || 'no title';
        this.author = author || 'no author';
        this.yearPublished = yearPublished || 0;
    }

    getInfo() {
        return `${this.title} by ${this.author}, published in ${this.yearPublished}`;
    }
}

// 2.1 Creating an object 'practice1'
const practice1 = new Book('JavaScript: The Good Parts', 'Douglas Crockford', 2008);

// 2.2 Using the getInfo method to get information about the book
console.log(practice1.getInfo());
// Output: JavaScript: The Good Parts by Douglas Crockford, published in 2008
