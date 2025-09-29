let marks = [20,12,30,34,21,67,45,33,45];
function findmin(marks){
    let min = marks[0];
    for(let i = 1; i< marks.length; i++){
        if(min > marks[i]){
            min = marks[i];
        }
    }
    return min;
}

function findmax(marks){
    let max = marks[0];
    for(let i = 1;i < marks.length; i++){
        if(max < marks[i]){
            max = marks[i];
        }
    }
    return max;
}

function findaverage(marks){
    let sum = 0;
    for(let i = 0; i<marks.length ; i++){
        sum += marks[i];
    }
    return sum / marks.length;
}

let min = findmin(marks);
let max = findmax(marks);
let average = findaverage(marks);

console.log("min: "+min);
console.log("max: "+max);
console.log("average: "+average);