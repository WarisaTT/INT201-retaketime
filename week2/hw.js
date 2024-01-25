//find max-min in array
const nums = [-1, 0, 5, 10, 49]
let max = nums[0]
let min = nums[0]
// nums.forEach((num) => {
//   // console.log(num)
//   if (min > num) min = num
//   if (num > max) max = num
// })

function findMin(nums) {
    let nums = 
  nums.forEach((nums) => {
    if (min > num) {
        min = num
    } return nums
    }
  )
}

function findMax(nums) {
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > max) {
        max = nums[i]
      }
      return max
    }
  }


// console.log(max, min)
console.log(findMin(nums))
console.log(findMax(nums))
