// Define an object representing a book with properties like isbn, title, author,and number of pages. 
// Write a function that takes two book objects as parameters and merges them into a new object,
// preserving unique properties from both books.Replacing value when properties duplicated.

//กำหนดตัวแปร obj ของหนังสือเล่มแรก
const book = {
    isbn: '1-23-4',
    title: 'JS',
    author: 'US',
    pages: 300
}

//กำหนดตัวแปร obj ของหนังสือเล่มที่สอง
const book2 = {
    isbn: '5-67-8',
    title: 'JAVA'
}

//ฟังก์ชันของการรวมทั้งสอง obj โดยใช้ spread
function mergesBook(book,book2){
    const mergesBook = {...book,...book2}
    return mergesBook
}

//แสดงฟังก์ชัน mergesBook ออกมาดู
console.log(mergesBook(book,book2))




