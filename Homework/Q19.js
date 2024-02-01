// 19. // Expressions, Operators, and Control Structures / Arrays / Arrays Functions / Functions Instruction: 

// - Write a JavaScript function, sumPositiveNumbers(numbers), that calculates the sum of all positive numbers in an array. The function should return the sum of positive numbers. If the array is empty or contains no positive numbers, the function should

// return 0.

// Initiate code:

// // Insert your code here console.log(sumPositiveNumbers([1, -4, 12, 0, -3, 29, -150])); console.log(sumPositiveNumbers([-1, -2, -3])); console.log(sumPositiveNumbers([])); 

// output 

// 42 0



// 0


function sumPositiveNumbers(numbers) {
    // ใช้ reduce เพื่อคำนวณผลรวมของจำนวนเต็มบวก
    const sum = numbers.reduce((accumulator, currentNumber) => {
        // เพิ่มเฉพาะจำนวนเต็มบวก
        if (currentNumber > 0) {
            return accumulator + currentNumber;
        } else {
            return accumulator;
        }
    }, 0);

    return sum;
}

// เรียกใช้ sumPositiveNumbers และแสดงผลลัพธ์
console.log(sumPositiveNumbers([1, -4, 12, 0, -3, 29, -150])); // Output: 42
console.log(sumPositiveNumbers([-1, -2, -3])); // Output: 0
console.log(sumPositiveNumbers([])); // Output: 0





