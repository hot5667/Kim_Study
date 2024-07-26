let arr1 = [10, 20, 30];
let result1 = []; 

arr1.forEach(item => {
    result1.push(item * 10);
});

console.log(result1); 


let arr2 = [10, 22, 33];
let result2 = []; 

arr2.forEach(item => {
    if (item % 5 === 0) { 
        result2.push(item); 
    }
});

console.log(result2); 

