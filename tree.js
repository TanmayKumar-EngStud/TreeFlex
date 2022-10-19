import { mapObj, imageLinks } from "./carousel.js";

export class tree {
 root = null;
 elem = [];
 constructor(elem) {
  this.root = elem;
  this.elem = [];
 }
 static find(ptr, elem) {
  if (elem === ptr.root) {
   return ptr;
  }
  let res;
  let i = 0;
  while (i != ptr.elem.length) {
   res = tree.find(ptr.elem[i], elem);
   if (res != null) {
    return res;
   }
   i++;
  }
  return null;
 }
 static draw(Tree) {
  let span = document.createElement("span");
  span.classList.add("tf-nc");
  // Here we will make the divs.
  let imgDiv = document.createElement("div");
  imgDiv.classList.add("tf-img");
  let img = document.createElement("img");
  let details = mapObj.get(Tree.root);

  // user image.
  img.src = details["img"];
  imgDiv.appendChild(img);

  // user details.
  let detailsDiv = document.createElement("div");
  detailsDiv.classList.add("tf-details");
  let usrName = document.createElement("div");
  usrName.classList.add("usrname");
  usrName.innerHTML = "User Name: " + details["name"];
  let phno = document.createElement("div");
  phno.classList.add("phno");
  phno.innerHTML = "Phone Number: " + details["phno"];
  let id = document.createElement("div");
  id.classList.add("usrID");
  id.innerHTML = "User Id: " + details["usrId"];
  detailsDiv.appendChild(usrName);
  detailsDiv.appendChild(phno);
  detailsDiv.appendChild(id);

  span.appendChild(imgDiv);
  span.appendChild(detailsDiv);
  let li = document.createElement("li");
  li.appendChild(span); // here we have add the main node.

  if (Tree.elem.length != 0) {
   let div = document.createElement("div");
   div.classList.add("Hider", "tf" + Tree.root);
   div.innerHTML = "-";
   let ul = document.createElement("ul");
   ul.classList.add("tf" + Tree.root);
   let i = 0;
   while (Tree.elem.length > i) {
    ul.appendChild(tree.draw(Tree.elem[i]));
    i++;
   }
   span.appendChild(div);
   li.appendChild(ul);
  }
  return li;
 }
 add(x, atY) {
  if (this.root == null) {
   this.root = atY;
   let temp = new tree(x);
   this.elem = [temp];
   return;
  }
  // here x is just a number.
  let pos = tree.find(this, atY);
  if (pos === null) {
   console.log("the " + atY + " doesn't exist!!");
   return;
  } else {
   let temp = new tree(x);
   pos.elem.push(temp);

   // console.log("Added successfully!!");
   return;
  }
 }
}
