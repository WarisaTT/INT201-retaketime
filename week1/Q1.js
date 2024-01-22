//create a program that performs the following operations on an array of integer

//1.หาผลรวมทั้งหมดใน Array

function sumArray(array){
  if(array.length === 0){
    return 0;
  } else{
    const sum = array.reduce((total, currentValue) => total + currentValue)
    return sum;
  }
}
const intArray = [1,2,3,4,5]
const sum = sumArray(intArray)

console.log(sum)
//2.หา average
console.log(sum/intArray.length)
//3. หา ค่ามากสุด และ น้อยสุด
console.log(Math.max(...intArray),Math.min(...intArray))


// //////////แสดงทุก elements ใน array
// const nums=[1,2,3,4,5]
// //for
// console.log('for')
// for(let i=0;i<nums.length;i++){
//     console.log(nums[i])
// }
// //forEach
// console.log('forEach')
// nums.forEach(element => {
//     console.log(element)
// });
// //for...of
// console.log('for...of')
// for (const element of nums) {
//     console.log(element)
// }