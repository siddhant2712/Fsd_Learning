console.log("Student Object");
const Student = {
    fullName : "Vineet Chaudhary",
    age : 20,
    cgpa : 8.09,
    isPassed : true,
};
console.log(Student);


// operators
let a = 10;
let b = 20;
console.log("a ===b", a=== b); // check if a is equal to b with same data type
console.log("a !==b", a!== b);

// program for mode of the screen
let mode = "dark";
let color;
if (mode === "dark") {
    color = "black";
}
else if(mode === "blue") {
    color = "blue";
}
else if(mode ==="pink"){
    color = "pink";
}
else {
    color = "white";
}
console.log("color :", color);


// ternary conditional statement
let age = 25;
age >= 18 ? console.log("Adult") : console.log("Not Adult");

// switch case
const day = 3;
switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}
