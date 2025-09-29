const Student = {
    fullName : "Vineet Chaudhary",
    age : 20,
    cgpa : 8.09,
    isPassed : true,
};
console.log(Student);
console.log(Student.fullName);
console.log(Student["age"]);

Student["age"]++;
console.log(Student.age);