let arr = [85,97,44,37,76,60];
let sum = 0;
for(let item of arr){
    sum += item;
}
let avg = sum/arr.length;
console.log("Sum: " + sum);
console.log(`the average marks : ${avg}`);
