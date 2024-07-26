1.
//배열 API map 활용
var arr = [10, 20, 30]
var newArr = arr.map(x => x * 10);
console.log(newArr);

2.
//배열 API filter 활용
var arr = [10, 22, 33]
var result = arr.filter(x => x % 5 === 0);
console.log(result);
 
3.
const numbers = [5, 10, 15, 20, 25];
const greaterThan15 = numbers.filter(x => x > 15);
console.log(greaterThan15);

4.
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
var result = arr.filter(x => x.length >= 4);
console.log(result);
 
 
5.
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
var result = arr.filter(x => x.length >= 4);
console.log(result);

6.
var arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
arr.sort((a, b) => a - b);
console.log(result);

7.
var student =[
      {name:"이재상", age: 25 },
      {name:"정윤오", age: 30 },
      {name:"김준현", age: 12312}
];
student.sort((a, b) => b.age - a.age);
console.log(student);


8.
var student =[
      {id : 1, name:"이재상"},
      {id : 2, name:null},
      {id : 3, name:"김준현"}
];
var hasNullName = student.some(s => s.name === null);
console.log(hasNullName);


9.
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
var hasLongString = arr.some(x => x.length > 5);
console.log(hasLongString);

10.
var arr = ["banana", "kiwi", "mango"];
arr.splice(2, 0, "newElement");
console.log(arr);

11.
var arr = [1, 5, -3, 10, 0, 8];
var hasNegative = arr.some(x => x < 0);
console.log(hasNegative);

12.
var arr = [1, 5, -3, 10, 0, 8];
var allNegative = arr.every(x => x < 0);
console.log(allNegative); 
