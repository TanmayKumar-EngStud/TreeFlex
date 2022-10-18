import { tree } from "./tree.js";

function select(what, index) {
 return document.querySelectorAll(what)[index];
}

let generate = select("button#btn", 0);

generate.addEventListener("click", (event) => {
 let text = select("textarea#txtArea", 0).value;

 let ourTree = commands(text);

 let drawingArea = select(".tf-tree", 0);
 let drawing = tree.draw(ourTree);
 let ulFinal = document.createElement("ul");
 ulFinal.appendChild(drawing);
 // console.log(ulFinal);
 document.querySelector(".tf-tree").innerHTML = ""; // clearing up the space.
 drawingArea.append(ulFinal);
 secondStep();
});

function commands(text) {
 let commandList = [...text.split("\n")];

 let mainTree = new tree();
 for (let command of commandList) {
  let elem = [...command.split(" - ")];
  mainTree.add(elem[1], elem[0]);
 }
 console.log(mainTree);

 return mainTree;
}

// part 2: hiding the elements.
function secondStep() {
 let Hider = [...document.querySelectorAll(".Hider")];
 // console.log(Hider);
 Hider.forEach((hider) => {
  // console.log(hider);
  hider.addEventListener("click", (event) => {
   // getting the list of all the class names from the event.
   let list = event.target.classList;
   // find the ul element with the id: list[1];
   let target = select("ul." + list[1], 0);
   console.log(target);
   if (getComputedStyle(target).visibility == "hidden") {
    [...document.querySelectorAll("ul." + list[1] + " *")].forEach((elem) => {
     if (getComputedStyle(elem).visibility == "hidden") {
      elem.style.visibility = "visible";
     }
    });
    document.querySelector("ul." + list[1]).style.visibility = "visible";
    select(".Hider." + list[1], 0).innerHTML = "-";
   } else {
    // select all the elements inside and change visibility to hidden of every one of them.
    [...document.querySelectorAll("ul." + list[1] + " *")].forEach((elem) => {
     elem.style.visibility = "hidden";
    });
    document.querySelector("ul." + list[1]).style.visibility = "hidden";
    select(".Hider." + list[1], 0).innerHTML = "+";
   }
  });
 });
}
