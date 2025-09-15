let d1 = document.querySelectorAll(".box");
d1.forEach((ele) => {
    ele.addEventListener("click", () => {
        ele.style.background = "red";
    });
});
d1.forEach((ele) => {
    ele.addEventListener("mouseover", () => {
        ele.style.background = "blue";
    });
});
d1.forEach((ele) => {
    ele.addEventListener("mouseout", () => {
        ele.style.background = "green";
    });
});

// d1[0].innerText = "new uniques value 1";
// d1[1].innerText = "new unique value 2";
// d2[2].innerText = "new unique value 3";

let index = 1;
for(div of d1){
    div.innerText = `new unique value ${index++}`;
}
