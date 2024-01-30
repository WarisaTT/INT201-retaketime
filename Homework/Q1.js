// 1. Types, Values, and Variables/ Functions Instruction: 

// - Write function findMin(arr) : Find min number in an array : Return min number Initiate code: 

// let numbers = [34, 1, 58, 8, 21, 5, 13, 3, 89, 7]; console.log(findMin(arr));// 1 

// // Insert your code here
function findMin(arr){
    let min = arr[0] //ตั้งไว้ว่าให้ min คือค่าเริ่มต้น array ตัวที่มี array ตำแหน่งที่ 0
    arr.forEach((num) => { //ใช้forEach เพื่อเข้าไปใช้งานในแต่ละ element ใน array
        if(min>num){ //เริ่มจาก array min=Index0 โดยกำหนดเงื่อนไขคือ ถ้าค่า min มี ค่ามากกว่า แต่ละตัวใน array
        min=num //ค่า Min จะเท่ากับ num 
    }})
    return min //ให้แสดงค่าตัวที่น้อยที่สุด
}

let numbers = [34, 1, 58, 8, 21, 5, 13, 3, 89, 7]; 
console.log(findMin(numbers));