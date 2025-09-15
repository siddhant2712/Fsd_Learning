let arr = [250,645,300,900,50];
let ans = [];
for(let i = 0; i < arr.length; i++){
    let discount = arr[i]/10;
    ans[i] -= discount;
}
console.log(ans);
