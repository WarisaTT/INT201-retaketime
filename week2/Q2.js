// - Write a function that determine if a given is a palindrome.
// - Palindromes words, phrases, or sequences of characters that read the same forword as backword. 
// For example : [radar,level,civic,deed,noon,kayak]


//วิธีที่ใช้ split,join and reverse
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

const words = 'radar'
const words2 = 'hello'

console.log('Solution 1')
console.log(isPalindrome(words))
console.log(isPalindrome(words2))

//วิธีแบบปกติ
function isPalindrome2(word){ //แปลง string เป็น array ด้วย spread Operator
    const chars = [...word]
    console.log(chars)
    for(let i=0, j=chars.length-1;j>=i;i++,j--){//ถ้า i,jไขว้กันแล้วไม่ต้อง checkต่อ
        if(chars[i]!==chars[j]) return false
    } 
    return true
}
console.log('Solution 2')
console.log(isPalindrome('apple'))
console.log(isPalindrome('level'))