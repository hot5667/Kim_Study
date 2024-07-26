const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2[0] = 10;
console.log(arr1);              /*
                                    [10,2,3] 이유 arr2 = arr1 은 arr1의 배열을 참조 하고있습니다. 
                                    and arr2를 수정하면 arr1도 함께 수정되기에 [10,2,3] 으로 출력됩나다 
                                */
console.log(arr1 === arr2);     /* arr1 과 arr2는 같은 배열을 참고 하고있기에 결과값은 true 입니다. */




const obj1 = {a: 1, b: 2, c: 3};
const obj2 = {...obj1}

obj2.d = 4;

console.log(obj1);
console.log(obj2);

/*

    obj2 = {...obj1} 는 obj1을 얇은 복사 하여 obj2를 만들게 됩니다. 
    이렇게 사용되면 obj1 obj2 는 동일한 속성을 가지게 됩니다.

    obj2.d = 4;는 obj2에 d 속성을 추가하고 값을 4로 설정하게 됩니다.
    따라서 obj1은 번경되지 않고 원래 상태를 유지하게 됩니다.

    obj2 는 d속을 가지고 있으므로, {a: 1, b: 2, c: 3, d: 4} 이 출력됩니다.

*/