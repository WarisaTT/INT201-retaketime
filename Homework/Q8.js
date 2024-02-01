// 8. // Expressions, Operators, and Control Structures

// Instruction: - No coding, What is the result of the code below, and why is it displayed?

// Initiate code:

// // XXXXX : What is you think about result
if (1) {
  console.log(1) // 1
}

if ([]) {
  console.log([]) // []
}

if ('') {
  console.log('') // ไม่แสดง
}

if (null) {
  console.log(null) // ไม่แสดง
}

if (undefined) {
  console.log(undefined) // ไม่แสดง
}


// if(1):
// เงื่อนไขนี้จะเป็นเงื่อนไขที่เป็นจริง เนื่องจาก 1 ถือเป็น truthy value.
// ดังนั้น, บรรทัด console.log(1); จะถูกทำงาน.
// ผลลัพธ์ที่คาดหวัง: 1 จะถูกแสดงในคอนโซล.

// if([]):
// เงื่อนไขนี้จะเป็นเงื่อนไขที่เป็นจริง เนื่องจาก array [] ถือเป็น truthy value.
// ดังนั้น, บรรทัด console.log([]); จะถูกทำงาน.
// ผลลัพธ์ที่คาดหวัง: [] (array) จะถูกแสดงในคอนโซล.

// if(""):
// เงื่อนไขนี้จะเป็นเงื่อนไขที่เป็นเท็จ เนื่องจาก string ว่าง "" ถือเป็น falsy value.
// ดังนั้น, บรรทัด console.log(""); จะไม่ถูกทำงาน.
// ไม่มีผลลัพธ์ที่คาดหวังจะแสดงในคอนโซล.

// if(null):
// เงื่อนไขนี้จะเป็นเงื่อนไขที่เป็นเท็จ เนื่องจาก null ถือเป็น falsy value.
// ดังนั้น, บรรทัด console.log(null); จะไม่ถูกทำงาน.
// ไม่มีผลลัพธ์ที่คาดหวังจะแสดงในคอนโซล.

// if(undefined):
// เงื่อนไขนี้จะเป็นเงื่อนไขที่เป็นเท็จ เนื่องจาก undefined ถือเป็น falsy value.
// ดังนั้น, บรรทัด console.log(undefined); จะไม่ถูกทำงาน.
// ไม่มีผลลัพธ์ที่คาดหวังจะแสดงในคอนโซล