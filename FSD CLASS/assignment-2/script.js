console.dir(window);
console.dir(window.document);
console.dir(window.document.body);
console.dir(window.document.body.children);
console.dir(window.document.body.children[0]);
console.dir(window.document.body.children[2].innerHTML);
document.body.style.background = "green";

let paragraph  = document.getElementById("para");
console.log(paragraph);

let headings = document.getElementsByClassName("heading");
console.dir(headings);
console.log(headings);

let button = document.getElementById("myId");
button.addEventListener("mouseover", () => {
    button.style.transform = "scale(1.05)";
});

button.addEventListener("mouseout", () => {
    button.style.transform = "scale(1)";
});
console.dir(button);
console.log(button);

let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
console.dir(paragraphs);

let element = document.querySelector("p"); // returns the first element that matches the selector
console.log(elements);

let elements = document.querySelectorAll("p"); // returns all elements that match the selector
console.log(elements);

let item = document.querySelector(".heading"); // returns the first element that matches the selector
console.log(item);

let ele = document.querySelector("#myId"); // returns the first element that matches the selector
console.log(ele);

