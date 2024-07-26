function sniffling(num) {
    if(num % 2 === 0){
        console.log("짝수");
    }else {
        console.log("홀수");
    }
}

console.log(sniffling(10)); // 결과값 "짝수";
console.log(sniffling(7)); // 결과값 "홀수";