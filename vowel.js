let arr = ["hello java script world"];

function findvowels(arr){
    let vowels  = ['a','e','i','o','u','A','E','I','O','U'];
    let count = 0;
    let result = [];

    for(let i = 0; i < arr.length; i++ ){
        for(let j = 0; j< arr[i].length; j++){
            let char = arr[i][j];
            if(vowels.includes(char)){
                result.push(char);
                count++;
            }
        }
    }
    return {result,  count};
}

let { result, count} = findvowels(arr);
console.log("vowels: "+result.join(" , "));
console.log("vowel count: "+count);

