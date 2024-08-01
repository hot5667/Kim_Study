//.1
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    info(){
        console.log(`저의 이름은 ${this.name} 나이는 ${this.age} 입니다.`);
    }
}
//.2
 const jung = new Person('yuno', 20);
 jung.info();
//.3
 class Student extends Person {
    constructor(name, age, study) {
        super(name, age);
        this.study = study;
    }
}
//.4
const student1 = new Student('준현', 12000, 'javascript');
console.log(student1.name);  
console.log(student1.age);   
console.log(student1.study); 

//.5
class Tutee extends Person {
    constructor(name, age, study) {
        super(name, age);
        this.study = study;
    }

    info() {
        console.log(`저의 이름은 ${this.name} 나이는 ${this.age} 현재 ${this.study}를 학습하고 있습니다.`);
    }
}

const tutee = new Tutee('dohyun', 24, 'javascript');
tutee.info();  
//.6
console.log(Student.prototype instanceof Person);  
console.log(tutee instanceof Student);  

/*
1. 
Person 클래스로 정의 합니다.
name과 age 속성을 갖고 있으며, info 메서드는 
해당 속성을 사용하여 메시지를 출력합니다.

2. jung 인스턴스가 생성되고, info 메서드 호출 시  
 "저의 이름은 yuno 나이는 20 입니다."가 출력됩니다.

3.
Student 클래스는 Person 클래스를 상속받고 추가적으로 study 속성을 갖게됩니다.

4.
student1 인스턴스가 생성되었으며, name,age,study 속성이 각각 출력됩니다.

5.
Tutee 클래스는 person 클래스를 상속받고 info 메서드를 오버라이드하여 학습 메시지를 출력합니다.

tutee 인스턴스가 생성되었으며, info 메서드 호출시 "저의 이름은 dohyun나이는 24 현재 javascript를 학습하고 있습니다."가 출력됩니다.

6.
Student 클래스가 Person 클래스의 하위 클래스인지 확인하면 true 가 출력 이 되고
tutee 인스턴스가 Student 클래스의 인스턴스인지 확인하면 false가 출력됩니다.

Tutee 는 person을 상속 받았지만 Student를 상속 받지 않았기 때문입니다.

*/ 