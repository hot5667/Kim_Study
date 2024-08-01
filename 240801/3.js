
//1. <빈칸>을 작성해주세요
const obj1 = {
  value :20,
  getValue(){
    return this.value;
  }
  
}
console.log(obj1.getValue()) ; //  출력값 20


const obj2 ={
    method : function(){
        console.log('첫번째 this : ',this);

        const innerMethod = () =>{
            setTimeout(function(){
                console.log('두번째 this : ' , this); 
            });
        }
        innerMethod();
    }
}

obj2.method();

/*
일반 함수(setTimeout의 콜백 함수)는 호출될 때의 this를 가지며, 
브라우저에서는 전역 객체(window)를 참조합니다.
화살표 함수는 상위 스코프의 this를 상속받지만, 
setTimeout 내의 일반 함수는 자신의 this를 가집니다.
*/