// 10. // Arrays / Arrays Functions / Objects Instruction: 

// - Display all the names of people objects (case-insensitive) 
// that have the same name; return an array of strings with the names that are the same.

// Initiate code:

// // XXXXX is your code 

let people = [
    { name: "John", surname: "Doe" },
    { name: "olivia", surname: "Smith" },
    { name: "john", surname: "Johnson" },
    { name: "Sarah", surname: "Wilson" },
    { name: "David", surname: "Brown" },
    { name: "Emily", surname: "Davis" },
    { name: "David", surname: "Miller" },
    { name: "Olivia", surname: "Taylor" },
    { name: "david", surname: "Anderson" },
    { name: "Sophia", surname: "Clark" }
];

// เริ่มต้นฟังก์ชัน findDuplicateNames ที่รับอาร์เรย์ของอ็อบเจ็กต์ people
function findDuplicateNames(peopleArray) {
    // สร้าง object เพื่อเก็บข้อมูลชื่อที่เคยพบ
    let seenNames = {};

    // สร้างอาร์เรย์เพื่อเก็บชื่อที่ซ้ำกัน
    let result = [];

    // วนลูปผ่านทุก ๆ อ็อบเจ็กต์ใน peopleArray
    peopleArray.forEach(person => {
        // แปลงชื่อเป็นตัวพิมพ์เล็กทั้งหมด
        let lowercaseName = person.name.toLowerCase();

        // ตรวจสอบว่าเคยพบชื่อนี้ไปแล้วหรือยัง
        if (seenNames[lowercaseName]) {
            // ถ้าเคย, เพิ่มชื่อนี้ใน result
            result.push(lowercaseName);
        } else {
            // ถ้าไม่เคย, ลงทะเบียนชื่อนี้เพื่อระบุว่าเคยเห็นไว้แล้ว
            seenNames[lowercaseName] = true;
        }
    });

    // คืนค่าอาร์เรย์ของชื่อที่ซ้ำกัน
    return result;
}

// เรียกใช้ฟังก์ชัน findDuplicateNames และเก็บผลลัพธ์ไว้ในตัวแปร result
let result = findDuplicateNames(people);

// แสดงผลลัพธ์
console.log(result); // Output: ['olivia', 'david']




