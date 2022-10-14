import { tree } from "./tree.js";
function select(what, index) {
 return document.querySelectorAll(what)[index];
}

let button = select("button#btn", 0);

button.addEventListener("click", (event) => {
 let text = select("textarea#txtArea", 0).value;
 // console.log(text);
 // now we need to extract the commands.
 let ourTree = commands(text);

 let drawingArea = select(".tf-tree", 0);
 let drawing = tree.draw(ourTree);
 let ulFinal = document.createElement("ul");
 ulFinal.appendChild(drawing);
 console.log(ulFinal);
 document.querySelector(".tf-tree").innerHTML = ""; // clearing up the space.
 drawingArea.append(ulFinal);
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
