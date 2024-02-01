// 9. // Expressions, Operators, and Control Structures / Objects Instruction: 

// - Compare three objects with name properties (case-insensitive). Initiate code: 

// // XXXXX is your code 

let peopleObj1 = { name: "John", surname: "Doe" }, 

 peopleObj2 = { name: "Sarah", surname: "Wilson" }, 

 peopleObj3 = { name: "David", surname: "Brown" }

if(peopleObj1.name.toLowerCase() === peopleObj2.name.toLowerCase() 
&& peopleObj2.name.toLowerCase() === peopleObj3.name.toLowerCase()){
console.log("These two objects have the same name.");
} else {
    console.log("These two objects have the different name.");
}