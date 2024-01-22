//Write a program that swaps the values of two variables without using a temporary variable.
// The program should take two input values, swap their contents,and then print the update values.


// function swapValues(a, b) {
//     // a = a + b
//     // b = a - b
//     // a = a - b
    
//     b = [a, b];
//     a = b[1];
//     b = b[0];

//     console.log("After")
//     console.log("a:", a)
//     console.log("b:", b)
//    }
//    const inputA = 7
//    const inputB = 8
//    console.log("Before")
//    console.log("a:", inputA)
//    console.log("b:", inputB)
//    swapValues(inputA, inputB)




// //สลับค่า แบบไม่ใช้ new temporary
// function swapValues(a,b){
//     return [b,a]
// }

//swap.js (destructuring)
//Practice-02 Write a program that swaps the values of two variables without using a temporary variable. The program should take two input values, swap their contents, and then print the updated values.
function swap(a, b){
    return [b,a]
 }
 console.log(swap(1,2))
 const nums=[1,3,4,6]
 //destructuring on array
 const [y]=nums
 console.log(y)
 const std={id:1234, name:'Somchai'}
 //destructureing on object
 const {id, name}=std
 console.log(id)
 console.log(name)
 const value=5
 const [m,n]=[1,2] //destructuring on array
 console.log(m) //m=1
 console.log(n)//n=2

 //swap-v2 (destructuring)
 function swap(a, b){
    return [b,a]
 }
 const [a,b]=swap(1,2)
 console.log(a)
 console.log(b)




