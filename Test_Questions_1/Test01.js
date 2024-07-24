let uninitialized;
console.log(uninitialized); // 결과값 < Undefined >
// uninitialized 변수에 데이터가 아무것도 없기 때문에 Undefined 라고 생각합니다.


const apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable
//원시 타입으로 받았기 때문에 상수로 하면 TypeError: Assignment to constant variable 발생 할 것  입니다.

let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 <19>
//배열은 0, 1, 2, 3, 4, 5, 6 으로 시작하기 때문에 4번째 배열인 19가 출력이 될 것 이다.

let mySchedule = "";
console.log(mySchedule || false); // < false >
console.log(!!mySchedule); // < false >
// 첫번째 (mySchedule || false) mySchedule 참이면 참이 반환이 되고 그렇지않으면 false 가 반환이 되기때문에 false 가 반환이 된다.
// 두번째 (!!mySchedule) ! 해당 연산자는 부정 연산자 이지만 !! 두개를 붙으면 부정을 취하게 되어 bool 값으로 반환하게 되는데 해당 문자열의 경우 빈 문자열 이기때문에 false로 나올것이다.