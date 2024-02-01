// 13. // Functions / Arrays / Arrays Functions Instruction: 

// - Write a function reverseArray(arrayValue) to reverse an array.

// Initiate code:

// let numbers = [1, 1, 3, 8, 21, 8, 13, 3, 8, 7];

// // Insert your code here // return value will be [7, 8, 3, 13, 8, 21, 8, 3, 1, 1]

function reverseArray(arrayValue) {
    // สร้างอาร์เรย์ว่างเพื่อเก็บค่าที่ถูกกลับ
    let reversedArray = [];

    // ใช้ลูป for เพื่อวนรอบและสลับค่าของอาร์เรย์
    for (let i = arrayValue.length - 1; i >= 0; i--) {
        reversedArray.push(arrayValue[i]);
    }

    return reversedArray;
}

let numbers = [1, 1, 3, 8, 21, 8, 13, 3, 8, 7];

// เรียกใช้ฟังก์ชัน reverseArray
let reversedNumbers = reverseArray(numbers);

// แสดงผลลัพธ์
console.log(reversedNumbers);
// Output: [7, 8, 3, 13, 8, 21, 8, 3, 1, 1]




