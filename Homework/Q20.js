// 20. // Expressions, Operators, and Control Structures / Arrays / Arrays Functions / Functions Instruction: 

// - Write a JavaScript function sameNumbers(numArray1, numArray2) to receive two arrays of numbers and return an array that contains the numbers from both arrays without repeating numbers.

// Initiate code:
// // Insert your code here console.log(sameNumbers([1,2,3,4,5,2,1,4,1,5,2,5,8],[1,2,5,8,4,1,5,1,47,2,3,56,5,8])); 

// output 
// [ 1, 2, 3, 4,
// 5, 8, 47, 56 ]

function sameNumbers(numArray1, numArray2) {
    // ใช้ Set เพื่อเก็บตัวเลขที่ไม่ซ้ำกัน
    const uniqueNumbers = new Set([...numArray1, ...numArray2]);

    // แปลง Set เป็นอาร์เรย์
    const resultArray = Array.from(uniqueNumbers);

    return resultArray;
}

// เรียกใช้ sameNumbers และแสดงผลลัพธ์
console.log(sameNumbers([1,2,3,4,5,2,1,4,1,5,2,5,8], [1,2,5,8,4,1,5,1,47,2,3,56,5,8]));
// Output: [ 1, 2, 3, 4, 5, 8, 47, 56 ]




