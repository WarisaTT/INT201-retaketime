// 17. // Expressions, Operators, and Control Structures / Arrays / Arrays Functions / Functions

// Instruction:

// - Create a function calculateGrade(scores) that takes an array of numerical scores 
// and returns the corresponding letter grade (A, B, C, D, or F) based on the average score.

// 17.1 Calculate the average score.

// 17.2 Based on the average score, determine the letter grade:

// ¥ 90-100: A 

// ¥ 80-89: B 

// ¥ 70-79: C 

// ¥ 60-69: D 

// ¥ Below 60: F Return the letter grade. 

// Initiate code:

// function calculateGrade(scores) {

// // Insert your code here } 

// console.log(calculateGrade([80, 95, 90, 70, 100])); 

// output 

// B

function calculateGrade(scores) {
    // 17.1 คำนวณคะแนนเฉลี่ย
    const averageScore = calculateAverage(scores);

    // 17.2 กำหนดเกรดตามคะแนนเฉลี่ย
    if (averageScore >= 90 && averageScore <= 100) {
        return 'A';
    } else if (averageScore >= 80 && averageScore <= 89) {
        return 'B';
    } else if (averageScore >= 70 && averageScore <= 79) {
        return 'C';
    } else if (averageScore >= 60 && averageScore <= 69) {
        return 'D';
    } else {
        return 'F';
    }
}

// ฟังก์ชันสำหรับคำนวณคะแนนเฉลี่ย
function calculateAverage(scores) {
    const sum = scores.reduce((total, score) => total + score, 0);
    return sum / scores.length;
}

// เรียกใช้ calculateGrade และแสดงผลลัพธ์
console.log(calculateGrade([80, 95, 90, 70, 100]))
