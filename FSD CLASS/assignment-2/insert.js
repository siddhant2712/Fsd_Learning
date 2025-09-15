let newBtn = document.createElement("button");
newBtn.innerHTML = "Click Me";
console.dir(newBtn);

let divs = document.querySelector("div");
// divs.append(newBtn);

divs.prepend(newBtn); // prepends the button to the div
// divs.before(newBtn); // adds the button before the div
// divs.after(newBtn); // adds the button after the 

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hello, I am new!</i>";
document.querySelector("body").prepend(newHeading); // prepends the heading to the body

let para = document.querySelector("p");
para.remove(); // removes the paragraph

let newpara = document.createElement("p");
newpara.innerHTML = "<i>This is just for the example of the DOM manipulation</i>";
document.querySelector("body").append(newpara); // appends the paragraph to the body

