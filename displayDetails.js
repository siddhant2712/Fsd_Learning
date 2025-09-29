class Student {
    constructor(name, age, city, course) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.course = course;
    }

    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`City: ${this.city}`);
        console.log(`Course: ${this.course}`);
    }
}

const student1 = new Student("vineet", 20, "Ghaziabad", "Information Technology");
student1.displayDetails();
const student2 = new Student("zohadur", 24, "Delhi", "Information Technology");
student2.displayDetails();
const student3 = new Student("suniti", 27, "Delhi", "Information Technology");
student3.displayDetails();
const student4 = new Student("vishnu", 28, "Delhi", "Information Technology");
student4.displayDetails();
const student5 = new Student("shivam", 30, "Delhi", "Information Technology");
student5.displayDetails();
