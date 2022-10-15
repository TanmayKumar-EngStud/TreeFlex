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
  span.innerHTML += Tree.root;
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
