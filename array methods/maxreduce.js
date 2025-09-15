let arr  = [3,53,43,4,24,24,4];

const max = arr.reduce((prev,curr) => {
    return prev > curr ? prev : curr;
});
console.log(max);