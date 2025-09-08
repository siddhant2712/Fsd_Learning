let arr = [1,323,2,423,2,3,4,23];

let evenArr = arr.filter((val) => {
    return val % 2 === 0;
});

console.log(evenArr);