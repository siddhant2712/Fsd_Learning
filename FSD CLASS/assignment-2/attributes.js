let divs = document.querySelector(".box");
console.log(divs);

let id = divs.getAttribute("id");
console.log(id); // mainBox

let name = divs.getAttribute("name");
console.log(name); // divName

let para = document.querySelector("p");
console.log(para.getAttribute("class")); // oldClass

para.setAttribute("class", "123");
console.log(para.getAttribute("class")); // 123


