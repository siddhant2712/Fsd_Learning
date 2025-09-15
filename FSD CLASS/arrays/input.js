let marks = [10, 20, 30, 40, 50];
for(let i = 0 ; i < marks.length ; i++){
    console.log(marks[i] + ", " + (i+1));
}

for (let hero of marks) {
    console.log(hero);
}

let cities = ["Delhi", "Mumbai", "Banglore", "Chennai"];
for (let city of cities) {
    console.log(city.toUpperCase());
}
