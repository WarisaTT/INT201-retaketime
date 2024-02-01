// 15. // Expressions, Operators, and Control Structures / Arrays Instruction: 

// - Destructure the first two elements and the last element of an array into new variables. Initiate code: 

// const numbers = [1, 2, 3, 4, 5];

// // Insert your code here

const numbers = [1, 2, 3, 4, 5];

// Destructure the first two elements and the last element into new variables
const [firstElement, secondElement, ...restElements] = numbers;

// แสดงผลลัพธ์
console.log(`First Element: ${firstElement}`);
console.log(`Second Element: ${secondElement}`);
console.log(`Rest of the Elements: ${restElements}`);
