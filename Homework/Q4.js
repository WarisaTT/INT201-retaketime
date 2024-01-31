// 4. // Types, Values, and Variables/ Arrays Instruction: 

// - Check if arrays are empty.

// Initiate code:

// let value1 = [1, 2, 3]; let value2 = []; 

// let value3;

// // XXXXX is the code to check each variable 

// console.log(XXXXX); // value1 false 

// console.log(XXXXX); // value2 true 

// console.log(XXXXX); // value3 false

let value1 = [1, 2, 3]; 
let value2 = []; 
let value3;

function isEmpty(arr){
    if (arr === undefined || arr === null){
        console.log('false')
    }
    else if (arr.length === 0){
        console.log('true')
    }else{
        console.log('false')
    }
}

console.log(isEmpty(value1)); // value1 false 

console.log(isEmpty(value2)); // value2 true 

console.log(isEmpty(value3)); // value3 false


// ????? ทำไมถึงขึ้นว่า undefined