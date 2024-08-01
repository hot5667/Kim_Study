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