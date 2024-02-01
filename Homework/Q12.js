// 12.// Functions / Arrays / Arrays Functions Instruction: 

// - Write a function uniqueElements(arrayValue) to return array of the unique elements from an array.

// Initiate code:

// let numbers = [1, 1, 3, 8, 21, 8, 13, 3, 8, 7];

// // Insert your code here // array numbers after use function uniqueElements will be [1, 3, 8, 21, 13, 7]

let numbers = [1, 1, 3, 8, 21, 8, 13, 3, 8, 7];

function uniqueElements(arrayValue) {
    // ใช้ Set เพื่อสร้างเซ็ตของค่าที่ไม่ซ้ำ
    let uniqueSet = new Set(arrayValue);

    // แปลง Set กลับเป็นอาร์เรย์
    let uniqueArray = Array.from(uniqueSet);

    return uniqueArray;
}

// เรียกใช้ฟังก์ชัน uniqueElements
let uniqueNumbers = uniqueElements(numbers);

// แสดงผลลัพธ์
console.log(uniqueNumbers);
// Output: [1, 3, 8, 21, 13, 7]
