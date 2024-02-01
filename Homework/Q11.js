// 11. // Types, Values, and Variables Instruction: 

// - No coding, What is the result of the code below, and why is it displayed?

// Initiate code:

// // XXXXX : What is you think about result

let arr = [1, 2, 3]; 
console.log(arr)

arr.push(4); // [ 1, 2, 3, 4 ]
console.log(arr)

arr = [1, 2, 3, 4]; // [ 1, 2, 3, 4 ]
console.log(arr)

let obj = { name: 'Alice' }; 
console.log(obj) // { name: 'Alice' }

obj.age = 30; // { name: 'Alice', age: 30 }
console.log(obj)

obj = { name: 'Alice', age: 30 }; // { name: 'Alice', age: 30 }
console.log(obj)


// arr Array:

// const arr = [1, 2, 3]; ประกาศตัวแปร arr และกำหนดค่าเริ่มต้นเป็นอาร์เรย์ [1, 2, 3].
// arr.push(4); เป็นการเพิ่มค่า 4 เข้าไปที่ท้ายของอาร์เรย์ arr โดยใช้ push ได้ถูกต้อง.
// arr = [1, 2, 3, 4]; นี้จะทำให้เกิด error เนื่องจาก arr ถูกประกาศด้วย const และไม่สามารถกำหนดค่าใหม่ได้.
// obj Object:

// const obj = { name: 'Alice' }; ประกาศตัวแปร obj และกำหนดค่าเริ่มต้นเป็นออบเจ็กต์ { name: 'Alice' }.
// obj.age = 30; เป็นการเพิ่ม property age ในออบเจ็กต์ obj ได้ถูกต้อง.
// obj = { name: 'Alice', age: 30 }; นี้จะทำให้เกิด error เช่นเดียวกับตัวแปร arr เนื่องจาก obj ถูกประกาศด้วย const และไม่สามารถกำหนดค่าใหม่ได้.


// การใช้ const หมายถึงว่าตัวแปรนั้นไม่สามารถถูกกำหนดค่าใหม่ได้หลังจากถูกประกาศ (reassignment) 
// แต่สามารถแก้ไขค่าภายในตัวแปรได้ถ้าตัวแปรนั้นเป็น object หรือ array (mutable types). ในกรณีนี้, 
// arr เป็น mutable (array) และ obj เป็น mutable (object) ดังนั้นการเปลี่ยนแปลงข้อมูลภายในตัวแปรเป็นสิ่งที่ถูกต้อง. 
// แต่หากมีการพยายามที่จะกำหนดค่าใหม่ให้กับ arr หรือ obj จะทำให้เกิด error เนื่องจาก const ไม่อนุญาตให้มีการ 
// reassignment ในกรณีนี้.
