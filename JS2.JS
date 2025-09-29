class classA {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log(`Person name is ${this.name} and age is ${this.age}`);
    }
}
let myinfo = new classA("vineet" , 20);
myinfo.display();