// 14. // Expressions, Operators, and Control Structures / Arrays / Arrays Functions Instruction: 

// - Given an array of objects, use destructuring to extract and display all properties from each object.

// Initiate code:

// // XXXXX is your code

// const users = [ { id: 1, name: 'John', age: 28 },

// { id: 2, name: 'Jane', age: 32 },

// { id: 3, name: 'Dave', age: 24 }

// ]; users.forEach(XXXXX);

const users = [
    { id: 1, name: 'John', age: 28 },
    { id: 2, name: 'Jane', age: 32 },
    { id: 3, name: 'Dave', age: 24 }
];

// ใช้ forEach เพื่อวนรอบทุกอ็อบเจ็กต์ในอาร์เรย์
users.forEach(user => {
    // ใช้ destructuring เพื่อดึงข้อมูลทั้งหมดจากแต่ละอ็อบเจ็กต์
    const { id, name, age } = user;

    // แสดงผลข้อมูล
    console.log(`User ID: ${id}, Name: ${name}, Age: ${age}`);
});


