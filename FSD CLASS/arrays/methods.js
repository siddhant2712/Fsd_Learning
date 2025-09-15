let fooditems = ["Pizza", "Burger", "Pasta", "Ice Cream"];
let heroes = ["Ironman", "Thor", "Hulk", "Captain America"];
console.log("push: "+fooditems.push("French Fries"));
console.log("pop: "+fooditems.pop());
console.log("string: "+fooditems.toString());
console.log("concatination: "+fooditems.concat(heroes));
console.log("adding element in front(unshift): "+fooditems.unshift("French Fries"));
console.log("deleting element from front(shift): "+heroes.shift());
console.log("slicing from 1 to 3: "+heroes.slice(1, 3));
console.log("splice from 1 to 3: "+heroes.splice(0, 0, "Black Widow", "Hawkeye"));
console.log(heroes);
console.log(heroes.includes("Thor"));


let arr = [85, 97, 44, 37, 76, 60];
let el = arr.splice(1, 2,101,102);
console.log(arr);