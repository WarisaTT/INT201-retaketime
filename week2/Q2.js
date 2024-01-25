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

console.log(isPalindrome(words))
console.log(isPalindrome(words2))

//วิธีแบบปกติ
