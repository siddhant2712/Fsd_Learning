let arr = [1,2,3,4,5];

arr.forEach(function printVal(val) {
    console.log(val);
});


arr.forEach((val,idx,arr) => {
    console.log(val,idx,arr);
}
);
