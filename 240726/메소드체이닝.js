const students = [
  { name: "이재상", scores: [80, 90] },
  { name: "김준현", scores: [90, 95] },
  { name: "정윤오", scores: [75, 70] },
];

const result1 = students
  .filter(student => {
    const average = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
    return average >= 80;
  })
  .map(student => student.name);

console.log(result1); 


const numbers = [5, 10, 15, 20, 25];
const result2 = numbers
  .map(number => number * 2)
  .filter(number => number <= 30);

console.log(result2); 