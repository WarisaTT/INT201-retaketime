// 16. // Expressions, Operators, and Control Structures Instruction: 

// - Create a function named multiplicationTable(number) that generates a multiplication table 
// based on the provided number. The function should return the results as an array of strings.

// Initiate code:

// multiplicationTable(number){ // Insert your code here

// } console.log(multiplicationTable(2)); 

// output 

// [ "2 x 1 = 2",

// "2 x 2 = 4", "2 x 3 = 6", 

// "2 x 4 = 8", 

// "2 x 5 = 10", 

// "2 x 6 = 12", 

// "2 x 7 = 14", 

// "2 x 8 = 16", 

// "2 x 9 = 18", 

// "2 x 10 = 20", 

// "2 x 11 = 22", 

// "2 x 12 = 24", 

// ]

function multiplicationTable(number) {
    // สร้างอาร์เรย์เพื่อเก็บผลลัพธ์
    let table = [];

    // ใช้ลูป for เพื่อวนรอบและสร้างรายการทุกบรรทัดในตารางคูณ
    for (let i = 1; i <= 12; i++) {
        // คำนวณผลลัพธ์และเพิ่มลงในอาร์เรย์
        let result = number * i;
        table.push(`${number} x ${i} = ${result}`);
    }

    return table;
}

// เรียกใช้ฟังก์ชัน multiplicationTable และแสดงผลลัพธ์
console.log(multiplicationTable(2));
