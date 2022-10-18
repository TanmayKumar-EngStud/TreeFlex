let imgLinks = [
 "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
 "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
 "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
 "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
 "https://images.unsplash.com/photo-1476903930099-d0ddfec9a475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
 "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80",
 "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1378&q=80",
 "https://images.unsplash.com/photo-1472711649025-510d7c09a6fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1762&q=80",
 "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80",
 "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
 "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
];

function activate() {
 let imgLocation = document.querySelector(".photoSelector .imgArea .img");
 imgLocation.innerHTML = "";
 let ul = document.createElement("ul");

 for (let i of imgLinks) {
  let li = document.createElement("li");
  let img = document.createElement("img");
  img.src = i;
  li.appendChild(img);
  ul.appendChild(li);
 }
 imgLocation.appendChild(ul);
 let images = document.querySelectorAll(
  ".photoSelector .imgArea .img ul li img"
 );
 images[0].style.opacity = 1;
}
activate();

let images = document.querySelectorAll(
 ".photoSelector .imgArea .img ul li img"
);
let forwardBtn = document.querySelector(".photoSelector .imgArea #forFront");
let backwardBtn = document.querySelector(".photoSelector .imgArea #forBack");

forwardBtn.addEventListener("click", (event) => {
 let images = document.querySelectorAll(
  ".photoSelector .imgArea .img ul li img"
 );
 for (let i in images) {
  if (getComputedStyle(images[i]).opacity == 1) {
   images[i++].style.opacity = 0;
   i = i == images.length ? 0 : i;
   images[i].style.opacity = 1;
   return;
  }
 }
});
backwardBtn.addEventListener("click", (event) => {
 let images = document.querySelectorAll(
  ".photoSelector .imgArea .img ul li img"
 );
 for (let i in images) {
  if (getComputedStyle(images[i]).opacity == 1) {
   images[i--].style.opacity = 0;
   i = i < 0 ? images.length - 1 : i;
   images[i].style.opacity = 1;
   return;
  }
 }
});
function findActive() {
 for (let i in images) {
  if (getComputedStyle(images[i]).opacity == 1) {
   return i;
  }
 }
}
function removeImg(i) {
 let temp = [];
 for (let x in imgLinks) {
  if (x != i) {
   temp.push(imgLinks[x]);
  }
 }

 imgLinks = temp;
 return;
}
// Here comes the main task.
let addNew = document.querySelector(".inputArea .getMember #addNew");
let mapObj = new Map();
addNew.addEventListener("click", (event) => {
 let i = +findActive();

 let Elem = {
  name: document.querySelector(".inputArea .getMember #name").value,
  phno: document.querySelector(".inputArea .getMember #phno").value,
  usrId: document.querySelector(".inputArea .getMember #UserId").value,
  img: i,
 };
 console.log(Elem);
 for (let x in Elem) {
  if (Elem[x] === "") {
   alert("Fill all the entries!");
   return;
  }
 }
 mapObj.set(Elem.usrId, Elem);
 removeImg(i);

 activate();
});
