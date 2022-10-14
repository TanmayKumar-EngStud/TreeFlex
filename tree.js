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
  // what we have to create is <ul> tag inside that there will be <li> tag.
  // and inside the <li> tag there will be the <span.tf-nc> tag which will hold the values.
  // we would need the bottom up approach here.
  // create the span tag first then we will create the li tag and we will add all the elements inside that li tag.
  let span = document.createElement("span");
  span.classList.add("tf-nc");
  span.innerHTML += Tree.root;
  let li = document.createElement("li");
  li.appendChild(span); // here we have add the main node.

  // now we are adding the child node.
  // before that we know that all the child nodes must be wrapped inside the ul tag.
  // so creating the ul tag.

  if (Tree.elem.length != 0) {
   let ul = document.createElement("ul");
   let i = 0;
   while (Tree.elem.length > i) {
    ul.appendChild(tree.draw(Tree.elem[i]));
    i++;
   }
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
