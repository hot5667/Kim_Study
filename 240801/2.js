//1. 출력값과 출력되는 값의 이유를 설명해주세요

var name = "yuno";

function myName(){
    var name = "yuno2";
    function a(){
        console.log(name);
    }
    return a();
}

myName();

/*
myName 함수 내에서 var name = "yuno2";가 선언되고, a 함수는 myName 함수의 스코프를 참조합니다. 
a 함수가 호출될 때, name 변수는 myName 함수 내의 yuno2를 참조하므로 yuno2가 출력됩니다.
a 함수는 myName 함수 내에서 즉시 호출됩니다.
 */

function test() {
    var x = 1;

    if(true){
        var x = 2; 
    }

    console.log(x);
}

test();

/*
var로 선언된 변수는 함수 전체에서 동일하게 취급되므로,
if 블록 내에서 재할당된 x는 함수 전체에 영향을 미칩니다.
test 함수의 x는 2로 변경되므로,
console.log(x);는 2를 출력합니다.
*/


const nameObj  = {
    name: "yuno",
    method: function() {
        const arrow = () => {
            console.log(`화살표 함수 : ${this.name}`);
        };
        function normal() {
            console.log(`일반 함수 : ${this.name}`);
        }
        arrow();
        normal();
    }
};

nameObj.method();